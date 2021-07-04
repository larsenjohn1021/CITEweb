  
import React from 'react';
import firebase from "../firebase"


const Title = () => {

    const User = firebase.auth().currentUser;


  return (
    <div className="title"   align="center" >
      <h1>Announcements</h1>
      <p>{User.email}. All your announcements are here.</p>
    </div>
  )
}

export default Title;