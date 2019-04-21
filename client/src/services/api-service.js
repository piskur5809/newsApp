// import Today from './date'
import UUID from 'uuid';
export default class NewsService{
   async getResource () {

        // const toDay = new Today()
        const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b62ca1edc4fb45c5b3c37c9696d253a6"
                    // 'https://newsapi.org/v2/everything?' +
                    // 'sources=id:abc-news,id:bbc-news,id:bbc-sport,id:bloomberg,id:cnn.&'+
                    // // `from=${toDay.getCurrentDate()}&` +
                    // 'sortBy=publishedAt&' +
                    // 'language=en&'+
                    // 'pageSize=50&'+
                    // 'apiKey=e3e525850d9340b38a349ebc155902f0';
        const res = await fetch(url);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    };
   
    async getNews(){
        const article = await this.getResource()
        .then((art)=>{
            return art.articles.map(element => {
                return {
                    id: UUID(),
                    author: element.author,
                    title: element.title,
                    description: element.description,
                    content: element.content,
                    urlToImage: element.urlToImage,
                    views: 0,
                    likes: 0,
                    visibleOnce: false
                }
            })

            // return art.articles //array
            });
        return article;
    }
}