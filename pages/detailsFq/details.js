// pages/details/details.js
// let WxParse = require('../../wxParse/wxParse.js');
let detailData = require('../../utils/data.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        zuo: '<<<<<',
        itemId: '',
        detailData: '',
        likeNum: '',
        is_like: '',
        canLike:false,// 是否已经点赞
        isPage:1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(detailData)
        this.setData({
            itemId: options.id,
            detailData: detailData.data[options.id]
        })
        wx.setNavigationBarTitle({
            title: options.name
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
        this.loadData()
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    loadData() {
        let that = this;
        wx.request({
            url: 'https://jcxcx.sunkoda.com/api/get_detail',
            data: {
                id: this.data.itemId
            },
            header: {
                'content-type': 'application/json'
            },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: function(res) {
                let content = res.data.data;
                that.setData({
                    likeNum: content.like_num,
                    is_like: content.is_like,
                    isPage: content.is_page
                })
            },
            fail: function(res) {},
            complete: function(res) {},
        })
    },
    // 点赞
    likeHandle() {
        let that = this;
        wx.request({
            url: 'https://jcxcx.sunkoda.com/api/increase_like',
            data: {
                id: this.data.itemId
            },
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: function (res) {  
                console.log(res)             
                that.setData({
                    likeNum: that.data.likeNum - 0 + 1,
                    canLike:true,
                  
                })
                wx.showToast({
                    title: '点赞成功',
                    icon:'none'
                })
            },
            fail: function (res) { },
            complete: function (res) { },
        })
    },
    // 取消点赞
   
    likeCancleHandle() {
        let that = this;
        wx.request({
            url: 'https://jcxcx.sunkoda.com/api/decrease_like',
            data: {
                id: this.data.itemId
            },
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: function (res) {
                that.setData({
                    likeNum: that.data.likeNum-0-1,
                    canLike: false
                })
                wx.showToast({
                    title: '已取消点赞',
                    icon: 'none'
                })
            },
            fail: function (res) { },
            complete: function (res) { },
        })
    }
})