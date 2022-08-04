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

function body_onload () {

    username=localStorage.getItem("username");

    document.getElementById("username_h3").innerHTML="Welcome "+ username;
}


function addRoom () {
    room_name=document.getElementById("room_name").value;

    localStorage.setItem("room_name",room_name);

    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room"
    });

    window.location= "quitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room name is" + Room_names);
   row= "<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)'># " + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML+=row


   //End code
   });
});
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location= "quitter_page.html";
}

function logout() {

localStorage.removeItem("room_name");
localStorage.removeItem("username");

window.location="index.html"

}