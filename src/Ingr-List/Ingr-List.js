import React, { Component } from 'react';
import Ingr from '../Ingr/Ingr.js';
import './Ingr-List.css';

class IngrList extends Component {
	constructor(props) {
		super(props);
		this.state = {list: props.data}
	}
	render() {
		return (
			<ul className="Ingr-List">
				{this.state.list.map((ingr, id) => {
					return <Ingr key={id}>{ingr}</Ingr>
				})}
			</ul>
		);
	}
}

export default IngrList;
