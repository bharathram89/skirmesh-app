function showTooltip(evt, text) {
  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = String(text) || "0";
  tooltip.style.display = "block";
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
}

function hideTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}


function show_table(evt, cityName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("leaderboard");

    for (i = 0; i < tabcontent.length; i++) {

      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className = "tablink active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
