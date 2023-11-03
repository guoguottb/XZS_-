// pages/classify/classify.js
import {
    getTeaTypeNavApi,
    getProductDetailApi
} from "../../api/apis"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        navList: [],
        productList: [],
        loading: false,
        isData: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        console.log(options, "options")
        this.setData({
            active: Object.keys(options).length === 0 ? 0 : Number(options.index)
        })
        await this.getTeaTypeNav()
        this.getProductDetail()
    },
    // 获取茶品分类
    async getTeaTypeNav() {
        try {
            const res = await getTeaTypeNavApi()
            this.setData({
                navList: res.data.data
            })
            console.log(this.data.navList)
        } catch (error) {
            console.log()
        }
    },
    // 根据茶类id获取产品详情
    async getProductDetail(size = 0) {
        try {
            // 获取数据的时候显示loading
            this.data.loading = true
            const res = await getProductDetailApi({
                navid: this.data.navList[this.data.active]._id,
                limit: 4, //获取多少条
                size: this.data.productList.length
            })
            this.setData({
                productList: [...this.data.productList, ...res.data.data]
            })
            if (res.data.total === this.data.productList.length) {
                this.setData({
                    isData: true
                })
            }
            console.log(this.data.productList, "productList")
            console.log(res)
        } catch (error) {

        } finally {
            this.data.loading = false
        }
    },
    // 茶类切换事件
    onChange(e) {
        // 切换tabs的时候重置数据
        this.setData({
                active: e.detail.index,
                productList: [],
                loading: false,
                isData: false
            })
            // 调用接口获取商品茶
        this.getProductDetail()
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
    onPullDownRefresh() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if (this.data.isData) return console.log("暂无更多数据了")
        this.getProductDetail()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})