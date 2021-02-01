var paths = document.getElementsByTagName("path");
/*
// Don't know if these are doing anything anymore...
function allowDrop(event, elem ) {
  event.preventDefault();
  elem.opacity = '0.5';
  elem.fill = 'red';
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event, elem) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));

}


for (i = 0; i < paths.length; i++) {

    paths[i].setAttribute("ondragover", "allowDrop(event, this)");
    paths[i].setAttribute("ondrop", "drop(event, this)");

}
*/

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function( event ) {
  event.dataTransfer.setDragImage(event.target, 10,10);
}, false);

document.addEventListener("dragstart", function( event ) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = 0.5;
  event.dataTransfer.setData("text", event.target.src);
}, false);

document.addEventListener("dragend", function( event ) {
  // reset the transparency
  event.target.style.opacity = "";

}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function( event ) {
  // prevent default to allow drop
  event.preventDefault();

}, false);

document.addEventListener("dragenter", function( event ) {
  // highlight potential drop target when the draggable element enters it

  if ( event.target.tagName == "path" ) {
      event.target.style.opacity = 0.5;
      event.target.style.fill = "#800000";
      event.target.style.transform = "scale(1.1)";
  }

}, false);

document.addEventListener("dragleave", function( event ) {
  // reset background of potential drop target when the draggable element leaves it
  if ( event.target.tagName == "path" ) {
      event.target.style = "";
  }

}, false);

document.addEventListener("drop", function( event ) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if ( event.target.tagName == "path" ) {
      event.target.style = "";
      event.target.style.transform = "scale(1.0)";
      event.target.style.fill = "#img1"; 
      // Put this back when you're ready to get rid of it
      // dragged.parentNode.removeChild( dragged );
      // event.target.appendChild( dragged );

      // Somewhere in here - just set the background to a Beautiful
      // picture of a node (or something) --- also need to set the name
      // or something besides the ID (it's taken) to let it know that
      // it's been assigned... may set the class to "assigned" - or
      // something else that seems logical.
  }

}, false);



// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function show_table(event, id_name) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("node_admin");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className = "tablink";
    }

    document.getElementById(id_name).style.display = "";
    event.currentTarget.className = "tablink active";
}
