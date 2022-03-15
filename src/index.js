import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvLp_QoHWixqAP5e26BqrtgF-Kh4pROCw",
  authDomain: "info-340-project-79c22.firebaseapp.com",
  databaseURL: "https://info-340-project-79c22-default-rtdb.firebaseio.com",
  projectId: "info-340-project-79c22",
  storageBucket: "info-340-project-79c22.appspot.com",
  messagingSenderId: "918349301614",
  appId: "1:918349301614:web:781a856ede2984f121a37f",
  measurementId: "G-D7878QM7XT"
};

initializeApp(firebaseConfig);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));