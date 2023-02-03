import React, { Component } from 'react';
import './styles.css';
import ActionButton from '../../components/ActionButton';

export default class Account extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='Actions-panel'>
				<ActionButton title="A" type="collector" />
				<ActionButton title="B" type="supplier" />
			</div>
		)

	}
}