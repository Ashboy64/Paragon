function login(email, password) {
  var email = document.getElementById("InputEmail1").value;
  var password = document.getElementById("InputPassword1").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
  // donate("random3");
  // createDonationRequest("yoo", 2, 2, "random")
  // alert("here");
  add_listeners();
}

function sign_out() {
  firebase.auth().signOut()
  alert("signed out")
  add_listeners();
}

function sign_up() {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

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


async function donate(item_tag) {

  var currentUser = firebase.auth().currentUser.uid;
  var donation_num;
  var location = 'users/' + currentUser + "/donation_types";

  var donation_ref = firebase.database().ref('users/' + currentUser + "/donation_types/" + item_tag);
  await donation_ref.once("value").then(function(snapshot) {
    donation_num = snapshot.val();
    console.log(donation_num);
  });

  firebase.database().ref(location).child(item_tag + "").set(donation_num + 1);
}

function createDonationRequest(req, lat, lang, type) {
  firebase.database().ref('donation_requests/' + req).child("lat").set(lat);
  firebase.database().ref('donation_requests/' + req).child("lang").set(lang);
  firebase.database().ref('donation_requests/' + req).child("type").set(type);
}
