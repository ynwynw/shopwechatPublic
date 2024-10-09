const {
deleteData,
update,
add,
page,
list,
detail,
save
} = require("../../api/index.js")
const utils = require("../../utils/index.js")
Page({
data: {
token:  '',
baseURL:'',
id: getApp().globalData.detailId,
userId:getApp().globalData.userInfo.id,
detailList: {},
payAuth:"",
picture:"",
priceVisible:false,
goodname:"",

buyNumber:1,
isInCart:false,
cartForm:{
userid:getApp().globalData.userInfo.id
},
islike: false,
commmentList: [],

},
async    onLoad(option) {

this.setData({
id:getApp().globalData.detailId.id,
token:   wx.getStorageSync('token'),
baseURL:   wx.getStorageSync('baseURL') + '/'
})
this.handleUpdateData()
},
//立即预订
orderTap(){
if (this.data.activeSeat.length <= 0) {
wx.showToast({
title: '请选择需要预订的位置',
icon: 'none'
})
return
}
const userInfo=getApp().globalData.userInfo
const activeSeat = this.data.activeSeat.join(',') + ',' + this.data.detailList.selected
let data = {
orderid: this.createOrderId(),
tablename: 'shangpinxinxi',
userid:userInfo.id,
goodid: this.data.detailList.id,
    goodname:  this.data.detailList.shangpinmingcheng,
buynumber:  this.data.activeSeat.length,
total: 0,
discounttotal: 0,
address: this.data.activeSeat,
status: '已支付',
discountprice: this.data.detailList.vipprice,
picture:  this.data.picture[0],
shangjiazhanghao: this.data.detailList.shangjiazhanghao,
goodtype: this.data.detailList.shangpinleixing,
}
if(this.data.detailList.price){
data['status'] = '未支付'
data['price'] = this.data.detailList.price
data['total'] = parseFloat(data['price'] * activeSeat.length).toFixed(2)
wx.showModal({
title: '提示',
content: '是否预订选中座位',
complete: async (res) => {
if (res.confirm) {
    wx.setStorageSync('orderGoods',[data])
    wx.setStorageSync('options',{type:1,seat:1})
    wx.navigateTo({
        url: "/pages/shop-orders/orders-confirm"
    })
}
}
})
}

}
,

authTap() {
    if (!this.data.token) {
        wx.showToast({
            title: '请先登陆',
            icon: 'none'
        })
        return
    }
},
async handleUpdateData() {
// 更新当前页面的数据
var that = this
const id = getApp().globalData.detailId
if (id) {
const {
data
} = await detail("shangpinxinxi",id)
this.setData({
payAuth:utils.isAuthFront('shangpinxinxi','支付')
})

data["price"] = data?.price?.toFixed(2)
const predetailList = Object.assign({}, data)
this.setData({
predetailList
})
const detailList = data
this.setData({
detailList,
picture: detailList.shangpintupian.split(','),
})

if (!this.data.token) {
return
}


this.getInCartList();
await this.searchList("isStoreup")
}
const commentData = {
page: 1,
limit: 10,
refid: getApp().globalData.detailId
}
const commentRes = await list("discussshangpinxinxi", commentData)
this.setData({
commmentList: commentRes.data?.list
})

},

onUnload: function () {
getApp().globalData.detailList = {}
console.log('页面被卸载，执行销毁操作');
},
async addCommentap() {

if (!this.data.token) {
return
}
let params = {
page: 1,
limit: 1,
status: '已完成',
goodid: this.data.detailList.id
}
let res=  await page('orders', params)
if(res.data.list.length==0) {
wx.showToast({
    title: '请完成订单后再评论',
    icon: "none"
})
return;
}

getApp().globalData.detailId=this.data.detailList.id
wx.setStorageSync('tableName',"shangpinxinxi" )
wx.navigateTo({
url: `/pages/discussshangpinxinxi/update-and-add`,
})
console.log("uusuer", getApp().globalData.userInfo);
},
async listAdd(anyType) {
const userid = getApp().globalData.userInfo.id
const data = {
            name: this.data.detailList.shangpinmingcheng,
        picture:  this.data.detailList.shangpintupian,
    inteltype:this.data.detailList.shangpinleixing,
    tablename: `shangpinxinxi`,
// type 收藏是1 关注是41
refid:getApp().globalData.detailId,
userid,
type: anyType
}
await add("storeup", data)
},
async searchList(name) {
const userid = getApp().globalData.userInfo.id
const searchData = {
page: 1,
limit: 1,
refid:getApp().globalData.detailId,
tablename: "shangpinxinxi",
userid,
// 1收藏 %2%点赞
type: 1
}
if (name == "isStoreup" ) {
const storeupRes = await list("storeup", searchData)
if (storeupRes?.data?.list?.length > 0) {
    // 收藏
    this.setData({
        islike: true
    })
    const id = [storeupRes?.data?.list[0]?.id]
    return id
}
else {
    this.setData({
        islike: false
    })
}
}
},
likeTap() {

if (!this.data.token) {
return
}
wx.showModal({
title: '提示',
content: '是否收藏',
complete: async (res) => {
if (res.confirm) {
    // 添加收藏
    await this.listAdd(1)
    await this.listUpdate('islike')
    await this.searchList("isStoreup")
}
}
})

},
cancelLikeTap() {

if (!this.data.token) {
return
}
wx.showModal({
title: '提示',
content: '是否取消收藏',
complete: async (res) => {
if (res.cancel) {}
if (res.confirm) {
    const id = await this.searchList("isStoreup")
    // 删除收藏
    await deleteData('storeup', id)
    await this.listUpdate('cancelislike')
    this.searchList("isStoreup")
}
}
})

},
async listUpdate(name) {
const predetailList = this.data.predetailList
const detailList = this.data.detailList
predetailList.shangpintupian = this.data.picture[0]
if (name == "thumbsupnum") {
// 点赞
predetailList.thumbsupnum = predetailList.thumbsupnum + 1
detailList.thumbsupnum = detailList.thumbsupnum + 1
}
if (name == "cancelthumb") {
// 取消点赞
predetailList.thumbsupnum = predetailList.thumbsupnum - 1
detailList.thumbsupnum = detailList.thumbsupnum - 1
}
if (name == "crazilynum") {
predetailList.crazilynum = predetailList.crazilynum + 1
detailList.crazilynum = detailList.crazilynum + 1
}
if (name == "cancelCrazily") {
predetailList.crazilynum = predetailList?.crazilynum - 1
detailList.crazilynum = detailList.crazilynum - 1
}
if (name == 'cancelislike') {
predetailList.storeupnum = predetailList.storeupnum - 1
detailList.storeupnum = detailList.storeupnum - 1

}
if (name == "islike") {
predetailList.storeupnum = predetailList.storeupnum + 1
detailList.storeupnum = detailList.storeupnum + 1
}
this.setData({
detailList
})
const resUpdate = await update('shangpinxinxi', predetailList)
if (resUpdate.code == 0) {
this.setData({
predetailList,
"detailList.crazilynum": predetailList.crazilynum
})

}


},



async getInCartList(){
const params = {
userid:getApp().globalData.userInfo.id,
tablename:'shangpinxinxi',
goodid: this.data.detailList.id
}
const res=  await list('cart',params)
if(res.data.list.length){
this.setData({
isInCart:true
})
}else{
this.setData({
isInCart:false
})
}
},
async  addCart(){

if (!this.data.token) {
return
}
//单次购买限制
if(this.data.onelimittimes > 0 && this.data.onelimittimes < this.data.buyNumber){
wx.showToast({
    title: `每人只能购买${this.data.onelimittimes}件商品`,
    icon: "none"
})
return
}
//库存不足
if(this.data.alllimittimes <= 0){
wx.showToast({
    title: '商品售罄',
    icon: "none"
})
return
}
//库存限制
if(this.data.alllimittimes > 0 && this.data.alllimittimes < this.data.buyNumber){
wx.showToast({
    title: '库存不足',
    icon: "none"
})
return
}
if(this.data.isInCart){
wx.showToast({
title: '该商品已在购物车，请前往购买',
icon: "none"
})
return
}
const baseURL=  wx.getStorageSync('baseURL')+"/"
this.setData({
'cartForm.buynumber': this.data.buyNumber,
'cartForm.goodid': this.data.detailList.id,
'cartForm.goodname': this.data.detailList.shangpinmingcheng,
'cartForm.tablename': "shangpinxinxi",
'cartForm.picture':  this.data.picture[0],
picture:  this.data.picture[0],
})
this.setData({
'cartForm.shangjiazhanghao':this.data.detailList.shangjiazhanghao,
})
let cartForm=this.data.cartForm
cartForm.goodtype = this.data.detailList.shangpinleixing
this.setData({
'cartForm.price': this.data.detailList.price
})
const res=   await save('cart',this.data.cartForm)

if(res.code==0){
wx.showToast({
title: '添加成功',
icon: "none"
})

this.getInCartList()
var that = this
setTimeout(function () {

that.onLoad()
return
}, 1000)

}

},

onPayTap()  {

if (!this.data.token) {
return
}
const baseURL=  wx.getStorageSync('baseURL')
let data=this.data.detailList
data["shangpintupian"] = data.shangpintupian
wx.setStorageSync('payObject',data);
wx.setStorageSync('paytable','shangpinxinxi');
wx.setStorageSync('options',{type:1})

wx.navigateTo({
url: "/pages/shop-recharge/pay-confirm"
})
},


onSHTap() {
this.selectComponent('#bottomFrame').showFrame();
},
canlreply() {
this.selectComponent('#bottomFrame').hideFrame();
},
async reply() {
const detailList = this.data.detailList
const res = await update("shangpinxinxi", detailList)
if (res.code == 0) {
setTimeout(function () {
wx.showToast({
title: '回复成功',
icon: "none"
})
}, 1000)

this.handleUpdateData()
}
this.selectComponent('#bottomFrame').hideFrame();
},
onBuyTap() {

if (!this.data.token) {
return
}
const data={
tablename: 'shangpinxinxi',
goodid: this.data.detailList.id,
goodname: this.data.detailList.shangpinmingcheng,
picture:   this.data.picture[0],
shangjiazhanghao: this.data.detailList.shangjiazhanghao,
goodtype: this.data.detailList.shangpinleixing,
buynumber: 1,
price: this.data.detailList.price,
discountprice: this.data.detailList.vipprice
}

wx.setStorageSync('orderGoods',[data])
wx.setStorageSync('options',{type:1})
getApp().globalData.total=this.data.detailList.price
wx.navigateTo({
url: "/pages/shop-orders/orders-confirm"
})
},


async onShow() {
},

// 下载
    download(e) {
let url = e.currentTarget.dataset.url
url = wx.getStorageSync('baseURL') + '/' + url;
wx.downloadFile({
    url: url,
    success: (res) => {
        if (res.statusCode === 200) {
            wx.showToast({
                title: '下载成功',
                icon: "none"
            })
            window.open(url);
        }
    }
});
},
// 跨表

                                                                

})