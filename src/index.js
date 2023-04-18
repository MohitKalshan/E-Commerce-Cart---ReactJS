import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


