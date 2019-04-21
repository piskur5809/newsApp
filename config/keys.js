const date = require('../requires/date');
const today = date.getToday().split('-').reverse().join('-')
module.exports = {
    mongoURI: 'mongodb+srv://dmitry:password1234@news-g8uzc.mongodb.net/news?retryWrites=true',
    apiURI: 'https://newsapi.org/v2/everything?' +
            'sources=associated-press,entertainment-weekly,BBC,CNN,google-news&'+
            `from=${today}&` +
            'sortBy=publishedAt&' +
            'language=en&'+
            'pageSize=20&'+
            'apiKey=7b97b8311c2a4c13923093d24cd06e13'
}; 
 