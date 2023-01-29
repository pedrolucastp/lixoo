import { Component } from "react";
import "./styles.css"
import logo from "../../assets/logo.svg"

export default class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <header className="App-header">
                <h2> Menu </h2>
                <img src={logo} className="App-logo" alt="logo" />
                <h2> Ajuda </h2>
            </header>
        )
    }
}