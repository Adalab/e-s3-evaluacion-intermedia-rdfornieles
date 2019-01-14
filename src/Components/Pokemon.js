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
                <img src = {this.props.photo} alt="Pokemon Imagen" />
            </div>
        )
    }
}

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    photo: PropTypes.string.isRequired,
}


export default Pokemon;