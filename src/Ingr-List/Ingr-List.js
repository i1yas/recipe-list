import React, { Component } from 'react';
import Ingr from '../Ingr/Ingr.js';
import './Ingr-List.css';

class IngrList extends Component {
	render() {
		return (
			<ul className="Ingr-List">
				{this.props.data.map((ingr, id) => {
					return <Ingr key={id}>{ingr}</Ingr>
				})}
			</ul>
		);
	}
}

export default IngrList;
