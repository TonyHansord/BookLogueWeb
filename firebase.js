var signInBtn = document.querySelector(".sign-in-btn");
var usersName = document.querySelector("#user-name");

var firebaseConfig = {
    apiKey: "AIzaSyCQjETsOzuCs5UdjL7ZQ2TbpCkGSE9-VsI",
    authDomain: "booklogue-d3180.firebaseapp.com",
    databaseURL: "https://booklogue-d3180.firebaseio.com",
    projectId: "booklogue-d3180",
    storageBucket: "booklogue-d3180.appspot.com",
    messagingSenderId: "919641155505",
    appId: "1:919641155505:web:6e1c0fedec5f476c44bf90",
    measurementId: "G-D39EN4VWNJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth();



const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      }
    }
  };
const ui = new firebaseui.auth.AuthUI(firebase.auth());
signInBtn.addEventListener("click", function() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    ui.start("#firebaseui-auth-container", uiConfig);
  }
});

firebase.auth().onAuthStateChanged((user)=> {
  if (user) {
    var username = firebase.auth().currentUser.displayName;
    signInBtn.textContent = "Logout";
    usersName.innerHTML = "Hello, " + username;

  }
  else {
    signInBtn.textContent = "Sign In";
    usersName.innerHTML = "";

  }
});
