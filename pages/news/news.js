// pages/news/news.js
import {
    formatNum,
    formatTime
} from '../../utils/filter.js'
import {
    getBrandInformationApi
} from "../../api/apis"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 品牌资讯
        article: [],
        articleTotalFlage: false,
        articleLoading: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getBrandInformation()
    },
    // 获取品牌资讯
    async getBrandInformation(size = 0) {
        if (this.data.articleTotalFlage) return
        this.setData({
            articleLoading: true
        })
        try {
            const res = await getBrandInformationApi({
                    limit: 7, //获取多少个
                    size //分页（过滤的个数）
                }, )
                // 处理一下相应的数据格式
            res.data.data.forEach(item => {
                item.view_count = formatNum(item.view_count)
                item.publish_date = formatTime(item.publish_date, 5)
            })
            console.log(res)
                // 触底加载数据 所以这里用的拓展合并数组
            this.setData({
                article: [...this.data.article, ...res.data.data]
            })
            this.setData({
                    articleLoading: false
                })
                // 网络节流阀
            this.data.articleTotalFlage = this.data.article.length == res.data.total ? true : false
                // 关闭下拉刷新
            wx.stopPullDownRefresh()
        } catch (error) {
            console.log(error, "getBrandInformation")
        }
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        // 初始化页面数据
        this.setData({
            article: [],
            articleTotalFlage: false,
            articleLoading: false
        })
        this.getBrandInformation()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        this.getBrandInformation(this.data.article.length)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})