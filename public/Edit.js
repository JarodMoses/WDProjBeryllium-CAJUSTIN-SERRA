document.addEventListener("DOMContentLoaded", function(){
    const user = JSON.parse(localStorage.getItem("matcheduser"));

    document.getElementById("username").value = user.username;
    document.getElementById("email").value = user.email;
    document.getElementById("password").value = user.password;
    document.getElementById("role").value = user.role;
    document.getElementById("region").value = user.region;
    document.getElementById("rank").value = user.rank;

    const PlayerInput = document.getElementById("playerinput");
    const ChosenText = document.getElementById("chosenplayer");

    PlayerInput.value = user.prxplayer;
    ChosenText.textContent = "Selected Player: " + user.prxplayer;

    document.querySelectorAll(".player img").forEach(img => {
        if (img.alt === user.prxplayer) {
            img.classList.add("selected");
        }
    });

    document.getElementById("updateForm").addEventListener("submit", function (e){
        e.preventDefault();

        let signups = JSON.parse(localStorage.getItem("signups")) || [];
        let user = JSON.parse(localStorage.getItem("matcheduser"));

        const email = user.email;

        const UsernameToCheck = document.getElementById("username").value.trim().toLowerCase(); // Converts username value to lowercase for checking purposes
        const UsernameExists = signups.some(account => (account.username || "").toLowerCase() === UsernameToCheck &&
        account.email !== user.email); // compares values in signups to the username check

        if (UsernameExists) // if username is already taken
        {
        alert("That username is already taken. Please choose another one")
        return;
        }

        
        
        if (document.getElementById("password").value !== user.password)
        {

                if (document.getElementById("confirmpassword").value === "")
                {
                    alert("Please confirm your new password")
                    return;
                }

                if (document.getElementById("password").value !== document.getElementById("confirmpassword").value)
                {
                    alert("Your new passwords do not match.")
                    return;
                }
    
        }



        const confirmed = confirm("Update your account?");
        if (!confirmed) {
            return;
        }



        const updatedUser = {
            username: document.getElementById("username").value,
            email: email, 
            password: document.getElementById("password").value,
            role: document.getElementById("role").value,
            region: document.getElementById("region").value,
            rank: document.getElementById("rank").value,
            prxplayer: document.getElementById("playerinput").value
        };

        signups = signups.map(account => { //updating in signups
            if (account.email === email) {
                return updatedUser;
            }
            return account;
        });

        localStorage.setItem("signups", JSON.stringify(signups)); //saving changes to localstorage
        localStorage.setItem("matcheduser", JSON.stringify(updatedUser)); // updating login'd user values

        alert("Account updated!");
        window.location.href = "Profile.html";

    })
});


function selectPlayer(playerName, element)
{
    document.querySelectorAll(".player img").forEach(img => {
        img.classList.remove("selected");  // removing class selected from all so that it ensures only one is highlighted at a time
    });

    const PlayerInput = document.getElementById("playerinput"); //retrieving values from html
    const ChosenText = document.getElementById("chosenplayer");

    element.classList.add("selected"); //adding class "Selected" to the clicked player

    PlayerInput.value = playerName; //updating html values
    ChosenText.textContent = "Selected Player: " + playerName;
}

function Cancel(){
    const confirmed = confirm("Disregard your changes?") 

    if (!confirmed) {
        return;
    }


    window.location.href = "Profile.html";
}
