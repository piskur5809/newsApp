import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as actions from '../../../actions';
import Spiner from '../../spiner';

import './article-full.css';

class  ArticleFull extends Component{
    
    componentDidMount(){
        const{addNews} = this.props;
        addNews();
    }

    render(){

        const {itemId, state, likeNews} = this.props;
        
        if(!state.loaded){
            return (<Spiner/>);
        };
        // перебор state и создание статьи
        const article = state.articles.map((element) => {
        
        if(element._id === itemId){

            return (
                <div key={element._id} className ="article" >
                        <Link to='/' className="article-close">
                            &times;
                        </Link>
                    <div className="article-content">
                        <div className ="article-content-title">{element.title}</div>
                        <div className ="article-content-img"><img src = {element.urlToImage} alt=""></img></div>
                        <div className ="article-content-description">{element.description}</div>
                        <div className ="article-content-news">{element.content}</div>
                        <div className ="article-content-author">{element.author}</div>
                        <div className ="article-content-footer">
                            <div className ="article-footer-views"><p>Views: {element.views}</p></div>
                            <button type="button" className="article-footer-likes-button" onClick={likeNews.bind(this, element._id, element)}>
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                <p>likes: {element.likes}</p>
                            </button>
                        </div>
                    </div>
                </div> 
            );
        };
        return null;
        });
        return article;
    };
};

const mapStateToProps = (articles) => {
    return {
       state: articles
    };
};
    
export default connect(mapStateToProps, actions)(ArticleFull);