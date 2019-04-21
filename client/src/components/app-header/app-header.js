import React, {Component} from 'react';
import ToDay from '../../services/date';
import SearchPanel from '../searh-panel';

import "./app-header.css"


export default class AppHeader extends Component{

    appDate = ()=>{
        const toDay = new ToDay();
        return (<div className = "header-date h4 text-light">
                <span>{toDay.renderDate()}</span>
                </div>);
    };
        
    title = ()=>{
        return (<div className="header-title text-white display-4">"News App"</div>)
    };
    
    render(){
        const {onSearch}=this.props;
        return (<div className ="header-wraper bg-primary ">
                    <div className="head d-flex justify-content-between align-items-center ">
                        {this.appDate()}
                        {this.title()}
                        <SearchPanel 
                            onSearch ={onSearch}/>
                    </div>
                </div>);
    };
}