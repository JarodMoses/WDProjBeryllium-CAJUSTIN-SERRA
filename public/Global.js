document.addEventListener("DOMContentLoaded", function() {
    const account = document.getElementById("accountLink");  //basically changing all the "Create/LOGIN to "MyProfile" when logged in
    const accountlist = document.getElementById("AccountsList")
    const navlinks = document.getElementById("navlinks")


    
    const loggedin = JSON.parse(localStorage.getItem("matcheduser"));

    if (!loggedin)
    {
        account.style.margin = "auto auto auto -2.2vw";
    }
    if (loggedin && account) { //if user logged in change Create/LOGIN to My Profile and its link to Profile.html
        account.textContent = "My Profile";
        account.href = "Profile.html";
        accountlist.style.display = "block";
        navlinks.style.gap = "50px";
    }
})

//basically changing the create/LOGIN nav link to "My Profile when a player is logged in"
