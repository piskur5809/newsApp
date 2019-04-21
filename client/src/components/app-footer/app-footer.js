import React, {Component} from 'react';

import {connect} from 'react-redux';

import * as actions from '../../actions';

import './app-footer.css';

class Footer extends Component{

    componentDidMount(){
        const {addVisitor} = this.props;
        addVisitor();
    };

    render(){

        const {state} = this.props;
        return (
            <div className ="footer wraper ">
                <div className="footer-content">
                    <a className="footer-contact" href="mailto: piskur5809@gmail.com">Contact Us: e-mail</a>
                    <div className ="footer-visitors">Visitors today: {state.visitors.length}</div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (visitors) => {
    return {
       state: visitors
    };
};

export default connect(mapStateToProps, actions)(Footer);


