import { request } from "../utils/request"

// 获取茶类商品导航
export

function getTeaTypeNavApi() {
    return request({
        url: "/nav/get",
        method: "POST"
    })
}
// 获取品牌资讯s
export const getBrandInformationApi = (data) => {
    return request({
        url: "/news/get",
        method: "POST",
        data,
    })
}