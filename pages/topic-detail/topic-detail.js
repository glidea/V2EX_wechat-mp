import {TopicModel} from "../../models/topic";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        topicDetail: null,
        topicReplies: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        wx.showLoading({
            title: "加载中",
            mask: true
        })

        const topicDetail = await TopicModel.getTopicDetail(options.id)
        const topicReplies = await TopicModel.getTopicReplies(options.id)
        this.setData({
            topicDetail,
            topicReplies
        })

        wx.hideLoading()
    }
})