// 🛠️ 1. FIREBASE CONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSyAldkKl1rlGjs-amA8rUADDW4vXczckNfs",
    authDomain: "kesa-c9fd6.firebaseapp.com",
    databaseURL: "https://kesa-c9fd6-default-rtdb.firebaseio.com",
    projectId: "kesa-c9fd6",
    storageBucket: "kesa-c9fd6.firebasestorage.app",
    messagingSenderId: "1006282632848",
    appId: "1:1006282632848:web:d8606db435e9292fb8f215",
};

// 🛠️ 1. MAIN TAB SWITCHING LOGIC (ഹോമും റീൽസും മാറി മാറി കാണാൻ)
function switchMainTab(tabName) {
    const homeFeed = document.getElementById("main-home-feed");
    const reelsFeed = document.getElementById("main-reels-feed");
    
    const homeBtn = document.getElementById("home-tab-btn");
    const reelsBtn = document.getElementById("reels-tab-btn");
    const profileBtn = document.getElementById("profile-tab-btn");

    // എല്ലാ നാവിഗേഷൻ ബട്ടണുകളിൽ നിന്നും ആക്റ്റീവ് കളർ മാറ്റുന്നു
    homeBtn.classList.remove("active");
    reelsBtn.classList.remove("active");
    profileBtn.classList.remove("active");

    if (tabName === 'home') {
        // ഹോം പേജ് കാണിക്കുന്നു, റീൽസ് മറക്കുന്നു
        homeFeed.style.display = "block";
        reelsFeed.style.display = "none";
        homeBtn.classList.add("active");
    } 
    else if (tabName === 'reels') {
        // റീൽസ് കാണിക്കുന്നു (ലോക്കിങ് സിസ്റ്റം ഉൾപ്പെടെ), ഹോം മറക്കുന്നു
        homeFeed.style.display = "none";
        reelsFeed.style.display = "block";
        reelsBtn.classList.add("active");
    }
    else if (tabName === 'profile') {
        alert("പ്രൊഫൈൽ പേജ് ഉടൻ വരും മച്ചാനേ!");
        profileBtn.classList.add("active");
    }
}

// ❤️ പോസ്റ്റുകൾ ലൈക്ക് ചെയ്യാനുള്ള ചെറിയ ഫങ്ക്ഷൻ
function likePost(icon) {
    if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
        icon.style.color = "#ff6f00"; // ലൈക്ക് ചെയ്യുമ്പോൾ ഓറഞ്ച് നിറം
    } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
        icon.style.color = "#ffffff";
    }
}

// ❤️ റീൽസ് ലൈക്ക് ചെയ്യാൻ
function toggleReelLike(icon) {
    if (icon.style.color === "rgb(255, 111, 0)" || icon.style.color === "red") {
        icon.style.color = "#ffffff";
    } else {
        icon.style.color = "#ff6f00";
    }
}
