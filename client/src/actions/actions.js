import axios from 'axios';

// получает новости из базы и записывает в store
export const addNews = () => (dispatch) =>{
    axios
        .get('/api/articles')
        .then(res=> {
            dispatch({
                type: 'ADD_NEWS',
                payload: res.data,
                loaded: true 
            });
        })
        .catch(err =>
            console.log(err));
 };

// постит колличество просмотров в базу и добавляет их в store
export const viewNews = (id, elem) => (dispatch) =>{
    axios
        .post(`/api/articles/${id}`, {elem, views: true})
        .then(res=>{
            dispatch({
                type: 'VIEW_NEWS',
                id: id,
                views: res.data.views,
                ip: res.data.userIpViews
            });
        })
        .catch(err =>
            console.log(err));
};

// постит колличество лайков в базу и добавляет их в store
export const likeNews = ( id, elem) => (dispatch) =>{
    axios
        .post(`/api/articles/${id}`, {elem, likes: true})
        .then(res=>{
            return  dispatch({
                type: 'LIKE_NEWS',
                id: id, 
                likes: res.data.likes,
                ip: res.data.userIpLikes
            }); 
        })
        .catch(err =>
            console.log(err));
};

// поиск новостей
// записывает данные из строки поиска в store и при рендеринге фильтрует записи
export const searchNews = (text) => ({type: 'SEARCH_NEWS', payload: text});

// постит в базу IP пользователя и добавляет его в store
// колличество посещений сайта принимается равным длинне массива IP адресов
export  const  addVisitor = () => (dispatch) => {
    axios
        .get('/api/visitors/')
        .then(res => {
            
            // если ответ c сервера пустой в store записывается пустой массив
            if(!res.data){
                return dispatch({
                    type: 'ADD_VISITOR',
                    payload: []
                });
            } 

            return dispatch({
                type: 'ADD_VISITOR',
                payload: res.data.visitorsIp
            });
        });
};