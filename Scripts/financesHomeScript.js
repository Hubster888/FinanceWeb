firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId + "/courses/" + "taxCourse").once('value').then(function(snapshot) {
      var course1Complete = (snapshot.val() && snapshot.val().course1) || 'errorCode';
      var course2Complete = (snapshot.val() && snapshot.val().course2) || 'errorCode';
      var course3Complete = (snapshot.val() && snapshot.val().course3) || 'errorCode';
      var allComplete = true;
      if(course1Complete == false){
        allComplete = false;
      }
      if(course2Complete == false){
        allComplete = false;
      }
      if(course3Complete == true){
      }else {
        allComplete = false;
      }

      if(allComplete == true){
        document.getElementById("taxesTick").style.opacity = "1";
      }
    });
  } else {
    //No one is signed in!!
  }
});
