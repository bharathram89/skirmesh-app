function search(event) {

    var filter, rows, id, uid, code, ts, i, t, c, eles;

    filter = event.target.value.toUpperCase();

    tables = document.querySelectorAll("#table tbody");

    for (t = 0; t < tables.length; t++){

        rows = tables[t].rows;

        for (i = 0; i < rows.length; i++) {

            elements = [];

            for (c = 0; c < rows[i].cells.length; c++){

                elements.push(rows[i].cells[c].textContent.toUpperCase().indexOf(filter));

            }

            if (elements.some(el => el > -1)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }

    }

}


function update_cmd_args(cmd_arg_list) {

    var cmd_sel = document.getElementById("conf");
    var cmd_txt = cmd_sel.options[cmd_sel.selectedIndex].text.toUpperCase();
    var cmd_val = cmd_sel.value;

    var new_options = "";

    // Look for the argument in the index unless it's a timer, then just match
    if ((cmd_txt in cmd_arg_list) || (cmd_txt.indexOf('TIME') > -1)){

        // Set all time indexes to the timer list
        if (cmd_txt.indexOf('TIME') > -1) {
          cmd_txt = 'TIME DATA';
        }

        for (var i = 0; i < cmd_arg_list[cmd_txt.toUpperCase()].length; i++) {

          new_options += "<option value=" + cmd_arg_list[cmd_txt.toUpperCase()][i].value + "> ";
          new_options += cmd_arg_list[cmd_txt.toUpperCase()][i].text + "</option>";
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

function get_uid(button) {

    var uid_block = document.getElementById("uidblock");
    console.log("fuuuuuuuck");

    fetch("/user_reg/get_uid").then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            uid_block.innerHTML = data.uid;
            uid_block.value = data.uid;
        });
    });
}

function assign_uid(button) {

    var player = document.getElementById("players");
    var uid    = document.getElementById("uidblock");

    var data = {
                'player'   : player.value,
                'uid'      : uid.innerHTML,
                'button'   : button,
               };

    // console.log(data)

    fetch("/user_reg/assign_uid", {
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-cache",
    })
      .then(function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status code: ' + response.status);
          return;
        }
      })
      .catch(function (error) {
        console.log("Fetch error: " + error);
      });
}
// setInterval(
//
//   function(){                            //Periodically
//
//   fetch('/index/is_change',  {
        //   method: "GET",
        //   cache: "no-cache",
        // })
//       .then(function (response) {
//           return response.json();
//       }).then(function (data) {
//
//           for (var node in data) {
//
//             console.log(node);
//             console.log(data[node].color);
//             var ele = document.getElementById("beacon_" + node);
//
//             if (data[node].stable){
//               ele.style.border = "1vw dashed " + data[node].color
//               ele.style.background = data[node].color
//             }
//             else{
//               ele.style.border = "1vw double " + data[node].color
//               ele.style.background = ""
//             }
//
//           }
//       });
//     },
//   2000);
