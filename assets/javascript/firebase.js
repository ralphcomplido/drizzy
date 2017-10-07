// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD64s9GqvJU0KWJfIgsexTdScFlVtQv81E",
    authDomain: "drizzy-b323a.firebaseapp.com",
    databaseURL: "https://drizzy-b323a.firebaseio.com",
    projectId: "drizzy-b323a",
    storageBucket: "drizzy-b323a.appspot.com",
    messagingSenderId: "649782104967"
  };
  firebase.initializeApp(config);

  var database = firebase.database(); 

  var bigOne = document.getElementById('bigOne');

  var dbRef = database.ref().child('text');

  dbRef.on('value', snap => bigOne.innerText = snap.val());