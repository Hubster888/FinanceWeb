firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      var username = (snapshot.val() && snapshot.val().username) || 'errorCode';
      document.getElementById("pageHeader").innerHTML = "Welcome " + username + "!";
      // ...
    });

  } else {
    document.getElementById("pageHeader").innerHTML = "Welcome!";
    //No one is signed in!!
  }
  document.getElementById("financesDescription").style.color = "#FF8500";
  document.getElementById("financesDescription").style.fontWeight = "bold";
  document.getElementById("tempTitle").innerHTML = "Finances";
  document.getElementById("tempParagraph").innerHTML = `Arrival entered an if drawing request. How daughters not promotion few knowledge contented.
  Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no.
  <br>
  <br>
  On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day.
  Stairs regret at if matter to. On as needed almost at basket remain.
  By improved sensible servants children striking in surprise.
  <br>
  <br>
  Arrival entered an if drawing request. How daughters not promotion few knowledge contented.
  Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no.`;
});

window.onscroll = function (e) {
  var scrollTop = window.pageYOffset || document.body.scrollTop;

  if(scrollTop > 790){
    if(this.oldScroll > this.scrollY){
      //Scrolling up
      document.getElementById("headBanner").classList.remove("slideUp");
      document.getElementById("headBanner").classList.add('slideDown');
    }else{
      //scrolling down
      document.getElementById("headBanner").classList.remove("slideDown");
      document.getElementById("headBanner").classList.add('slideUp');
    }
  }else {
    document.getElementById("headBanner").classList.remove("slideDown");
    document.getElementById("headBanner").classList.remove("slideUp");
  }
  this.oldScroll = this.scrollY;
}

document.getElementById("financesDescription").onclick = function(){
  document.getElementById("investingDescription").style.color = "white";
  document.getElementById("financesDescription").style.color = "#FF8500";
  document.getElementById("investingDescription").style.fontWeight = "normal";
  document.getElementById("financesDescription").style.fontWeight = "bold";
  document.getElementById("tempTitle").innerHTML = "Finances";
  document.getElementById("tempParagraph").innerHTML = `Arrival entered an if drawing request. How daughters not promotion few knowledge contented.
  Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no.
  <br>
  <br>
  On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day.
  Stairs regret at if matter to. On as needed almost at basket remain.
  By improved sensible servants children striking in surprise.
  <br>
  <br>
  Arrival entered an if drawing request. How daughters not promotion few knowledge contented.
  Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no.`;
};

document.getElementById("investingDescription").onclick = function(){
  document.getElementById("financesDescription").style.color = "white";
  document.getElementById("investingDescription").style.color = "#FF8500";
  document.getElementById("financesDescription").style.fontWeight = "normal";
  document.getElementById("investingDescription").style.fontWeight = "bold";
  document.getElementById("tempTitle").innerHTML = "Investing";
  document.getElementById("tempParagraph").innerHTML = "None";
};
