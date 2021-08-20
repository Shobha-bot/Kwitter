 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAD0JRRx0gvkeJos-go2icTyXY1oY2nrLg",
      authDomain: "shobha-9f70d.firebaseapp.com",
      databaseURL: "https://shobha-9f70d-default-rtdb.firebaseio.com",
      projectId: "shobha-9f70d",
      storageBucket: "shobha-9f70d.appspot.com",
      messagingSenderId: "684197059601",
      appId: "1:684197059601:web:e48659c0fd2167d644e5b0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
