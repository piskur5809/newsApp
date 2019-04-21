import React, {Component} from 'react';
import Articles from "./articles/articles";
import ArticleFull from './article-full/article-full';
import './app-body.css';

export default class Body extends Component{

    render(){
    
        const{visibleItems, showOne, onShowArticle, onHideArticle, onLikes} = this.props;
        if(!visibleItems){
            return (
                <span className="h1 d-flex justify-content-center">wait!</span>
            );
        };
        if(!showOne){
            return (
                <div className="main-wraper bg-active">
                    <div className="main d-flex flex-wrap flex-row justify-content-between">
                        <Articles
                            visibleItems = {visibleItems}
                            onShowArticle = {onShowArticle}
                            onLikes = {onLikes}
                        />
                    </div>
                </div>
            );
        };
   
        if(showOne){
            return (
                <div className="main-wraper">
                    <ArticleFull
                        visibleItems = {visibleItems}
                        onHideArticle = {onHideArticle}
                        onLikes = {onLikes}
                    />
                </div>
            );
        };
    };
}