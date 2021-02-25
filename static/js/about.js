function showRFIDband(evt) {
  var tooltip = document.getElementById("band");
  tooltip.style.display = "";
  tooltip.style.left = evt.pageX - 75 + 'px';
  tooltip.style.top = evt.pageY - 75 + 'px';
}

function hideRFIDband() {
  var tooltip = document.getElementById("band");
  tooltip.style.display = "none";
}
