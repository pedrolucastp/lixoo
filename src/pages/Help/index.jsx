import React, { Component } from 'react';
import './styles.css';
import ActionButton from '../../components/ActionButton';

export default class Help extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='Actions-panel'>
				<ActionButton title="E" type="collector" />
				<ActionButton title="F" type="supplier" />
			</div>
		)

	}
}