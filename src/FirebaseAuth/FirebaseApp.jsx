import React, { Component } from "react";
import "./FirebaseApp.css";
import AuthGoogle from "./AuthGoogle";
import firebase from "firebase/compat/app";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Authenticated from "./Authenticated";
import { firebaseConfig } from "./firebaseConfig";

export default class FirebaseApp extends Component {
  constructor(props) {
    super(props);

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.state = {
      user: {}
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
      <div className="FrebaseApp">
        <BrowserRouter>
          {this.state.user.email ? (
            <Routes>
              <Route
                path="/"
                element={<Authenticated user={this.state.user} />}
              />
            </Routes>
          ) : (
            <AuthGoogle auth={firebase.auth()} />
          )}
        </BrowserRouter>
        <div>
          <button onClick={() => firebase.auth().signOut()} className="sign-out"><h4>Sign Out</h4></button>
        </div>
      </div>
    );
  }
}
