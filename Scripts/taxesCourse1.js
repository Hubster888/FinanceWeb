firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId + "/courses/" + "taxCourse").once('value').then(function(snapshot) {
      var course1Complete = (snapshot.val() && snapshot.val().course1) || 'errorCode';
      var course2Complete = (snapshot.val() && snapshot.val().course2) || 'errorCode';
      var course3Complete = (snapshot.val() && snapshot.val().course3) || 'errorCode';
      var allComplete = true;
      if(course1Complete == true){
        document.getElementById("tick1").style.opacity = "1";
      }else {
        document.getElementById("tick1").style.opacity = "0";
        allComplete = false;
      }
      if(course2Complete == true){
        document.getElementById("tick2").style.opacity = "1";
      }else {
        document.getElementById("tick2").style.opacity = "0";
        allComplete = false;
      }
      if(course3Complete == true){
        document.getElementById("tick3").style.opacity = "1";
      }else {
        document.getElementById("tick3").style.opacity = "0";
        allComplete = false;
      }

      if(allComplete == true){
        document.getElementById("overallTick").style.opacity = "1";
      }
    });
  } else {
    //No one is signed in!!
  }
});

function courseComplete() {
  var updates = {};
  var userId = firebase.auth().currentUser.uid;
  updates['/users/' + userId + "/courses/" + "/taxCourse/" + "course1"] = true;
  firebase.database().ref().update(updates);
  document.location.href = "Finances-Taxes2-Course.html";
}
