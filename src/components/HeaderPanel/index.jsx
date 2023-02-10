import { Component } from "react";
import "./styles.css";
import home from "../../assets/home.svg";
import account from "../../assets/account.svg";
import settings from "../../assets/settings.svg";
import help from "../../assets/help.svg";

export default class HeaderPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "home",
    };
  }
  handleButton = (name) => {
    this.setState({ current: name });
    this.props.setActionsPage(name);
  };

  handleIcon = (name) => {
    return this.state.current === name ? "header-icon-current" : "header-icon";
  };

  render() {
    const buttons = [
      {
        name: "home",
        img_src: home,
      },
      {
        name: "account",
        img_src: account,
      },
      {
        name: "settings",
        img_src: settings,
      },
      {
        name: "help",
        img_src: help,
      },
      /* {
        name: "plus",
        img_src: plus,
      }, */
    ];
    return (
      <header className="Header-panel">
        {buttons.map((button, index) => {
          return (
            <div
              key={index}
              className="header-button"
              onClick={() => this.handleButton(button.name)}
            >
              <img
                src={button.img_src}
                alt={button.name}
                className={this.handleIcon(button.name)}
              />
            </div>
          );
        })}
      </header>
    );
  }
}
