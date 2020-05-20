import {api} from "../config";

class Http {

    static request({subUrl, params, method = 'GET'}) {
        return new Promise(resolve => {
            wx.request({
                url: api.baseUrl + subUrl,
                data: params,
                method,
                success: res => {
                    resolve(res.data)
                }
            })
        })
    }
}

export {
    Http
}