// 🛠️ 1. ഫയർബേസ് കോൺഫിഗറേഷൻ (നിന്റെ എല്ലാ വിവരങ്ങളും ഇവിടെ സെറ്റാണ്!)
const firebaseConfig = {
    apiKey: "AIzaSyAldkKl1rlGjs-amA8rUADDW4vXczckNfs",
    authDomain: "kesa-c9fd6.firebaseapp.com",
    projectId: "kesa-c9fd6",
    storageBucket: "kesa-c9fd6.firebasestorage.app",
    messagingSenderId: "1006282632848",
    appId: "1:1006282632848:web:d8606db435e9292fb8f215",
    databaseURL: "https://kesa-c9fd6-default-rtdb.firebaseio.com/"
};

// ഫയർബേസ് സ്റ്റാർട്ട് ചെയ്യുന്നു
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

// 🛡️ യൂസർ ലോഗിൻ ചെയ്തിട്ടുണ്ടോ എന്ന് നോക്കാൻ (Auth State)
//auth.onAuthStateChanged(user => {
// 🛡️ യൂസർ ലോഗിൻ ചെയ്തിട്ടുണ്ടോ എന്ന് നോക്കാൻ (Auth State)
auth.onAuthStateChanged(user => {
    if (user) {
        localStorage.setItem('KESA_User_Email', user.email);
        
        // നിന്റെ മെയിൻ അക്കൗണ്ട് അഡ്മിൻ ആക്കാൻ
        if (user.email === "karthikskarthik685@gmail.com" || user.email === "kesa.admin@gmail.com") {
            localStorage.setItem('KESA_Role', 'SuperAdmin');
        } else {
            localStorage.setItem('KESA_Role', 'User');
        }

        // 💡 തൽക്കാലം ലാപ്ടോപ്പ് കിട്ടുന്നത് വരെ home.html-ലേക്ക് ഓട്ടോമാറ്റിക് പോകുന്നത് തടഞ്ഞു വെച്ചിരിക്കുന്നു
        // goToHomePage(); 
        
    } else {
        localStorage.clear();
    }
}); // 👈 ഇവിടെയുള്ള ബ്രാക്കറ്റ് ഇപ്പോൾ പെർഫെക്റ്റ് ആയി ക്ലോസ് ആയി!

// 🔑 ഒറിജിനൽ ലോഗിൻ ഫങ്ക്ഷൻ (Sign In)
let loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let email = document.getElementById('email_input').value;
        let password = document.getElementById('password_input').value;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                alert("ലോഗിൻ വിജയകരമായി പൂർത്തിയായി! 🔥");
                goToHomePage();
            })
            .catch(error => alert("പാസ്‌വേഡ് തെറ്റാണ് അല്ലെങ്കിൽ ഇങ്ങനെ ഒരു അക്കൗണ്ട് ഇല്ല!"));
    });
}

// 📝 പുതിയ അക്കൗണ്ട് ഉണ്ടാക്കാൻ (Sign Up - വേണമെങ്കിൽ മാത്രം ഉപയോഗിക്കാം)
let signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let email = document.getElementById('signup-email').value;
        let password = document.getElementById('signup-password').value;

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert("KESA-യിൽ പുതിയ അക്കൗണ്ട് സെറ്റായി! 🚀");
                goToHomePage();
            })
            .catch(error => alert("എറർ: " + error.message));
    });
}

// 🔄 പേജ് മാറാനുള്ള ഫങ്ക്ഷൻ
function goToHomePage() { 
    window.location.pathname = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/home.html'; 
}
