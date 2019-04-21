import React from 'react';
import './article-full.css'

const  ArticleFull = ({visibleItems,  onHideArticle, onLikes }) =>{
    let id = 0;
    let nArr = []
    visibleItems.forEach((elem)=>{
        if(elem.show === true){
            id = elem.id
            nArr.push(elem)
        }
        
    })
    const {title, description, content, urlToImage, author, views, likes} = nArr[0];
    return (
        <div className ="article-full-wraper bg-dark" >
            <div className="article-full-back" onClick={()=>onHideArticle(id)}></div>
            <div className="article-full bg-white ">
                <button type ="button" className ="close" onClick={()=>onHideArticle(id)}>&times;</button>
                <div className ="article-footer-img"><img src = {urlToImage} alt=""></img></div>
                <div className ="article-title-full text-warning">{title}</div>
                <div className ="article-description-full text-success">{description}</div>
                <div className ="article-content">{content}</div>
                
                <div className ="article-footer d-flex">
                    <div className ="article-footer-author">{author}</div>
                    <div className ="article-footer-views">Views: {views}</div>
                    <div className ="article-footer-likes">
                    <button type="button" className="likes-button" onClick={()=>onLikes(id)}>some button</button>
                    likes: {likes}</div>
                </div>
            </div>
        </div>
    );
};

export default ArticleFull;