// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDJ6C4SPqXwZEQHYgd5HQusqRQGJ5oDTZc",
    authDomain: "kwitter-3f029.firebaseapp.com",
    databaseURL: "https://kwitter-3f029-default-rtdb.firebaseio.com",
    projectId: "kwitter-3f029",
    storageBucket: "kwitter-3f029.appspot.com",
    messagingSenderId: "34387408127",
    appId: "1:34387408127:web:6d0b4923961fae28e148ca",
    measurementId: "G-EQ7818MKVP"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
  
    window.location = "chat_room.html";
    */
}



