firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      var username = (snapshot.val() && snapshot.val().username) || 'errorCode';
      var email = (snapshot.val() && snapshot.val().email) || 'errorCode';
      document.getElementById("userNameTab").innerHTML = username;
      document.getElementById("emailTab").innerHTML = email;
      // ...
    });
    document.getElementById('signOutButton').addEventListener('click', signOut, false);
  } else {
    //No one is signed in!!
  }
});

function signOut() {
  firebase.auth().signOut();
  document.location.href = "Welcome.html";
}
