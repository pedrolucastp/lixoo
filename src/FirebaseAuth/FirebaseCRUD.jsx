import React, { Component } from "react";
import firebase from '../firebase'
import { getDatabase } from "firebase/database";

class FirebaseCRUD extends Component {
  state = {
    profiles: []
  };

  componentDidMount() {
    console.log(firebase)
    const db = () => getDatabase(firebase);
    console.log(db)
  }

  render() {
    return (
      <div>
        <h2>Firestore Realtime Database CRUD PAGE</h2>
        <h4>at this point we are authenticated. so in this page can have some calls to db.</h4>
        <h4>ToDo: user can crete a Profile and add name, age, address, nickname, etc.</h4>
        <button onClick={() => this.createProfile({ name: "John Doe", age: 30 })}>
          Create
        </button>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.profiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.name}</td>
                <td>{profile.age}</td>
                <td>
                  <button
                    onClick={() => this.updateProfile(profile.id, { age: 35 })}
                  >
                    Update
                  </button>
                  <button onClick={() => this.deleteProfile(profile.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FirebaseCRUD;
