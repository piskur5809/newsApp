import React, {Component} from 'react';
import AppHeader from '../app-header';
import Body from '../app-body';
import Footer from '../app-footer';
import NewsService from '../../services/api-service';

export default class App extends Component{
   
    newsService = new NewsService();

    state ={
        articles: false,
        showOne: false,
        search:''
    }

    componentDidMount(){
        //приходит promise с массивом объектов
        this.newsService.getNews()
        .then((articles)=>{
            // ответ от promise в виде массива обьектов
            //перебираем массив и перезаписываем  state 
            this.setState(()=>{
                let artId = 1;
                articles.map((elem)=>{
                    // добавляем к объекту новые свойства
                    elem.id = artId;
                    elem.views = 0;
                    elem.likes = 0;
                    elem.show = false;
                    artId++;
                    return elem;
                });
                return{articles};
            });
        }); 
    };

    articleProperty =(arr, id, propName, showStatus)=>{
        const oldItem = arr[id-1];
        let value = ""
        if(propName){
            value = ++(oldItem[propName]);
        }
        const show = !oldItem[showStatus]
        const item = {...arr[id-1], [propName]:value, [showStatus]:show};
        return [
            ...arr.slice(0, id-1),
            item,
            ...arr.slice(id)
        ];
    };

    onShowArticle=(id)=>{
        this.setState(({articles, showOne})=>{
           const art= this.articleProperty(articles, id, "views", "show" );
            showOne = true
            return {articles:art, showOne};
        });
    };

    onHideArticle = (id)=>{
        this.setState(({articles, showOne})=>{
          const art = this.articleProperty(articles, id, "", "show")
            showOne = false
            return {articles:art, showOne};
        }); 
    };

    onLikes=(id)=>{
        this.setState(({articles})=>{
            const art = this.articleProperty(articles, id, "likes");
            return {articles:art};
        }); 
    };

    onSearch = (search)=>{
        this.setState({search});
    };

    search(articles, search){
        if(!articles){
            return articles;
        };
        if(search.length === 0){
            return articles;
        };
        const newArr = articles.filter((elem)=>{
            if(elem.title || elem.description ){
                if(typeof(elem.content) === "string"){
                  return  elem.content.toLowerCase().indexOf(search.toLowerCase()) > -1;
                };
              // не получается подсветка найденного текста
            return  elem.title.toLowerCase().indexOf(search.toLowerCase()) > -1 || elem.description.toLowerCase().indexOf(search.toLowerCase()) > -1 
            };
            return false
        });
        return newArr
    };

    render(){
       console.log(this.state)
        const{articles, search} = this.state;
        const visibleItems = this.search(articles, search);
        return(
            <div>
                <AppHeader
                    onSearch ={this.onSearch}
                />
                <Body
                    showOne ={this.state.showOne}
                    visibleItems = {visibleItems}
                    onShowArticle={this.onShowArticle}
                    onHideArticle={this.onHideArticle}
                    onLikes={this.onLikes}
                />
                <Footer/>
            </div>
        );
    };
}