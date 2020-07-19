/**
    * Handles the sign in button press.
    */
   function toggleSignIn() {
     if (firebase.auth().currentUser) {
       // [START signout]
       alert("signing out!");
       firebase.auth().signOut();
       // [END signout]
     } else {
       var email = document.getElementById('emailIn').value;
       var password = document.getElementById('passwordIn').value;
       if (email.length < 4) {
         alert('Please enter an email address.');
         return;
       }
       if (password.length < 4) {
         alert('Please enter a password.');
         return;
       }
       // Sign in with email and pass.
       // [START authwithemail]
       firebase.auth().signInWithEmailAndPassword(email, password)
       .then(function(user) {
         document.location.href = "index.html";
       })
       .catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // [START_EXCLUDE]
         if (errorCode === 'auth/wrong-password') {
           alert('Wrong password.');
         } else {
           alert(errorMessage);
         }
         console.log(error);
         // [END_EXCLUDE]
       });
       // [END authwithemail]
     }
     if(firebase.auth().currentUser) {
       document.location.href = "index.html";
     }
   }

   /**
    * Handles the sign up button press.
    */
   function handleSignUp() {
     var email = document.getElementById('emailUp').value;
     var password = document.getElementById('passwordUp').value;
     if (email.length < 4) {
       alert('Please enter an email address.');
       return;
     }
     if (password.length < 4) {
       alert('Please enter a password.');
       return;
     }
     // Create user with email and pass.
     // [START createwithemail]
     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(function(user) {
     })
     .catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // [START_EXCLUDE]
       if (errorCode == 'auth/weak-password') {
         alert('The password is too weak.');
       } else {
         alert(errorMessage);
       }
       console.log(error);
       // [END_EXCLUDE]
     });
     // [END createwithemail]
   }

   /**
    * initApp handles setting up UI event listeners and registering Firebase auth listeners:
    *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
    *    out, and that is where we update the UI.
    */
   function initApp() {
     // Listening for auth state changes.
     // [START authstatelistener]
     firebase.auth().onAuthStateChanged(function(user) {
       // [START_EXCLUDE silent]
       // [END_EXCLUDE]
       if (user) {
         // User is signed in.
         var displayName = user.displayName;
         var email = user.email;
         var emailVerified = user.emailVerified;
         var photoURL = user.photoURL;
         var isAnonymous = user.isAnonymous;
         var uid = user.uid;
         var providerData = user.providerData;
         // [START_EXCLUDE]

         var userId = firebase.auth().currentUser.uid;
         return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
           var username = (snapshot.val() && snapshot.val().username) || 'errorCode';
           if(username = "errorCode"){
             writeUserData(userId, document.getElementById("userName").value, email);
             document.location.href = "signUpConfirm.html";
           }
           // ...
         });

       } else {
         // User is signed out.
         // [START_EXCLUDE

         // [END_EXCLUDE]
       }
       // [START_EXCLUDE silent]
       // [END_EXCLUDE]
     });
     // [END authstatelistener]

     document.getElementById('logInButton').addEventListener('click', toggleSignIn, false);
     document.getElementById('signUpButton').addEventListener('click', handleSignUp, false);
   }

   window.onload = function() {
     initApp();
   };

   function writeUserData(userId, name, email) {
     database = firebase.database();
     firebase.database().ref('users/' + userId).set({
       username : name,
       email : email
     });
     firebase.database().ref('users/' + userId + "/courses/" + "/taxCourse/").set({
       course1: false,
       course2: false,
       course3: false
     });
     /*firebase.database().ref('users/' + userId + "/finincialRecords/").set({
       0: "empty"
     });*/
   }
