const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

function getSignups() {
    return JSON.parse(localStorage.getItem("signups")) || [];
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const signups = getSignups();
    const EnteredEmail = email.value.trim().toLowerCase();
    const EnteredPassword = password.value;

    const matcheduser = signups.find(user =>
    (user.email || "").toLowerCase() === EnteredEmail && (user.password || "") === EnteredPassword
    );
    
    if (matcheduser)
    {
        alert("Login Success!")
        localStorage.setItem("matcheduser", JSON.stringify(matcheduser));

        window.location.href = "Profile.html";
    }

    else {
        alert("Incorrect password or email!")
    }


});