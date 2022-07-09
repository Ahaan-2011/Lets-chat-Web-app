function body_onload () {
    username=localStorage.getItem("username");

    document.getElementById("username_h3").innerHTML="Welcome "+ username;
}
