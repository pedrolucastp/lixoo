import React, { Component } from 'react';
import './styles.css';

export default class Plus extends Component {
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
                {"Plus"}
            </h1>
			</div>
		)

	}
}