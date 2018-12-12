import firebase from "firebase";
var config = {
    apiKey: "AIzaSyAoCR7ubqPJxy3HQRSbyfKLkKCkBqafvPo",
    authDomain: "todo-afb4a.firebaseapp.com",
    databaseURL: "https://todo-afb4a.firebaseio.com",
    projectId: "todo-afb4a",
    storageBucket: "todo-afb4a.appspot.com",
    messagingSenderId: "831538578893",
    timestampsInSnapshots: true


  };
  firebase.initializeApp(config);

  var db = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  db.settings(settings);
  export {db,firebase}