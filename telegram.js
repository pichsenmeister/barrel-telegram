const services = [
    {
        name: "telegram",
        requests: {
            setup: (token, url) => ({
                method: 'get',
                url: `https://api.telegram.org/bot${token}/setWebhook?url=${url}`
            }),
            sendMessage: (token, chatId, text) => ({
                method: 'post',
                url: `https://api.telegram.org/bot${token}/sendMessage`,
                data: {
                    chat_id: chatId,
                    text
                }
            }),
            apiCall: (method, token, data) => ({
                method: 'post',
                url: `https://api.telegram.org/bot${token}/${method}`,
                data: data
            })
        }
    }
]

const patterns = {
    message: {
        chat: {
            id: '$any'
        },
        from: {
            id: '$any'
        }
    }
}

module.exports = {
    services,
    patterns
}