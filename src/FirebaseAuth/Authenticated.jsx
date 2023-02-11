import React, { Component } from "react";
import FirebaseCRUD from './FirebaseCRUD'

class Authenticated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUID: false,
    };
  }

  toggleUID = () => {
    this.setState((prevState) => ({
      showUID: !prevState.showUID,
    }));
  };

  render() {
    return (
      <div className="container">
          <span><strong>User Email: </strong>{this.props.user.email}</span>
          <div>
          <button onClick={this.toggleUID}>
            {this.state.showUID ? "Hide UID" : "Show UID"}
          </button>
          {this.state.showUID && (
            <div>
              <span><strong>UID: </strong>{this.props.user.uid}</span>
            </div>
          )}
          
        </div>
        <div>
          {/* <h3>Upload your profile picture:</h3> */}
         {/*  <input type="file" /> */}
         <FirebaseCRUD />
        </div>
      </div>
    );
  }
}

export default Authenticated;
