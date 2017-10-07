import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

export default class AlcoholStore extends React.Component {

  state = {
    alcohol_stock: []
  }
  componentDidMount() {
    // const firebase = require("firebase");
    // // Required for side-effects
    // require("firebase/firestore");
    var config = {
      apiKey: "AIzaSyDq-hY2esWwfCFNP28MjuHgQUaJxFKx3xk",
      authDomain: "boozly-2d269.firebaseapp.com",
      databaseURL: "https://boozly-2d269.firebaseio.com",
      projectId: "boozly-2d269",
      storageBucket: "boozly-2d269.appspot.com",
      messagingSenderId: "390170153955"
    };

    firebase.initializeApp(config);
    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore();
    //add data    
    db.collection("users").add({
      first: "John",
      last: "Doe",
      born: 1992
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    //get data
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
      });
    });
    // let alcohol = []
    // db.collection("users").onSnapshot(function (doc) {
    //   doc.forEach((obj) => {
    //     alcohol.push([obj.data()]);
    //   })
    // })
  }
  render() {
    return (
      <View>

      </View>
    );
  }
}