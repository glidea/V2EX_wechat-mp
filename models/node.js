import {Http} from "../utils/http";
import {api} from "../config";
import {formatDate, Timestamp2Date} from "../utils/util";

class NodeModel {

    static async getAll() {
        return await Http.request({
            subUrl: api.all_nodes
        })
    }

    static async getSome() {
        let allNodes = await this.getAll()
        wx.setStorage({
            key: 'allNodes',
            data: allNodes
        })

        let oldDataRule = []
        allNodes.forEach(e => {
            let oldObj = {
                parent_node_name: e.parent_node_name,
                childNode: []
            }
            let childObj = {
                avatar_normal: e.avatar_normal,
                id: e.id,
                title: e.title,
                topics: e.topics,
            }
            oldObj.childNode.push(childObj)
            oldDataRule.push(oldObj)
        })

        let newData = [];
        let newObj = {};
        oldDataRule.forEach((e, i) => {
            if (!newObj[e.parent_node_name]) {
                newData.push(e)
                newObj[e.parent_node_name] = true;
            } else {
                newData.forEach(e => {
                    if (e.parent_node_name === oldDataRule[i].parent_node_name) {
                        e.childNode = e.childNode.concat(oldDataRule[i].childNode)
                    }
                })
            }
        })

        let res = []
        res.push(newData.find(function (item) {
            return item.parent_node_name === "programmer"
        }))
        res.push(newData.find(function (item) {
            return item.parent_node_name === "computer"
        }))
        res.push(newData.find(function (item) {
            return item.parent_node_name === "v2ex"
        }))
        res.push(newData.find(function (item) {
            return item.parent_node_name === "work"
        }))
        res.push(newData.find(function (item) {
            return item.parent_node_name === "life"
        }))
        return res;
    }

    static async getTopiclList(id) {
        let topicList = await Http.request({
            subUrl: api.topic_detail + "?node_id=" + id
        })

        topicList.forEach(item => item.created = formatDate(Timestamp2Date(item.created)))
        return topicList
    }
}

export {
    NodeModel
}