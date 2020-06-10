const axios = require('axios')
class SlackService {
    constructor() {

    }

    async sendMessage(message) {
        axios.post(process.env.SLACK_WEBHOOK, { "text": message })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

module.exports = new SlackService()