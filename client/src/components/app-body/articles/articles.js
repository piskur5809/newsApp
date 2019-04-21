import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as actions from '../../../actions';
import { fetchPosts} from '../../../actions/actions';

import Spiner from '../../spiner';

import './articles.css';


class Articles extends Component {

    // componentDidMount(){   // it's a true variant!! then fetching on server
        // fetchPosts();
    // }
     
    render(){

        const {state, likeNews, viewNews} = this.props;

        if(state.loaded){
            return (<Spiner/>);
        };

        console.log(state,"   articles.js")

        const article =  state.articles.map((elem, index) => {

            let img = null;

            if(elem.urlToImage){
                img =<img src = {elem.urlToImage} alt=""></img>;
            };

            const artic = 
                <div key={elem.id} className ="articles">
                    <div className ="articles-title"><p>{elem.title}</p></div>
                    <div className="articles-content">
                        <div className ="articles-content-img">{img}</div>
                        <div className ="articles-content-description">{elem.description}</div> 
                    </div>
                     <Link to={`article/${index}`}> <button type ="button" className ="articles-show-button" onClick={viewNews.bind(this, index)}>more>>></button></Link>
                    <div className ="articles-footer">
                        <div className ="articles-footer-views"><p>Views: {elem.views}</p></div>
                        <button type="button" className="articles-footer-likes-button" onClick={likeNews.bind(this, index)}>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            <p>likes: {elem.likes}</p>
                        </button>
                    </div>
                </div>
            

            if(elem.title && elem.title.toLowerCase().indexOf(state.search.toLowerCase()) > -1){
                return artic;
            }else if (elem.description && elem.description.toLowerCase().indexOf(state.search.toLowerCase()) > -1){
                return artic;
            }else if (elem.content && elem.content.toLowerCase().indexOf(state.search.toLowerCase()) > -1){
                return artic;
            }
            return null;
        });

    return ( [article] );
    };
};

fetchPosts(); // change it it's a bad practic!!!

const mapStateToProps = (articles) => {
    return {
       state: articles
    };
};

export default connect(mapStateToProps, actions)(Articles);