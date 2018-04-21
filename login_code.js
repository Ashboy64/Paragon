function login(email, password) {
  var email = document.getElementById("InputEmail1").value;
  var password = document.getElementById("InputPassword1").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
  alert("here");
  add_listeners();
}

function sign_out() {
  firebase.auth().signOut()
  alert("signed out")
  add_listeners();
}

// $(document).ready(function () {
//   $("#login_button").click(function () {
//     alert("email: " + $("#InputEmail1").val());
//
//     login($("#InputEmail1").val(), $("#InputPassword1").val());
//   });
//   $("#logout_button").click(function () {
//     signOut();
//   });
// });

function add_listeners() {
  document.getElementById("login_button").onclick = function() {
    login();
  }
  document.getElementById("logout_button").onclick = function() {
    sign_out();
  }
}

window.onload = function() {
  add_listeners();
}
