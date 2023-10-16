import { formatNum, formatMonthDay } from '../../utils/filter.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 茶品导航
        TeaType: [],
        // 品牌资讯
        article: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getNavData()
        this.getBrandInformation()
    },
    // 获取商品导航
    getNavData() {
        wx.request({
            url: 'https://tea.qingnian8.com/nav/get',
            method: "POST",
            success: res => {
                this.setData({
                    TeaType: res.data.data
                })
            }
        })
    },
    // 获取品牌资讯
    getBrandInformation() {
        wx.request({
            url: 'https://tea.qingnian8.com/news/get',
            method: "POST",
            data: {
                "limit": 3, //获取多少个
                "size": 0 //分页（过滤的个数）
            },
            success: res => {
                res.data.data.forEach(item => {
                    item.view_count = formatNum(item.view_count)
                    item.publish_date = formatMonthDay(item.publish_date)
                })
                this.setData({
                    article: res.data.data
                })
                console.log(this.data.article)
            }
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})