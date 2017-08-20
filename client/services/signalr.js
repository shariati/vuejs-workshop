import {
    hubConnection
} from 'signalr-no-jquery';
import service from "./index.js";
import store from "../store";
var retryConnection = 0
var hubProxy = null;
var signalrEvents = [];

export default {
    connect() {
        const connection = hubConnection(service.signalrBase);
        hubProxy = connection.createHubProxy(service.signalrHub);
        var authData = JSON.parse(localStorage.getItem("authorizationData"));
        if (authData) {
            connection.qs = {
                userId: authData.userId
            }
        }
        connection.logging = true;
        hubProxy.on('init', () => {});
        connection.error((error) => {
            if (retryConnection < 3) {
                this.tokenExpired().then(() => {
                    connection.start({
                        withCredentials: false
                    }).then((response) => {
                        this.updateConnectionId(response.id);
                    });
                })
                retryConnection++;
            }
        });

        // connect
        return connection.start({
            withCredentials: false,
            pingInterval: 60000
        }).done(() => {
            console.log('Now connected, connection ID=' + connection.id);
        }).fail((err) => {
            console.log(err);
            console.log('Could not connect');
        });
    },
    subscribe(eventName, callback) {
        let event = signalrEvents.find(e => { return e == eventName });
        if (!event) {
            //add new event to list
            signalrEvents.push(eventName);

            if (hubProxy != null) {
                this.onEvent(eventName, callback);
            } else {
                connect(service.signalrHub)
                    .then(() => {
                        this.onEvent(eventName, callback);
                    })
            }
        } else {
            console.log(eventName + " already subscribed");
        }
    },
    onEvent(eventName, callback) {
        this.tokenExpired()
            .then(() => {
                hubProxy.on(eventName, (result) => {
                    if (callback) {
                        callback(result);
                    }
                });
            })
    },
    tokenExpired() {
        var authData = localStorage.getItem("authorizationData");
        return new Promise((resolve, reject) => {
            if (authData) {
                //todo handler refresh token here 
                // console.log(authData); 
                resolve();
                // store.dispatch("refreshToken", (response) => { 
                //     resolve(); 
                // }, () => { 
                //     reject(); 
                // }); 
            }
        });
    },
    updateConnectionId(id) {
        localStorage.setItem("signalrConnectionId", id);
    }

}