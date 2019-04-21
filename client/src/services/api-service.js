// import Today from './date'

export default class NewsService{
   async getResource () {

        // const toDay = new Today()
        const url = 'https://newsapi.org/v2/everything?' +
                    'sources=id:abc-news,id:bbc-news,id:bbc-sport,id:bloomberg,id:cnn.&'+
                    // `from=${toDay.getCurrentDate()}&` +
                    'sortBy=publishedAt&' +
                    'language=en&'+
                    'pageSize=50&'+
                    'apiKey=e3e525850d9340b38a349ebc155902f0';
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
            return art.articles //array
            });
        return article;
    }
}