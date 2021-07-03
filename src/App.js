import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin'
import Register from './pages/register'
import firebase from "./firebase"
import {ThemeProvider} from "@material-ui/core";
import theme from "./theme";
import Privatenavbar from './private/Privatenavbar';
import Privateroute from './private/Privateroute'
import Publicroute from './private/Publicroute'
import Privatehome from './private/Privatehome'
import Privateannouncement from './private/Privateannouncement'
import { useState, useEffect } from 'react'




function App() {


  const [values, setValues] = useState({
    isAuth: false,
    isLoading: true,
  });




  useEffect(() => {

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setValues({ isAuth: true, isLoading: false });
   
      } else {
        // No user is signed in.
        setValues({ isAuth: false, isLoading: false });
      }
    });
  }, []);

  if (values.isLoading) {
    return <p>Loading...</p>

  }

  return (



      <ThemeProvider theme={theme}>



      <Router>
    
        
        <Switch>


          <Publicroute path="/" isAuth={values.isAuth} restricted={true} exact component={Home} />
          <Publicroute path="/signin" isAuth={values.isAuth} restricted={true} component={SigninPage} />
          <Publicroute path="/register" isAuth={values.isAuth} restricted={true} component={Register} />
         


        </Switch>


       

        <Privateroute isAuth={values.isAuth} exact component={Privatenavbar}/>

        <Switch>


          <Privateroute path="/accounthomepage" isAuth={values.isAuth} exact component={Privatehome} />
          <Privateroute path="/announcement" isAuth={values.isAuth} exact component={Privateannouncement} />
        



        </Switch>





      </Router>
    </ThemeProvider>





  );
}

export default App;
