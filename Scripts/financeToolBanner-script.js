firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

      // User is signed in
  } else {
    document.getElementById('pageCover').style.opacity = "0.8";
    document.getElementById("pageCover").style.zIndex = "99";
    //No one is signed in!!
  }
});

document.getElementById('toolChoice1').addEventListener('click', goToOverview, false);
document.getElementById('toolChoice2').addEventListener('click', goToRecord, false);
document.getElementById('toolChoice3').addEventListener('click', goToPlan, false);

function goToOverview() {
  document.location.href = "financeToolOverview.html";
}

function goToRecord() {
  document.location.href = "financeToolRecord.html";
}

function goToPlan() {
  document.location.href = "financeToolPlanMain.html";
}
