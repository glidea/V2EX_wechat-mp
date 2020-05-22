import {NodeModel} from "../../models/node";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        someNodes: null,

        // 是否显示 底部更多节点
        display: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        wx.showLoading({
            title: "加载中",
            mask: true
        })

        // set data
        const someNodes = await NodeModel.getSome();
        this.setData({
            someNodes,
            display: true
        })

        wx.hideLoading()
    },

    /**
     * 监听 "更多节点" 的点击事件
     */
    onMore: function () {
        wx.navigateTo({
            url: '../all-nodes/all-nodes'
        })
    }
})