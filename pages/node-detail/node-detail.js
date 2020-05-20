import {NodeModel} from "../../models/node";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        topicList: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        wx.showLoading({
            title: "加载中",
            mask: true
        })

        // set nav title
        wx.setNavigationBarTitle({
            title: options.name
        });

        // set data
        const topicList = await NodeModel.getTopiclList(options.id);
        this.setData({
            topicList
        })

        wx.hideLoading()
    }
})