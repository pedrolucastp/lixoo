import React, { Component } from "react";
import "./UserPage.css";
import firebase from "../../../firebase";
import FirebaseAuthUI from "../../../FirebaseAuth/FirebaseAuthUI";
import Authenticated from "../../../FirebaseAuth/Authenticated";
import { onAuthStateChanged } from "firebase/auth";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    onAuthStateChanged(firebase.auth(), (user) => {
      if (user) {
        this.setState({ user: { email: user.email, uid: user.uid } });
      } else {
        this.setState({ user: {} });
      }
    });
  }

  render() {
    return (
      <div className="UserPage">
        {/*  <BrowserRouter> */}
        {this.state.user.email ? (
          /*  <Routes>
              <Route
                path="/"
                element={ */
          <Authenticated user={this.state.user} />
        ) : (
          /*  }
              />
            </Routes> */
          <FirebaseAuthUI auth={firebase.auth()} />
        )}
        {/* </BrowserRouter> */}
        <div>
          <button
            onClick={() => firebase.auth().signOut()}
            className="sign-out"
          >
            <h4>Sign Out</h4>
          </button>
        </div>
      </div>
    );
  }
}
