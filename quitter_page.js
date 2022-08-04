var firebaseConfig = {
    apiKey: "AIzaSyCZg6lWWm33z2IbKOPcRXKE5RKV_HKAjjE",
    authDomain: "project-95-65346.firebaseapp.com",
    databaseURL: "https://project-95-65346-default-rtdb.firebaseio.com",
    projectId: "project-95-65346",
    storageBucket: "project-95-65346.appspot.com",
    messagingSenderId: "224158698026",
    appId: "1:224158698026:web:4039e31ca0fa468fe69153",
    measurementId: "G-NJFS6RT36P"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  room_name=localStorage.getItem("room_name");
  user_name=localStorage.getItem("username");
  

  function send() {

 msg=document.getElementById("message_typing").value;

 firebase.database().ref("room_name").push({
  name:user_name,
  message:msg,
  like:0
 });

 document.getElementById("message_typing").innerHTML="";
    
  }
