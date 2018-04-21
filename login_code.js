function login(email, password) {
  var email = document.getElementById("InputEmail1").value;
  var password = document.getElementById("InputPassword1").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
  alert("here")
}

function sign_out() {
  firebase.auth().signOut()
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

window.onload = function() {
  document.getElementById("login_button").onclick = function() {
    login();
  }
  document.getElementById("logout_button").onclick = function() {
    sign_out();
  }
}
