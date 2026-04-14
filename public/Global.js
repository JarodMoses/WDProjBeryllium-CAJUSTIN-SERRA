document.addEventListener("DOMContentLoaded", function() {
    const account = document.getElementById("accountLink");

    const loggedin = JSON.parse(localStorage.getItem("matcheduser"));
    if (loggedin && account) {
        account.textContent = "My Profile";
        account.href = "Profile.html";
    }
})

//basically changing the create/LOGIN nav link to "My Profile when a player is logged in"
