    const form = document.getElementById("signupForm");
    const player = document.getElementById("playerinput");
    const playerchosen = document.getElementById("chosenplayer");
    const role = document.getElementById("role");
    const region = document.getElementById("region");
    const rank = document.getElementById("rank");

    function getSignups() {
      return JSON.parse(localStorage.getItem("signups")) || [];
    }

    function saveSignups(data) {
      localStorage.setItem("signups", JSON.stringify(data));
    }

    function selectPlayer(playerName, element) {
      document.querySelectorAll(".player img")
        .forEach(img => img.classList.remove("selected"));

      element.classList.add("selected");
      player.value = playerName;
      playerchosen.textContent = "Selected Player: " + playerName;
    }

    function resetPlayer() {
      document.querySelectorAll(".player img")
        .forEach(img => img.classList.remove("selected"));
      player.value = "";
      playerchosen.textContent = "";
    }

    


    form.addEventListener("submit", function(e) {
      e.preventDefault();


        if (player.value === "") {
            alert("Please select a player.");
            return; 
        }

    const confirmed = confirm("Are you sure you want to create this account?");

    if (!confirmed) {
        return; // if they decline stop
    }

      const signups = getSignups();
    
      const user = {
        username: username.value,
        role: role.value,
        region: region.value,
        rank: rank.value,
        prxplayer: player.value,

      };

      

      signups.push(user);
      saveSignups(signups);

      alert("Signup saved!");
      form.reset();
      resetPlayer()
    });