import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <ul>
                    <li>{this.props.types}</li>
                </ul>
            
            </div>
        )
    }
}







export default Pokemon;