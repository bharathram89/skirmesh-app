var paths = document.getElementsByTagName("path");

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
console.log(paths);
for (i = 0; i < paths.length; i++){
    paths[i].setAttribute("ondragover", "allowDrop(event, this)"); 
    paths[i].setAttribute("ondrop", "drop(event, this)"); 
    
}
function show_table(evt, cityName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("node_control");

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


function allowDrop(ev, elem ) {
  ev.preventDefault();
  elem.opacity = '0.5';
  elem.fill = 'red';
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, elem) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

}
