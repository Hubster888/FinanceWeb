firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    loadList();
    document.getElementById('addButton').addEventListener('click', addARecord, false);
    document.getElementById("scrollableContainer").onclick= function(e){
      e=window.event? event.srcElement: e.target;
      if(e.className && e.className.indexOf('element')!=-1){
        //Display details
        document.getElementById("detailsContainer").style.opacity = "1";
        document.getElementById("detailsTitle").innerHTML = e.id;
        /*Add chart here*/
        getValue(e.id);
      }
    }
  } else {
    //No one is signed in!!
  }
});

function addDiv(name) {
  var div = document.createElement('div');
  div.id = name;
  div.innerHTML = name;
  div.className = 'element';
  var container = document.getElementById("scrollableContainer");
  container.appendChild(div);
}

function addARecord() {
  document.location.href = "newRecordForm.html";
}

function loadList() {
  var userId = firebase.auth().currentUser.uid;

  firebase.database().ref('/users/' + userId).child("/finincialRecords/").on('value', (snapshot) => {
  snapshot.forEach((child) => {
    addDiv(child.key, );
  });
});

  /*firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'errorCode';
    document.getElementById("pageHeader").innerHTML = "Welcome " + username + "!";
    // ...
  });*/
}

function getValue(name){
  var userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/users/' + userId + "/finincialRecords/" + name).once('value').then(function(snapshot) {
    document.getElementById("necessetiesTable").innerHTML = "£" + (snapshot.val() && snapshot.val().necesseties) || 'errorCode';
    document.getElementById("luxuriesTable").innerHTML = "£" + (snapshot.val() && snapshot.val().luxuries) || 'errorCode';
    document.getElementById("detailNotes").innerHTML = "£" + (snapshot.val() && snapshot.val().notes) || 'errorCode';
    document.getElementById("savingsTable").innerHTML = "£" + (snapshot.val() && snapshot.val().saved) || 'errorCode';
    document.getElementById("unexpectedTable").innerHTML = "£" + (snapshot.val() && snapshot.val().unexpected) || 'errorCode';
    document.getElementById("rareTable").innerHTML = "£" + (snapshot.val() && snapshot.val().unusual) || 'errorCode';
    var rating = (snapshot.val() && snapshot.val().performance) || 'errorCode';
    switch (rating) {
      case 1:
        document.getElementById("rating").style.backgroundColor = "#CE0F0F";
        document.getElementById("rating").innerHTML = "1";
        break;
      case 2:
        document.getElementById("rating").style.backgroundColor = "#D68711";
        document.getElementById("rating").innerHTML = "2";
        break;
      case 3:
        document.getElementById("rating").style.backgroundColor = "#C2C615";
        document.getElementById("rating").innerHTML = "3";
        break;
      case 4:
        document.getElementById("rating").style.backgroundColor = "#91C02D";
        document.getElementById("rating").innerHTML = "4";
        break;
      case 5:
        document.getElementById("rating").style.backgroundColor = "#2CD447";
        document.getElementById("rating").innerHTML = "5";
        break;
      default:

    }
    // ...
  });
  return value;
}
