import React, { Component } from "react";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";

export default class FirebaseAuthUI extends Component {
  componentDidMount() {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(this.props.auth);
    ui.start(".firebase-auth-container", {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID, // Other providers don't need to be given as object.
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          scopes: ["https://www.googleapis.com/auth/contacts.readonly"],
          customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: "select_account",
          },
        },

        {
          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          scopes: ["public_profile", "email", "user_likes", "user_friends"],
          customParameters: {
            // Forces password re-entry.
            auth_type: "reauthenticate",
          },
        },

        // firebase.auth.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
      ],
      signInSuccessUrl: "",
      privacyPolicyUrl: "<privacy-policy-url>",
      tosUrl: "<term-of-service-url>",
    });
  }

  render() {
    return (
      <>
        <div className={"firebase-auth-container"}></div>
      </>
    );
  }
}