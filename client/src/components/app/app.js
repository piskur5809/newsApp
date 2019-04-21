import React, {Component} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import AppHeader from '../app-header';
import Footer from '../app-footer';
import ArticleFull from '../app-body/article-full';
import Articles from '../app-body/articles';

import './app.css';

export default class App extends Component{
   
    render(){
        return(
            <Router>
                <AppHeader/>
                <div className="main wraper">
                    <div className="main-content">
                        <Route path ="/"
                            component = {Articles}
                            exact/> 
                    </div>
                    <Route path ="/article/:id" 
                            render ={ ({match})=> {
                                const {id} = match.params
                                return<ArticleFull itemId={id}/> 
                            }}/>
                </div>
                <Footer/>
            </Router> 
        );
    };
}