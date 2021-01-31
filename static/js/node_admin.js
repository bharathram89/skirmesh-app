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

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
