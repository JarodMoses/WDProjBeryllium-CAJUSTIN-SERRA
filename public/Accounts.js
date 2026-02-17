const tableBody = document.getElementById("tableBody");
const filterRegion = document.getElementById("filterRegion");
const filterRank = document.getElementById("filterRank");
const filterRole = document.getElementById("filterRole");
const total = document.getElementById("total");

  function getSignups() {
    return JSON.parse(localStorage.getItem("signups")) || [];
  }


  function showSignups() {
    viewSection.style.display = "block";
    displayTable(getSignups());
  }

  function displayTable(data) {
    tableBody.innerHTML = "";
    data.forEach(s => { // the display table
      tableBody.innerHTML += `
        <tr>
            <td><img src="../assets/${s.prxplayer}.png" width="90"></td>
            <td>${s.username}</td>
            <td>${s.role}</td>
            <td>${s.region}</td>
            <td><img src="../assets/${s.rank}.png" width="80"></td>
        </tr>
      `;
    });
    total.textContent = "Total Sign-ups: " + data.length;
  }

    window.onload = function() {
    displayTable(getSignups());
    };

    function applyFilters() {
    const signups = getSignups();

    const regionVal = filterRegion.value;
    const rankVal = filterRank.value;
    const roleVal = filterRole.value;

    const filtered = signups.filter(s =>
        (regionVal === "All" || s.region === regionVal) &&
        (rankVal === "All" || s.rank === rankVal) &&
        (roleVal === "All" || s.role === roleVal)
    );

    displayTable(filtered);


}


filterRegion.addEventListener("change", applyFilters);
filterRank.addEventListener("change", applyFilters);
filterRole.addEventListener("change", applyFilters);
