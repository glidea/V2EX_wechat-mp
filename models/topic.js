import {api} from "../config";
import {Http} from "../utils/http";
import {formatDate, Timestamp2Date} from "../utils/util";

class TopicModel {

    static async getLatestTopic() {
        let topicList = await Http.request({
            subUrl: api.latest_topic
        })

        topicList.forEach(item => item.created = formatDate(Timestamp2Date(item.created)))
        return topicList
    }

    static async getHotTopic() {
        let topicList = await Http.request({
            subUrl: api.hotest_topic
        })

        topicList.forEach(item => item.created = formatDate(Timestamp2Date(item.created)))
        return topicList
    }

    static async getTopicDetail(id) {
        const topicDetailList = await Http.request({
            subUrl: api.topic_detail + "?id=" + id
        })

        let topicDetail = topicDetailList[0]
        topicDetail.created = formatDate(Timestamp2Date(topicDetail.created))
        return topicDetail
    }

    static async getTopicReplies(id) {
        let replyList = await Http.request({
            subUrl: api.topic_replies + "?topic_id=" + id
        })

        replyList.forEach(item => item.created = formatDate(Timestamp2Date(item.created)))
        return replyList
    }
}

export {
    TopicModel
}