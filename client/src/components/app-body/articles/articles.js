import React from 'react';
import './articles.css'



const  Articles = ({visibleItems, onLikes, onShowArticle}) =>{
    if(!visibleItems.length){
        return (<div>Nothing Found!</div>)
    }
    const articles = visibleItems.map((elem)=>{
        
        let img = null;
        const id = elem.id
        if(elem.urlToImage){
            img =<img src = {elem.urlToImage} alt=""></img>;
        }
        if(elem.content == null){
            elem.content = <a href={elem.url}>{elem.url}</a>;
         };


        return ( 
        <div key={id} className ="article border border-primary d-flex flex-column align-item-between">
            <div className ="article-title"><p className =" h1 text-primary font-weight-bold ">{elem.title}</p></div>
            <div className ="article-description text-success">{elem.description}</div>
            <div className ="article-content">{elem.content}</div>
            <button type ="button" className ="article-show-content" onClick={()=>onShowArticle(id)}>more>>></button>
            <div className ="article-footer d-flex">
                <div className ="article-footer-img">{img}</div>
                <div className ="article-footer-author">{elem.author}</div>
                <div className ="article-footer-views">Views: {elem.views}</div>
                <div className ="article-footer-likes">
                <button type="button" className="likes-button" onClick={()=>onLikes(id)}>some button</button>
                likes: {elem.likes}</div>
            </div>
        </div>
        );
    });

    return ( 
       [articles]
    );
};

export default Articles;