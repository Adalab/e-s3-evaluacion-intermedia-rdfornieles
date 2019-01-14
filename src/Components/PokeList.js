import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeList extends Component {
    render() {
        return (
            <ul>
               {this.props.pokemonArr.map((item, index) =>
                <li key = {index}>
                <Pokemon 
                name = {item.name}
                types = {item.types.map((types, i) =>
                    <ul key ={i}>
                    <li>
                        {types}
                    </li>
                    </ul>
                    )}
                photo = {item.url}
                />
                </li>

                )}
            </ul>
        )
    }
}

export default PokeList;