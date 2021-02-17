// var paths = document.getElementsByTagName("path");
//
//
// var dragged;
//
// /* events fired on the draggable target */
// document.addEventListener("drag", function( event ) {
//   event.dataTransfer.setDragImage(event.target, 10,10);
// }, false);
//
// document.addEventListener("dragstart", function( event ) {
//   // store a ref. on the dragged elem
//   dragged = event.target;
//   // make it half transparent
//   event.target.style.opacity = 0.5;
//   event.dataTransfer.setData("text", event.target.src);
// }, false);
//
// document.addEventListener("dragend", function( event ) {
//   // reset the transparency
//   event.target.style.opacity = "";
//
// }, false);
//
// /* events fired on the drop targets */
// document.addEventListener("dragover", function( event ) {
//   // prevent default to allow drop
//   event.preventDefault();
//
// }, false);
//
// document.addEventListener("dragenter", function( event ) {
//   // highlight potential drop target when the draggable element enters it
//
//   if ( event.target.tagName == "path" ) {
//       event.target.style.opacity = 0.5;
//       event.target.style.fill = "#800000";
//       event.target.style.transform = "scale(1.1)";
//   }
//
// }, false);
//
// document.addEventListener("dragleave", function( event ) {
//   // reset background of potential drop target when the draggable element leaves it
//   if ( event.target.tagName == "path" ) {
//       event.target.style = "";
//   }
//
// }, false);
//
// document.addEventListener("drop", function( event ) {
//   // prevent default action (open as link for some elements)
//   event.preventDefault();
//   // move dragged elem to the selected drop target
//   if ( event.target.tagName == "path" ) {
//       event.target.style = "";
//       event.target.style.transform = "scale(1.0)";
//       event.target.style.fill = "#img1";
//       // Put this back when you're ready to get rid of it
//       // dragged.parentNode.removeChild( dragged );
//       // event.target.appendChild( dragged );
//
//       // Somewhere in here - just set the background to a Beautiful
//       // picture of a node (or something) --- also need to set the name
//       // or something besides the ID (it's taken) to let it know that
//       // it's been assigned... may set the class to "assigned" - or
//       // something else that seems logical.
//   }
//
// }, false);
//


function update_cmd_args(cmd_arg_list) {

    var cmd_sel = document.getElementById("conf");
    var cmd_txt = cmd_sel.options[cmd_sel.selectedIndex].text.toUpperCase();
    var cmd_val = cmd_sel.value;

    var nodes = Array.from(document.getElementById("dest").options).map(elem => elem.text);
    var new_options = "";

    // Look for the argument in the index unless it's a timer, then just match
    if ((cmd_txt in cmd_arg_list) || (cmd_txt.indexOf('TIME') > -1)){

        // Set all time indexes to the timer list
        if (cmd_txt.indexOf('TIME') > -1) {
          cmd_txt = 'TIME DATA';
        }
        // Set scale values to the time_to_points data
        if (cmd_txt.indexOf('SCALE') > -1) {
          cmd_txt = 'SCALE DATA';
        }

        for (var i = 0; i < cmd_arg_list[cmd_txt.toUpperCase()].length; i++) {

                if (!nodes.includes(cmd_arg_list[cmd_txt.toUpperCase()][i].text)) {

                  new_options += "<option value=" + cmd_arg_list[cmd_txt.toUpperCase()][i].value + "> ";
                  new_options += cmd_arg_list[cmd_txt.toUpperCase()][i].text + "</option>";
                }
        }

        document.getElementById("args").innerHTML = new_options;
    }
    else {
        document.getElementById("args").innerHTML = "<option value='00'>--select--</option>";
    }
}


function update_cmd_opts() {

    var dest = document.getElementById("dest");
    var option = document.getElementById("set_loc");

    if (dest.value == "FFFF") {
        option.style.display = "none";
    }
    else {
        option.style.display = "";
    }

}


function form_submit(button) {

    var dest = document.getElementById("dest");
    var conf = document.getElementById("conf");
    var args = document.getElementById("args");

    var data = {
                'args'     : args.value,
                'dest'     : dest.value,
                'conf'     : conf.value,
                'button'   : button,
                'location' : args.options[args.selectedIndex].text,
               };

    // console.log(data)

    var safe = true;

    if (button === "Start Game") {
        safe = confirm("WARNING: This will REMOVE ALL SCORES from previous games!");
    }

    if (safe) {

        fetch("/node_admin/issue_command", {
          method: "POST",
          body: JSON.stringify(data),
          cache: "no-cache",
        })
          .then(function (response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status code: ' + response.status);
              return;
            }
            response.json().then(function (data) {
              // console.log(data);
            });
          })
          .catch(function (error) {
            console.log("Fetch error: " + error);
          });
    }
}




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
