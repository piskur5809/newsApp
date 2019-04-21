import React, {Component} from 'react';

import {connect} from 'react-redux';
import * as actions from '../../actions';

class SearchPanel extends Component{

    onSearchChange = (ev)=>{
        const {searchNews} = this.props;
        const val = ev.target.value;
        searchNews(val);
    };
    
    render(){
        return(
            <div className="header-search">
            <input type="text" 
                   placeholder="Search" 
                   onChange={this.onSearchChange}
                   />
            </div>
        );
    };
}

const mapStateToProps = (search) => {
    return {
       state: search
    };
};
    
export default connect(mapStateToProps, actions)(SearchPanel);