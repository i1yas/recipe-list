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
				{this.state.list.map(ingr => {
					return <Ingr key={ingr.id}
					updateList={this.props.updateList}
					value={ingr.value}
					id={ingr.id}
					/>
				})}
			</ul>
		);
	}
}

export default IngrList;
