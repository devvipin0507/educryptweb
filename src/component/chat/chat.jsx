import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, update, push } from 'firebase/database';
import LiveChat from './liveChat';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8ISZRq949XJrbNeZm0gK54d9Q3zAzBtI",
  authDomain: "lab-elsaq-education.firebaseapp.com",
  databaseURL: "https://lab-elsaq-education-default-rtdb.firebaseio.com",
  projectId: "lab-elsaq-education",
  storageBucket: "lab-elsaq-education.appspot.com",
  messagingSenderId: "413835077933",
  appId: "1:413835077933:web:e9ad389b4f0e203dfa0ba4",
  measurementId: "G-1527TMN738"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Get Firebase Realtime Database instance

const Chat = ({chat_node, course_id, isPublic}) => {

  return (
    <>
      {/* <div className="">
        <Tabs
          defaultActiveKey="Live Chat"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Live Chat" title="Live Chat">
            <LiveChat
              chat_node = {chat_node}
              course_id = {course_id}
              isPublic = {isPublic}
            />
          </Tab>
          <Tab eventKey="Live Poll" title="Live Poll">
            Tab content for Profile
          </Tab>
          <Tab eventKey="PDF" title="PDF" >
            Tab content for Contact
          </Tab>
        </Tabs>
      </div> */}
      <div className="container-fluid">
      <div className="row">
        <div className="card p-2 col-md-12">
          <Tabs
            defaultActiveKey="Live Chat"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Live Chat" title="Live Chat">
            <LiveChat
              chat_node = {chat_node}
              course_id = {course_id}
              isPublic = {isPublic}
            />
            </Tab>
            <Tab eventKey="Live Poll" title="Live Poll">
              Tab content for Profile
            </Tab>
            <Tab eventKey="PDF" title="PDF">
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
    </>
  );
};

export default Chat;
