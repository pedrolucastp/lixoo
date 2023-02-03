import React, { Component } from 'react';
import './styles.css';
import ActionButton from '../../components/ActionButton';

export default class Settings extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='Actions-panel'>
				<ActionButton title="C" type="collector" />
				<ActionButton title="D" type="supplier" />
			</div>
		)

	}
}