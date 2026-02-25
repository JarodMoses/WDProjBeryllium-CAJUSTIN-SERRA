const tableBody = document.getElementById("tableBody");
const filterRegion = document.getElementById("filterRegion");
const filterRank = document.getElementById("filterRank");
const filterRole = document.getElementById("filterRole");
const total = document.getElementById("total");

  function getSignups() {
    return JSON.parse(localStorage.getItem("signups")) || []; /* Retrieve item key "signups" from storage */
  }


  function displayTable(data) {
    tableBody.innerHTML = "";
    data.forEach(s => { // the display table
      tableBody.innerHTML += `
        <tr>
            <td><img src="../assets/${s.prxplayer}img.png" width="90"></td>
            <td>${s.username}</td>
            <td>${s.role}</td>
            <td>${s.region}</td>
            <td><img src="../assets/${s.rank}.png" width="80"></td>
        </tr>
      `;
    });
    total.textContent = "Total Sign-ups: " + data.length;
  }

    window.onload = function() {  /*Load the accounts table on window load */
    displayTable(getSignups());
    };

    function applyFilters() {    /*Filter function for filtlers */
    const signups = getSignups();
                                          /*the three filters */
    const regionVal = filterRegion.value;
    const rankVal = filterRank.value;
    const roleVal = filterRole.value;

    const filtered = signups.filter(s =>  /*Checking for objects that match the filters */
        (regionVal === "All" || s.region === regionVal) &&
        (rankVal === "All" || s.rank === rankVal) &&
        (roleVal === "All" || s.role === roleVal)
    );

    displayTable(filtered); /*Displays the objects that do match up with the filters */


}


filterRegion.addEventListener("change", applyFilters);  /*Do the function applyFilters when drowpdown is modified*/
filterRank.addEventListener("change", applyFilters);
filterRole.addEventListener("change", applyFilters);
