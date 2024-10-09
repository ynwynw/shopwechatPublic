// pages/edit/edit.js
const {
detail,
option,
update,
add,
list,
    follow,
    faceMatch,
    session,
    rubbish,
    baiduIdentify
} = require("../../api/index.js")

const des = require('../../utils/des.js')
const utils = require("../../utils/index.js")

Page({

/**
* 页面的初始数据
*/
data: {
    baseURL:'',
    sessionReadArr:[],

detailList: null,
id: "",
cross:"",
ruleForm:{},
userid:getApp().globalData.userInfo.id,
userInfo:getApp().globalData.userInfo,
ro:{
},

shenshudianhua: '0011223344',
},

/**
* 生命周期函数--监听页面加载
*/
async onLoad(options) {
    if(!this.data.userid){
        let nowTable = wx.getStorageSync("nowTable");
        const res = await session(nowTable)
        getApp().globalData.userInfo=res.data
    }
    let baseURL =wx.getStorageSync('baseURL') + '/'
const id = getApp().globalData.detailId
    this.setData({
        refid:id,
        baseURL
    })
//人脸识别


let  ro=this.data.ro
if(options?.cross){
var obj = wx.getStorageSync('crossObj');
for (var o in obj){
if(o=='shenshudianhua'){
this.setData({
  'ruleForm.shenshudianhua' : obj[o],
})
ro.shenshudianhua = true;
continue;
}
}
  let  statusColumnName=wx.getStorageSync('statusColumnName');
    statusColumnName=statusColumnName.replace('[',"").replace(']',"");
    this.setData({
        ro,
        cross:options?.cross,
        statusColumnName
    })
}

if(id){
// 如果上一级页面传递了id，获取改id数据信息
const   data=getApp().globalData.detailList


const url = wx.getStorageSync("baseURL") + "/"
const detailList = data
this.setData({
detailList,
        shenshudianhua: '0011223344',


});
//ss读取
let c = this.data
this.setData({
});

}else {
    this.setData({
    })
}



// ss读取
let sessionReadArr=[]
ro.shenshudianhua=true

this.setData({
cross:options?.cross,
ro,
id,
 sessionReadArr

})




},

getUUID () {
return new Date().getTime();
},
onUnload: function () {
console.log('页面被卸载，执行销毁操作');
},
onShow() {

},



















async submit() {
    let that = this
    var query = wx.createSelectorQuery();


    const baseURL = wx.getStorageSync('baseURL') + "/"
    const regex = new RegExp(baseURL, "g");
const obj={
    shenshudianhua: this.data. shenshudianhua,
}
const detailId= getApp().globalData.detailId
const tableName= `shensulanmu`

//跨表计算判断
    var obj2;
    var  ruleForm=obj
    obj2 = ruleForm
    this.data.refid==""? ruleForm['refid']= getApp().globalData.detailId:""
    ruleForm['userid']=getApp().globalData.userInfo.id
    var userInfo=getApp().globalData.userInfo


const sessionReadArr=this.data.sessionReadArr
                            ruleForm['shenshudianhua']=this.data.shenshudianhua







    //更新跨表属性
    var crossuserid;
    var crossrefid;
    var crossoptnum;

    if(this.data.cross) {
        wx.setStorageSync('crossCleanType', true);
        var statusColumnName = wx.getStorageSync('statusColumnName');
        if (statusColumnName != '') {
                obj2 = wx.getStorageSync('crossObj');
            if (!statusColumnName.startsWith("[")) {
                for (var o in obj2) {
                    if (o == statusColumnName) {
                        obj2[o] = statusColumnValue;
                    }

                }
                var table = wx.getStorageSync('crossTable');
                 await update(table, obj2)
            } else {

                crossuserid =getApp().globalData.userInfo.id
                crossrefid =  this.data.id
                crossoptnum = wx.getStorageSync('statusColumnName');
                crossoptnum = crossoptnum.replace(/\[/, "").replace(/\]/, "");
                            }
        }
    }
    this.data.cross ? (crossrefid = this.data.id, crossuserid = getApp().globalData.userInfo.id) : ""

        if(crossrefid && crossuserid) {
            ruleForm['crossuserid'] = getApp().globalData.userInfo.id
            ruleForm['crossrefid'] =this.data.id

            this.setData({
                ruleForm
            })
            let params = {
                page: 1,
                limit: 10,
                crossuserid: crossuserid,
                crossrefid: crossrefid,
            }
                        const tips = wx.getStorageSync('tips')
            let corssRes = await list(`shensulanmu`, params)
            crossoptnum = wx.getStorageSync('statusColumnName');
            crossoptnum = crossoptnum.match(/\d+/g);
            if (corssRes.data.total >= parseInt(crossoptnum)) {
                wx.showToast({
                    icon: "none",
                    title: tips,
                })
                                wx.removeStorageSync('crossCleanType');
                return ;
            }
            else {


//跨表计算

if (ruleForm.id) {
await update(`shensulanmu`, ruleForm)
}
else {
await add(`shensulanmu`, ruleForm)
            }
        }


        }
        else {


//跨表计算
if (ruleForm.id) {
await update(`shensulanmu`, ruleForm)
}
else {
await add(`shensulanmu`, ruleForm)
            }
        }
getApp().globalData.editorContent=''
wx.showToast({
title: '提交成功',
icon: "none"
})

            const preId = getApp().globalData.detailId
            let res = await detail(table, preId)
            getApp().globalData.detailList = res.data
            wx.navigateBack({
                delta: 1,
                complete: () => {
                    // 触发事件通知，传递需要更新的数据
                    const pages = getCurrentPages();
                    if (pages.length >= 1) {
                        const prePage = pages[pages.length - 1];
                        prePage.onLoad(); //
                    }
                }
            })













 },

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