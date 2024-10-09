// app.js
App({
    onLaunch() {
        const tabarList=[]
        const genPages=[]
    tabarList.push("shangpinxinxi")
tabarList.push("news")
    tabarList.push("paotuidingdan")
        this.globalData.tabarList=tabarList
    },
    globalData: {
        name: null,
        goodsList: [],
        detailList: {},
        detailId: null,
        tabarList:[],
        userInfo:{},
        total:"",
        editorContent:''
    },

})