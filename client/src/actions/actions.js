import NewsService from '../services/api-service';
import store from '../store'


const newsService = new NewsService();

export const addNews = (news) => {
     return{
         type: 'ADD_NEWS',
         payload: news,
         loaded: false
     };
 };

export const viewNews = (id) => ({type: 'VIEW_NEWS', payload: id});

export const likeNews = (id) => ({type: 'LIKE_NEWS', payload: id});

export const searchNews = (text) => ({type: 'SEARCH_NEWS', payload: text});

export function fetchPosts() {

    return newsService.getNews().then(news => store.dispatch(addNews(news, false)));
};
