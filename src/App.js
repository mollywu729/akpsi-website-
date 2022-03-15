import React, { useState, useEffect } from 'react';
import './style.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import { NavBarLight } from './components/NavBarLight.js';
import { HomeFooter } from './components/Footer.js';
import { HomePage } from './components/Homepage.js';
import  Member  from './components/Member.js';
import FilteredMembers from './components/FilteredMembers.js';
import { JoinPage } from './components/Join.js';
import { Login } from './components/SignIn.js';
import  Events from './components/Events.js';
import  eventData from './components/EventData.json';
import  "firebase/auth";
import "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Alert } from 'react-bootstrap';


// export default class App extends Component () {
  export default function App(props){

    // AJAX request from json file 
    const [memberData, setMemberData] = useState([]); 
    const [errorMessage, setErrorMessage] = useState(null);
    useEffect(() => {
      fetch('memberData.json')
          .then(function(response) {
              return response.json();
          })
          .then(function(data) {       
              setMemberData(data);
          })
  
          .catch((error) => {
              setErrorMessage('Unable to load file. Check to ensure file name is correct.');
              console.log(error.message);
          })  
    }, [errorMessage])

    // LOG IN
    const [user, setUser] = useState(undefined);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();

    useEffect(() => {
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          console.log(firebaseUser.displayName + " is logged in");
          setUser(firebaseUser);
          setEmail(firebaseUser.email);
          setPassword(firebaseUser.password);
          // User is signed in.
        } else {
          // No user is signed in.
          console.log("no user is logged in");
          setUser(null);
        }
      }
    );
    }, [auth]);
    
     return (
       <div className="containerAll">
           <NavBarLight/>
           <Routes>
              <Route exact path="/" element={<HomePage/>} ></Route>
              <Route path="/members" element={<Member memberData={memberData} />} ></Route>
              <Route path="/join" element={<JoinPage/>}></Route>
              <Route path="/events" element={<Events eventData={eventData} user={user}/>}></Route>
              <Route exact path="/login" element={<Login user={user} email={email} password={password}/>}></Route>
              <Route path="*" element={<Navigate to ="/" />}></Route>
              <Route
                path="/members/:selectedClassId"
                element={<FilteredMembers memberData = {memberData}/>}
              />
           </Routes>
           {errorMessage && <Alert variant="danger" dismissible onClose={() => setErrorMessage(null)}>{errorMessage}</Alert>}

           <HomeFooter />
       </div>
     );
  //  }
  }