import {TopicModel} from "../../models/topic";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        topicDetail: null,
        topicReplies: null,
        display: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        const topicDetail = await TopicModel.getTopicDetail(options.id)
        this.setData({
            topicDetail,
        })
        if (topicDetail.replies !== 0) {
            this.setData({
                display: true
            })
        }

        // 为了优化加载体验，分两次set（设计成同步的缺陷）

        const topicReplies = await TopicModel.getTopicReplies(options.id)
        this.setData({
            topicReplies,
            display: false
        })
    }
})