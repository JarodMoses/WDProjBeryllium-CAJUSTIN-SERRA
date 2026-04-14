document.addEventListener("DOMContentLoaded", function() {

const user = JSON.parse(localStorage.getItem("matcheduser"));


document.getElementById("username").textContent = user.username;
document.getElementById("email").textContent = user.email;

const RoleImages = {
    "Controller": "../assets/controller.png",
    "Duelist":"../assets/duelist.png",
    "Sentinel":"../assets/sentinel.png",
    "Initiator":"../assets/initiator.png",
};

const RankImages = {
    "Unranked": "../assets/unranked.png",
    "Iron": "../assets/iron.png",
    "Bronze": "../assets/bronze.png",
    "Silver": "../assets/silver.png",
    "Gold": "../assets/gold.png",
    "Platinum": "../assets/platinum.png",
    "Diamond": "../assets/diamond.png",
    "Ascendant": "../assets/ascendant.png",
    "Immortal": "../assets/immortal.png",
    "Radiant": "../assets/radiant.png"
};

const RegionImages = {
    "North America": "../assets/na.png",
    "Europe": "../assets/eu.png",
    "Korea": "../assets/korea.png",
    "Brazil": "../assets/brazil.png",
    "Latin America": "../assets/latam.png",
    "Asia-Pacific": "../assets/apac.png"    
};

const PlayerImages = {
    "Davai": "../assets/DAVAI.png",
    "Forsaken": "../assets/FORSAKEN.png",
    "Something": "../assets/SOMETHING.png",
    "Patmen": "../assets/PATMEN.png",
    "Jing": "../assets/JING.png"
};

document.getElementById("MainRole").src = RoleImages[user.role];
document.getElementById("CRank").src = RankImages[user.rank];
document.getElementById("Rex").src = PlayerImages[user.prxplayer];
document.getElementById("Region").src = RegionImages[user.region];



const Delete = document.getElementById("Delete");
const Logout = document.getElementById("Logout");
const Edit = document.getElementById("Edit");

Edit.addEventListener("click", function() {
    window.location.href = "Edit.html";
});

Delete.addEventListener("click", function() {
    const confirmed = confirm("Are you sure you want to delete your account?");

    if (!confirmed) {
        return;
    }

    let signups = JSON.parse(localStorage.getItem("signups")) || [];
    
    signups = signups.filter(function(account) {
            return !(
                account.email === user.email && 
                account.password === user.password
            );
        });

localStorage.setItem("signups", JSON.stringify(signups));
localStorage.removeItem("matcheduser");

alert("Your account has been deleted!");
window.location.href = "Login.html";

});


Logout.addEventListener("click", function(){

    const confirmed = confirm("Are you sure you want to logout?")

    if (!confirmed) {
        return;
    }

    localStorage.removeItem("matcheduser");
    alert("Logged Out!");
    window.location.href = "Login.html";
});

});

