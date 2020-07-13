firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById('loginButton').addEventListener('click', profile, false);
  } else {
    document.getElementById('loginButton').addEventListener('click', goToLogIn, false);
    //No one is signed in!!
  }
});

function profile(){
  document.location.href = "profilePage.html";
}

function goToLogIn() {
  document.location.href = "logInPage.html";
}
