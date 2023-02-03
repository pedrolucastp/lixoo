import React, { Component } from "react";
import "./styles.css";
import logo from "../../assets/logo.svg"

export default class DynamicPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='Dynamic-panel'>
                <img className="dynamic-img" src={logo} alt="logo!" height={50} />
                <div className="dynamic-content">
                    <h2>Welcome to Lixoo!</h2>
                    <h5 className="dynamic-content-h5">Join the effort to make the world a greener place. Welcome to the Lixoo Recycling Club!</h5>
                </div>
            </div>
        )
    }
}