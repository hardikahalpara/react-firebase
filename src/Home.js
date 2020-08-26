import React from "react";
import firebase from "./firebase";
import { AuthContext } from "./Auth.js";

const Home = () => {
const { currentUser } = React.useContext(AuthContext);
  return (
    <>
    {console.log(currentUser)}
      <h1>Home</h1>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
