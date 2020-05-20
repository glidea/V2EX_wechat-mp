Component({
    /**
     * 组件的属性列表
     */
    properties: {
        nid: Number,
        name: String
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        onNode: function () {
            const id = this.properties.nid
            const name = this.properties.name

            wx.navigateTo({
                url: '../../pages/node-detail/node-detail?id=' + id + '&name=' + name
            })
        }
    }
})
