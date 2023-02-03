import React, { Component, Fragment } from "react";
import "./styles.css"
import Home from "../../pages/Home";
import Account from "../../pages/Account";
import Settings from "../../pages/Settings";
import Help from "../../pages/Help";


export default class ActionsPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current_page: "home"
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentAction !== this.props.currentAction) {
            this.setState({ current_page: this.props.currentAction})
        }
      }

    setPage = () => {
        if (this.state.current_page === "home") {
            return (
                <Home />
            )
        }
        if (this.state.current_page === "settings") {
            return (
                <Settings />
            )
        }
        if (this.state.current_page === "account") {
            return (
                <Account />
            )
        }
        if (this.state.current_page === "help") {
            return (
                <Help />
            )
        }
    }

    render() {
        return (
            <Fragment>
                {this.setPage()}
            </Fragment>
        )
    }
}