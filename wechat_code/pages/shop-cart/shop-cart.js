const {
    list,
    update,
    deleteData
} = require("../../api/index.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsNum: '',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        slideProductList: [],
        cartList: [],
        baseURL: "",
        allSelect: "circle",
        buynumber: 0,
        count: 0,
        lastX: 0,
        lastY: 0,
        text: "没有滑动",

    },

    change(e) {
        var that = this
        var index = e.currentTarget.dataset.index
        var select = e.currentTarget.dataset.select

        if (select == "circle") {
            var stype = "success"
        } else {
            var stype = "circle"
        }
        var newList = that.data.slideProductList
        newList[index].select = stype
        that.setData({
            slideProductList: newList
        })
        that.countNum()
        that.count()
    },
    addtion(e) {
        var that = this
        var index = e.currentTarget.dataset.index
        var buynumber = e.currentTarget.dataset.buynumber
        //默认99件
        if (buynumber < 99) {
            buynumber++
        }
        var newList = that.data.slideProductList
        newList[index].buynumber = buynumber
        that.setData({
            goodsNum: buynumber,
            slideProductList: newList
        })
        that.countNum()
        that.count()
    },
    inputNum: function (e) {
        var buynumber = e.detail.value;
        this.setData({
            goodsNum: buynumber
        })
    },
    //减法
    subtraction(e) {
        var that = this
        const item = e.currentTarget.dataset.item
        var index = e.currentTarget.dataset.index
        var buynumber = item.buynumber
        var newList = that.data.slideProductList
        if (buynumber <= 1) { //当数量为1件时，再次点击移除该商品
            wx.showModal({
                title: '移除购物车？',
                content: '',
                complete: async (res) => {
                    if (res.confirm) {
                        await deleteData('cart', [item.id])
                        this.onLoad()
                    }
                }
            })

            return;
        } else {
            buynumber--
            newList[index].buynumber = buynumber
        }
        that.setData({
            goodsNum: buynumber,
            slideProductList: newList
        })
        const data = newList.map(v => {
            delete v.select
            return v
        })
        update('cart', data[0])
        that.countNum()
        that.count()
    },
    //全选
    allSelect: function (e) {
        var that = this
        var allSelect = e.currentTarget.dataset.select //先判断是否选中
        var newList = that.data.slideProductList
        console.log(newList)
        if (allSelect == "circle") {
            for (var i = 0; i < newList.length; i++) {
                newList[i].select = "success"
            }
            var select = "success"
        } else {
            for (var i = 0; i < newList.length; i++) {
                newList[i].select = "circle"
            }
            var select = "circle"
        }
        that.setData({
            slideProductList: newList,
            allSelect: select
        })
        that.countNum()
        that.count()
    },

    countNum: function () { //计算数量
        var that = this
        var newList = that.data.slideProductList
        var allNum = 0
        for (var i = 0; i < newList.length; i++) {
            if (newList[i].select == "success") {
                allNum += parseInt(newList[i].buynumber)
            }
        }
        parseInt
        that.setData({
            buynumber: allNum
        })
    },

    count: function () { //计算金额方法
        var that = this
        var newList = that.data.slideProductList
        var newCount = 0
        for (var i = 0; i < newList.length; i++) {
            if (newList[i].select == "success") {
                newCount += newList[i].buynumber * newList[i].price
            }
        }
        that.setData({
         count: newCount.toFixed(2)
        })
    },
    settlementTap() {
        wx.setStorageSync('orderGoods', this.data.slideProductList)
        getApp().globalData.total = this.data.count
        wx.navigateTo({
            url: '/pages/shop-orders/orders-confirm',
        })
    },



    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        const obj = {
            page: 1,
            limit: 20,
            userid: getApp().globalData.userInfo.id
        }
        const res = await list('cart', obj)
        const baseURL = wx.getStorageSync('baseURL')
        this.setData({
            cartList: res.data.list
        })
        // res.data.list['select'] = 'circle'
        const slideProductList = res.data.list.map(v => {
            v['select'] = 'circle'
            return v
        })
        // select: "circle",
        this.setData({
            slideProductList,
            baseURL
        })
        console.log("slideProductList", this.data.slideProductList);
        var width = wx.getSystemInfoSync().windowWidth
        var height = wx.getSystemInfoSync().windowHeight
        height = height - 35 - 53;
        this.setData({
            height: height
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})