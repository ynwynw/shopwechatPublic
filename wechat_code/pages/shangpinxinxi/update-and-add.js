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

    shangpinmingcheng:"",
    shangpintupian:"",
        shangpinleixingList:"${column.customize}".split(','),
        shangpinleixingIndex:null,
    guige:"",
    pinpai:"",
storeupnum: '0',
    shangjiazhanghao:"",
    shangjiamingcheng:"",
onelimittimes: '-1',
alllimittimes: '-1',
price: '0',
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
const shangpinleixingres = await option('shangpinleixing/shangpinleixing')
        shangpinleixingres.data.unshift('请选择商品类型')
this.setData({
        shangpinleixingList: shangpinleixingres.data
})


let  ro=this.data.ro
if(options?.cross){
var obj = wx.getStorageSync('crossObj');
for (var o in obj){
if(o=='shangpinmingcheng'){
this.setData({
  'ruleForm.shangpinmingcheng' : obj[o],
})
ro.shangpinmingcheng = true;
continue;
}
if(o=='shangpintupian'){
this.setData({
  shangpintupianPath :baseURL+ obj[o].split(",")[0],
})
ro.shangpintupian = true;
continue;
}
if(o=='shangpinleixing'){
this.setData({
  'ruleForm.shangpinleixing' : obj[o],
})
ro.shangpinleixing = true;
continue;
}
if(o=='guige'){
this.setData({
  'ruleForm.guige' : obj[o],
})
ro.guige = true;
continue;
}
if(o=='pinpai'){
this.setData({
  'ruleForm.pinpai' : obj[o],
})
ro.pinpai = true;
continue;
}
if(o=='shangpinxiangqing'){
this.setData({
  'ruleForm.shangpinxiangqing' : obj[o],
})
ro.shangpinxiangqing = true;
continue;
}
if(o=='storeupnum'){
this.setData({
  'ruleForm.storeupnum' : obj[o],
})
ro.storeupnum = true;
continue;
}
if(o=='clicknum'){
this.setData({
  'ruleForm.clicknum' : obj[o],
})
ro.clicknum = true;
continue;
}
if(o=='clicktime'){
this.setData({
  'ruleForm.clicktime' : obj[o],
})
ro.clicktime = true;
continue;
}
if(o=='shangjiazhanghao'){
this.setData({
  'ruleForm.shangjiazhanghao' : obj[o],
})
ro.shangjiazhanghao = true;
continue;
}
if(o=='shangjiamingcheng'){
this.setData({
  'ruleForm.shangjiamingcheng' : obj[o],
})
ro.shangjiamingcheng = true;
continue;
}
if(o=='onelimittimes'){
this.setData({
  'ruleForm.onelimittimes' : obj[o],
})
ro.onelimittimes = true;
continue;
}
if(o=='alllimittimes'){
this.setData({
  'ruleForm.alllimittimes' : obj[o],
})
ro.alllimittimes = true;
continue;
}
if(o=='price'){
this.setData({
  'ruleForm.price' : obj[o],
})
ro.price = true;
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
        shangpinleixingres.data.map((item, index) => {
        if (item == data.shangpinleixing) {
            this.setData({
                    shangpinleixingIndex: index,
                    shangpinleixing: item
            })
        }else if (this.data.shangpinleixingList.length == 1) {
            this.setData({
                    shangpinleixingIndex: 0,
                    shangpinleixing: v
            })
        }
    })




const url = wx.getStorageSync("baseURL") + "/"
const detailList = data
this.setData({
detailList,
     shangpinmingcheng: data.shangpinmingcheng,
        shangpintupian:data?.shangpintupian?.split(',')[0],
        shangpintupianPath:baseURL+data?.shangpintupian?.split(',')[0],
     guige: data.guige,
     pinpai: data.pinpai,
     shangpinxiangqing: data.shangpinxiangqing,
        storeupnum: '0',

        clicknum: '0',

        clicktime:utils.getCurrentDate("yMDhms"),
     shangjiazhanghao: data.shangjiazhanghao,
     shangjiamingcheng: data.shangjiamingcheng,
        onelimittimes: '-1',

        alllimittimes: '-1',

        price: '0',


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
    let shangjiazhanghao= getApp().globalData.userInfo.shangjiazhanghao
    ro.shangjiazhanghao=true
    this.setData({
            shangjiazhanghao,
    })
    sessionReadArr.push('shangjiazhanghao')
    let shangjiamingcheng= getApp().globalData.userInfo.shangjiamingcheng
    ro.shangjiamingcheng=true
    this.setData({
            shangjiamingcheng,
    })
    sessionReadArr.push('shangjiamingcheng')

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





















uploadshangpintupian() {
wx.chooseImage({
count: 1,
sizeType: ['compressed'],
sourceType: ['album', 'camera'],
success: async (res) => {
    const tempFilePaths = res.tempFilePaths;
    // 本地临时图片的路径
    this.setData({
            shangpintupianPath: tempFilePaths[0]
    })
    let _this = this;
    // 上传网络图片
    const baseURL = wx.getStorageSync('baseURL')
    wx.uploadFile({
        url: `${baseURL}/file/upload`,
        filePath: res.tempFilePaths[0],
        name: 'file',
        header: {
            'Token': wx.getStorageSync('token')
        },
        success: (uploadFileRes) => {
            let result = JSON.parse(uploadFileRes.data);
            // result.file是上传成功为网络图片的名称
            if (result.code == 0) {
                this.setData({
                        shangpintupian: 'file/' + result.file
                })
            } else {
                wx.showToast({
                    title: result.msg,
                    icon: 'none',
                    duration: 2000
                });
            }
        }
    })

    this.setData({
        face: tempFilePaths[0]
    });

}
})
},








async shangpinleixingChange(e) {
    const selectedIndex = e.detail.value;
    let  shangpinleixing=this.data.shangpinleixingList[selectedIndex]
    this.setData({
            shangpinleixingIndex: selectedIndex,
            shangpinleixing
    });},
















































onclicktimeTap(){
this.setData({
    showclicktime: true,
})
},
clicktimeTap(e) {
this.setData({
    clicktime: e.detail.data
})

},














































async submit() {
    let that = this
    var query = wx.createSelectorQuery();









if(this.data.clicktime=="请选择最近点击时间"){
this.setData({
        clicktime:""
})

}






    const baseURL = wx.getStorageSync('baseURL') + "/"
    const regex = new RegExp(baseURL, "g");
const obj={
    shangpinmingcheng: this.data. shangpinmingcheng,
        shangpintupian:this.data.shangpintupian?.replace(regex, ""),
    shangpinleixing: this.data. shangpinleixing,
    guige: this.data. guige,
    pinpai: this.data. pinpai,
        shangpinxiangqing: getApp().globalData.editorContent,
    storeupnum: this.data. storeupnum,
    shangjiazhanghao: this.data. shangjiazhanghao,
    shangjiamingcheng: this.data. shangjiamingcheng,
    onelimittimes: this.data. onelimittimes,
    alllimittimes: this.data. alllimittimes,
    price: this.data. price,
}
const detailId= getApp().globalData.detailId
const tableName= `shangpinxinxi`

//跨表计算判断
    var obj2;
    var  ruleForm=obj
    obj2 = ruleForm
    this.data.refid==""? ruleForm['refid']= getApp().globalData.detailId:""
    ruleForm['userid']=getApp().globalData.userInfo.id
    var userInfo=getApp().globalData.userInfo


const sessionReadArr=this.data.sessionReadArr
                            ruleForm['shangpinmingcheng']=this.data.shangpinmingcheng








                            ruleForm['shangpinleixing']=this.data.shangpinleixing
    if(this.data.shangpinleixingList[this.data.shangpinleixingIndex]==undefined ){
        wx.showToast({
            icon: "none",
            title: `商品类型不能为空`,
        })
        return
    }
















   let shangpinxiangqing=  getApp().globalData.editorContent
    if(shangpinxiangqing==='' ){
        wx.showToast({
            icon: "none",
            title: `商品详情不能为空`,
        })
        return
    }



































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
            let corssRes = await list(`shangpinxinxi`, params)
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
await update(`shangpinxinxi`, ruleForm)
}
else {
await add(`shangpinxinxi`, ruleForm)
            }
        }


        }
        else {


//跨表计算
if (ruleForm.id) {
await update(`shangpinxinxi`, ruleForm)
}
else {
await add(`shangpinxinxi`, ruleForm)
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