import AppConfig from './'
import store from '../store'

export const UploadByCordova = (filePath, oldPath) => {
    var options = {
        fileKey: "file",
        fileName: filePath.substr(filePath.lastIndexOf('/') + 1),
        chunkedMode: false,
        mimeType: "image/jpeg",
        params: oldPath ? { data: [oldPath.substr(oldPath.lastIndexOf('/') + 1)] } : undefined
    }
    return new Promise((resolve, reject) => {
        store.commit('loading', true)
        var ft = new FileTransfer()
        ft.upload(filePath, AppConfig.base + 'fileupload/upload', successCallBack, errorCallBack, options)

        function successCallBack(res) {
            store.commit('loading', false)
            resolve(JSON.parse(res.response))
        }

        function errorCallBack(err) {
            store.commit('loading', false)
            reject(err)
        }
    })


}
export const isRTL = (text) => {
    return /[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(text)
}