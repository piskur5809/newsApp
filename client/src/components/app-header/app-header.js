import React, {Component} from 'react';
import ToDay from '../../services/date';
import SearchPanel from '../searh-panel';
import {Link} from 'react-router-dom';
import "./app-header.css";

export default class AppHeader extends Component{

    appDate = ()=>{
        const toDay = new ToDay();
        return (<div className = "header-date">
                <span>{toDay.renderDate()}</span>
                </div>);
    };
        
    render(){
        return (
            <div className ="header wraper">
                <div className="header-content">
                    {this.appDate()}
                    <Link to="/"><div className="header-title">"News App"</div></Link>
                    <SearchPanel/>
                </div>
            </div>
        );
    };
};