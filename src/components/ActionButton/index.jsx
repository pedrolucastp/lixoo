import { Component } from "react";
import "./styles.css"
import a from '../../assets/a.svg'
import b from '../../assets/b.svg'

export default class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }

    componentDidMount = () => {
        this.setState({
            title: this.props.title
        })
    }

    render() {
        return (
            <div className={`action-button ${this.props.type}`}>
                <img className="button-icon" src={this.props.type === "receiver" ? a : b} alt=''></img>
                {this.state.title}
            </div>
        )
    }
}