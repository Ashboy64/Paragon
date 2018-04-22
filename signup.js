$(document).ready(function () {
  wait();
  $("#close").click(function() {
    $("#m_alert").css("visibility", "hidden");
  })

  function sign_up(email, password, special) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
    var currentUser = firebase.auth().currentUser.uid;
    var donation_ref = firebase.database().ref('users/' + currentUser + "/donation_types");
    var location = 'users/' + currentUser;
    if (special){
      firebase.database().ref(location).child("special").set(true);
    } else {
      firebase.database().ref(location).child("special").set(false);
    }

    alert("signed up successfully");
    wait();
  }

  function wait() {
    $("#sign_button").click(function() {
      // $("InputPassword1").val().equiv("") ||
      if($("#InputPassword1").val()!=$("#InputPassword2").val()){
        $("#m_alert").css("visibility", "visible");
      } else {
        sign_up($("#InputEmail1").val(), $("#InputPassword1").val(), $("#special").checked);
      }
    });
  }

});
