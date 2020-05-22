import {TopicModel} from "../../models/topic";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        topicList: null,
    },

    async setTopicList() {
        const topicList = await TopicModel.getLatestTopic();
        this.setData({
            topicList
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        wx.showLoading({
            title: "加载中",
            mask: true
        })

        await this.setTopicList()

        wx.hideLoading()
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: async function () {
        await this.setTopicList()
        wx.stopPullDownRefresh()
    }
})