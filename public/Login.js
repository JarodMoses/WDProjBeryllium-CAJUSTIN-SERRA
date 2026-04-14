const form = document.getElementById("loginForm"); //declaring variables
const email = document.getElementById("email");
const password = document.getElementById("password");

function getSignups() { //declaring function
    return JSON.parse(localStorage.getItem("signups")) || [];
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const signups = getSignups();
    const EnteredEmail = email.value.trim().toLowerCase();
    const EnteredPassword = password.value;

    const matcheduser = signups.find(user => //if there is a signup that matches BOTH entered email and password, it is saved in matched user
    (user.email || "").toLowerCase() === EnteredEmail && (user.password || "") === EnteredPassword
    );
    
    if (matcheduser)
    {
        alert("Login Success!")
        localStorage.setItem("matcheduser", JSON.stringify(matcheduser)); //saving the matcched user in localstorage for later purposes

        window.location.href = "Profile.html"; //going to the logged in user's profile
    }

    else {
        alert("Incorrect password or email!")
    }


});