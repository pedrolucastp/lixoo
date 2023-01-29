import { Component } from "react";
import "./styles.css"
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu.svg"
import settings from "../../assets/settings.svg"
import help from "../../assets/help.svg"

export default class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} height={80} alt="logo" />
                <img src={menu} alt="menu" height={50} />
                <img src={settings} alt="menu" height={50} />
                <img src={help} alt="menu" height={50} />
            </header>
        )
    }
}