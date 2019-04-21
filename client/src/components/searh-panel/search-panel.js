import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component{

    state = {
        search: ""
    };

    onSearchChange = (ev)=>{
        const {onSearch = () => {}} = this.props;
        this.setState({search: ev.target.value});
        onSearch(ev.target.value);
    };
   
    render(){
        return(
            <div className="header-search">
            <input type="text" 
                   placeholder="Search" 
                   value={this.state.search} 
                   onChange={this.onSearchChange}/>
            </div>
        );
    };
}