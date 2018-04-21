function login(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}

function sign_out() {
  firebase.auth().signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  })
}

$(document).ready(function () {
  $("#login_button").click(function () {
    login($("#InputEmail1").val(), $("#InputPassword1").val());
  });
  $("#logout_button").click(function () {
    signOut();
  });
});
