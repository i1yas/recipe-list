import React, { Component } from 'react';
import Ingr from '../Ingr/Ingr.js';
import './Ingr-List.css';

class IngrList extends Component {
	render() {
		return (
			<ul className="Ingr-List">
				{this.props.data.map(ingr => {
					return <Ingr key={ingr.id}
					updateList={this.props.updateList}
					deleteItem={this.props.deleteItem}
					value={ingr.value}
					id={ingr.id}
					/>
				})}
			</ul>
		);
	}
}

export default IngrList;
