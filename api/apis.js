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
    // 获取新闻详情
export function getNewsDetailApi(data) {
    return request({
        url: "/news/detail",
        method: "POST",
        data,
    })
}
// 根据茶品id获取产品详情
export function getProductDetailApi(data) {
    return request({
        url: "/product/getlist",
        method: "POST",
        data,
    })
}
//获取产品详情
export function queryProductDetail(data) {
    return request({
        url: "/product/detail",
        method: "POST",
        data
    })
}