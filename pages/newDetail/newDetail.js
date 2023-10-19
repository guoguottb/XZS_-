// pages/newDetail/newDetail.js
import {
    formatNum,
    formatTime
} from '../../utils/filter.js'
import { getNewsDetailApi } from '../../api/apis'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        options: {},
        articleDetail: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            options,
        })
        this.getNewsDetail()
    },
    // 获取新闻详情
    async getNewsDetail() {
        try {
            const res = await getNewsDetailApi({
                id: this.data.options.id
            })
            let data = res.data.data
            data.publish_date = formatTime(data.publish_date, 7)
            data.view_count = formatNum(data.view_count)
            data.content = data.content.replace(/<p>/g, "<p class='pstyle'>")
            this.setData({
                articleDetail: data
            })
            console.log(this.data.articleDetail, "articleDetail")
        } catch (error) {

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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})