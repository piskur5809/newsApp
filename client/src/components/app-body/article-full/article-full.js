import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as actions from '../../../actions';
// import { fetchPosts} from '../../../actions/actions';
import Spiner from '../../spiner';

import './article-full.css';

class  ArticleFull extends Component{
    
    // componentDidMount(){
    //     fetchPosts();
    // }

    render(){

        const {itemId, state, likeNews} = this.props;
    
        if(state.loaded){
            return (<Spiner/>);
        }

        const article = state.articles.map((element, index) => {
        
        if(index === Number(itemId)){
            return (
                <div key={index} className ="article" >
                        <Link to='/' className="article-close">
                            <button type ="button" className ="article-close" >&times;</button>
                        </Link>
                    <div className="article-content">
                        <div className ="article-content-title">{element.title}</div>
                        <div className ="article-content-img"><img src = {element.urlToImage} alt=""></img></div>
                        <div className ="article-content-description">{element.description}</div>
                        <div className ="article-content-news">{element.content}</div>
                        <div className ="article-content-author">{element.author}</div>
                        <div className ="article-content-footer">
                            <div className ="article-footer-views"><p>Views: {element.views}</p></div>
                            <button type="button" className="article-footer-likes-button" onClick={likeNews.bind(this, index)}>
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
    }
}

const mapStateToProps = (articles) => {
    return {
       state: articles
    };
};
    
export default connect(mapStateToProps, actions)(ArticleFull);