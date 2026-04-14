document.addEventListener("DOMContentLoaded", function() {

const user = JSON.parse(localStorage.getItem("matcheduser"));

// Displaying the user's username and email details
document.getElementById("username").textContent = user.username;
document.getElementById("email").textContent = user.email;

const RoleImages = { //object of images of roles
    "Controller": "../assets/controller.png",
    "Duelist":"../assets/duelist.png",
    "Sentinel":"../assets/sentinel.png",
    "Initiator":"../assets/initiator.png",
};

const RankImages = { // object of rank images
    "Unranked": "../assets/Unranked.png",
    "Iron": "../assets/Iron.png",
    "Bronze": "../assets/Bronze.png",
    "Silver": "../assets/Silver.png",
    "Gold": "../assets/Gold.png",
    "Platinum": "../assets/Platinum.png",
    "Diamond": "../assets/Diamond.png",
    "Ascendant": "../assets/Ascendant.png",
    "Immortal": "../assets/Immortal.png",
    "Radiant": "../assets/Radiant.png"
};

const RegionImages = { //object of images of regions
    "North America": "../assets/na.png",
    "Europe": "../assets/eu.png",
    "Korea": "../assets/korea.png",
    "Brazil": "../assets/brazil.png",
    "Latin America": "../assets/latam.png",
    "Asia-Pacific": "../assets/apac.png"    
};

const PlayerImages = { //objects of player images
    "Davai": "../assets/DAVAI.png",
    "Forsaken": "../assets/FORSAKEN.png",
    "Something": "../assets/SOMETHING.png",
    "Patmen": "../assets/PATMEN.png",
    "Jing": "../assets/JING.png"
};

document.getElementById("MainRole").src = RoleImages[user.role]; //displaying the correc picture based on the user's info, using the object
document.getElementById("CRank").src = RankImages[user.rank];
document.getElementById("Rex").src = PlayerImages[user.prxplayer];
document.getElementById("Region").src = RegionImages[user.region];



const Delete = document.getElementById("Delete"); //declaring button ids
const Logout = document.getElementById("Logout");
const Edit = document.getElementById("Edit");

Edit.addEventListener("click", function() {
    window.location.href = "Edit.html";
}); //if edit button is clicked, go to edit.html

Delete.addEventListener("click", function() { 
    const confirmed = confirm("Are you sure you want to delete your account?"); //when delete is clicked, confirm if they want to delete

    if (!confirmed) {
        return;
    }

    let signups = JSON.parse(localStorage.getItem("signups")) || [];
    
    signups = signups.filter(function(account) { //returning everything that isnt user email or password
            return !(
                account.email === user.email && 
                account.password === user.password
            );
        });

localStorage.setItem("signups", JSON.stringify(signups)); //saving the new data in signups and saving it to local storage
localStorage.removeItem("matcheduser"); //removing the matched user from storage

alert("Your account has been deleted!");
window.location.href = "Login.html"; //redirect back to login

});


Logout.addEventListener("click", function(){

    const confirmed = confirm("Are you sure you want to logout?")

    if (!confirmed) {
        return;
    }

    localStorage.removeItem("matcheduser"); //remove matched user
    alert("Logged Out!");
    window.location.href = "Login.html"; // go back to login
});

});

