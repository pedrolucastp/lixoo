import React, { Component } from 'react';
import './styles.css';

export default class Help extends Component {
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
                { "Help"}
            </h1>
			</div>
		)

	}
}