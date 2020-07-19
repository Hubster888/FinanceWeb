firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var performanceChosen = 0;
    document.getElementById('performance1').addEventListener('click', function(){performanceChosen = 1;}, false);

    document.getElementById('submitButton').addEventListener('click', function(){
      var userId = firebase.auth().currentUser.uid;
      var currentDate = "/" + new Date().toDateString() + "/";

      firebase.database().ref('/users/' + userId + "/finincialRecords/" + currentDate).set({
        necesseties: document.getElementById("necessetiesBox").value,
        luxuries: document.getElementById("luxuriesBox").value,
        unexpected: document.getElementById("unexpectedBox").value,
        unusual: document.getElementById("unusualBox").value,
        saved: document.getElementById("savedBox").value,
        performance: performanceChosen,
        notes: document.getElementById("notesBox").value
      });
      setTimeout(() => {  window.location.href = "welcome.html"; }, 2000);
    }, false);
      // ...
  } else {
    document.getElementById('submitButton').addEventListener('click', rejectForm, false);
    //No one is signed in!!
  }
});
