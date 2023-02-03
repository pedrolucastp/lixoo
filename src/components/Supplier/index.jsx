import React, { Component } from "react";
import "./styles.css"

export default class Supplier extends Component {
    constructor(props) {
        super(props) 
        this.state = {}
    }

    render () {
        return (
            <h1 onClick={() => {
                this.props.onReturn(false)
            }}>
                {"< Supplier"}
            </h1>
        )
    }
}