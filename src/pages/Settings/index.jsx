import React, { Component } from 'react';
import './styles.css';

export default class Settings extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='Actions-panel'>
			<h1 onClick={() => {
                this.props.onReturn(false)
            }}>
                {"Settings"}
            </h1>
			</div>
		)

	}
}