const baseURL = 'https://tea.qingnian8.com';

export function request(params) {

    let dataObj = params.data || {};
    let headerObj = {
        'content-type': 'application/json'
    }

    return new Promise((resolve, reject) => {
        wx.request({
            url: baseURL + params.url,
            method: params.method || "GET",
            data: dataObj,
            header: headerObj,
            success: res => {
                if (res.data.errCode != 0) {
                    reject(res);
                    wx.showToast({
                        title: res.data.errMsg,
                        mask: true,
                        icon: "error"
                    })
                    return;
                }
                resolve(res)
            },
            fail: err => {
                reject(err)
            }
        })
    })
}