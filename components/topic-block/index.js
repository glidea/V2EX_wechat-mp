Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tid: Number,
        avatar: String,
        username: String,
        tag: String,
        replies: Number,
        title: String,
        time: String
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        onTopic: function () {
            const id = this.properties.tid
            wx.navigateTo({
                url: '../../pages/topic-detail/topic-detail?id=' + id
            })
        }
    }
})
