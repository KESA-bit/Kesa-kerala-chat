// 🛠️ 1. FIREBASE CONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSyAldkKl1rlGjs-amA8rUADDW4vXczckNfs",
    authDomain: "kesa-c9fd6.firebaseapp.com",
    databaseURL: "https://kesa-c9fd6-default-rtdb.firebaseio.com",
    projectId: "kesa-c9fd6",
    storageBucket: "kesa-c9fd6.firebasestorage.app",
    messagingSenderId: "1006282632848",
    appId: "1:1006282632848:web:d8606db435e9292fb8f215"
};

// Firebase Initialize ചെയ്യുന്നു
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

// 🚀 2. LOGIN LOGIC (ലോഗിൻ ചെയ്യാൻ)
const loginButton = document.getElementById("login-btn");
if (loginButton) {
    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); 

        const emailValue = document.getElementById("login-email").value.trim();
        const passwordValue = document.getElementById("login-password").value.trim();

        if (emailValue === "" || passwordValue === "") {
            alert("ദയവായി ഇമെയിലും പാസ്‌വേഡും ടൈപ്പ് ചെയ്യൂ മച്ചാനേ!");
            return;
        }

        auth.signInWithEmailAndPassword(emailValue, passwordValue)
        .then((userCredential) => {
            console.log("Login Successful!");
            localStorage.setItem('kesa_username', emailValue.split('@')[0]);
            window.location.href = "home.html"; 
        })
        .catch((error) => {
            alert("ലോഗിൻ പരാജയപ്പെട്ടു: " + error.message);
        });
    });
}

// 📝 3. SIGNUP LOGIC (സൈനപ്പ് കഴിഞ്ഞാൽ നേരെ ഹോം പേജ് തുറക്കും)
const signupButton = document.getElementById("signup-btn");
if (signupButton) {
    signupButton.addEventListener("click", function(event) {
        event.preventDefault(); 

        const signupEmail = document.getElementById("signup-email").value.trim();
        const signupPassword = document.getElementById("signup-password").value.trim();

        if (signupEmail === "" || signupPassword === "") {
            alert("ദയവായി പുതിയ ഇമെയിലും പാസ്‌വേഡും ടൈപ്പ് ചെയ്യൂ!");
            return;
        }

        // ഫയർബേസ് വഴി പുതിയ അക്കൗണ്ട് ഉണ്ടാക്കുന്നു
        auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
        .then((userCredential) => {
            alert("അക്കൗണ്ട് വിജയകരമായി ഉണ്ടാക്കിയിരിക്കുന്നു! വെൽക്കം ടു KESA.");
            
            // യൂസർ നെയിം ലോക്കൽ സ്റ്റോറേജിൽ വെക്കുന്നു
            localStorage.setItem('kesa_username', signupEmail.split('@')[0]);
            
            // 🚀 സൈനപ്പ് കഴിഞ്ഞ ഉടനെ നേരെ നമ്മുടെ മാസ്സ് ഹോം പേജിലേക്ക് വിടുന്നു!
            window.location.href = "home.html"; 
        })
        .catch((error) => {
            alert("അക്കൗണ്ട് ഉണ്ടാക്കാൻ സാധിച്ചില്ല: " + error.message);
        });
    });
}
