    const form = document.getElementById("signupForm");
    const player = document.getElementById("playerinput");
    const playerchosen = document.getElementById("chosenplayer");
    const role = document.getElementById("role");
    const region = document.getElementById("region");
    const rank = document.getElementById("rank");

    function getSignups() {
      return JSON.parse(localStorage.getItem("signups")) || [];  // retrieve data
    }

    function saveSignups(data) {
      localStorage.setItem("signups", JSON.stringify(data));   // save data in local storage
    }

    function selectPlayer(playerName, element) {     //Highlights chosen player in signups form
      document.querySelectorAll(".player img")
        .forEach(img => img.classList.remove("selected"));   // So there arent two highlights

      element.classList.add("selected");
      player.value = playerName;
      playerchosen.textContent = "Selected Player: " + playerName;  //displays text of chosen player
    }

    function resetPlayer() {
      document.querySelectorAll(".player img")
        .forEach(img => img.classList.remove("selected"));   //remove selected border and txt
      player.value = "";
      playerchosen.textContent = "";
    }

    


    form.addEventListener("submit", function(e) {
      e.preventDefault();

    const signups = getSignups();

    
    const EmailToCheck = email.value.trim().toLowerCase();   //CONVERTS EMAIL VALUE TO LOWERCASE FOR CHECKING PURPOSES
    const EmailExists = signups.some(user => (user.email || "").toLowerCase() === EmailToCheck); // compares values in signups to the email check

    const UsernameToCheck = username.value.trim().toLowerCase(); // Converts username value to lowercase for checking purposes
    const UsernameExists = signups.some(user => (user.username || "").toLowerCase() === UsernameToCheck) // compares values in signups to the username check

    
    if (EmailExists && UsernameExists) { // if both user and email are already taken
      alert("That email and username are both taken. Please choose a different email username")
      return;
    }

    else if (EmailExists) {  // if email is already taken
      alert("That email is already taken. Please use another one.");
      return; 
    }

    else if (UsernameExists) // if username is already taken
    {
      alert("That username is already taken. Please choose another one")
      return;
    }



    const confirmed = confirm("Are you sure you want to create this account?");

    if (!confirmed) {
        return; // if they decline stop
    }


    
      const user = {
        username: username.value,
        role: role.value,
        email: email.value,
        region: region.value,
        rank: rank.value,
        prxplayer: player.value,  /*SAVING USER DATA FOR TABLE DISPLAY IN ACCOUNTS.HTML*/

      };

      

      signups.push(user);   
      saveSignups(signups); /* Saving */

      alert("Signup saved!");
      form.reset();
      resetPlayer()

      window.scrollTo({  /*Scroll back to top after account creation */
            top: 0,
            behavior: "smooth"
        });
    });