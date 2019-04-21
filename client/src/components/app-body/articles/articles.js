import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as actions from '../../../actions';
import Spiner from '../../spiner';

import './articles.css';


class Articles extends Component {

    componentDidMount(){  
        const {addNews} = this.props;
        addNews();     
    }
     
    render(){
        const {state,likeNews, viewNews} = this.props;
        // логика для спинера
        if(!state.loaded){
            return (<Spiner/>);
        };
        // перебор state и создание списка статей
        const article =  state.articles.map((elem) => {

            // логика проверки наличия картинок
            let img = null;

            if(elem.urlToImage){
                img =<img src = {elem.urlToImage} alt=""></img>;
            };
            // элемент который будет рендериться
            const artic = 
                <div key={elem._id} className ="articles">
                    <div className ="articles-title"><p>{elem.title}</p></div>
                    <div className="articles-content">
                        <div className ="articles-content-img">{img}</div>
                        <div className ="articles-content-description">{elem.description}</div> 
                    </div>
                     <Link className="articles-show" to={`article/${elem._id}`}> <button type ="button" className ="articles-show-button" onClick={viewNews.bind(this, elem._id, elem)}>more>>></button></Link>
                    <div className ="articles-footer">
                        <div className ="articles-footer-views"><p>Views: {elem.views}</p></div>
                        <button type="button" className="articles-footer-likes-button" onClick={likeNews.bind(this, elem._id, elem)}>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            <p>likes: {elem.likes}</p>
                        </button>
                    </div>
                </div>;
            
            // логика поиска и сортировки
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

const mapStateToProps = (articles) => {
    return {
       state: articles
    };
};

export default connect(mapStateToProps, actions)(Articles);