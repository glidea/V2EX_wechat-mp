Page({

    /**
     * 页面的初始数据
     */
    data: {
        allNodes: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.showLoading({
            title: "加载中",
            mask: true
        })

        const allNodes = wx.getStorageSync('allNodes')
        this.setData({
            allNodes
        })

        wx.hideLoading()
    }
})