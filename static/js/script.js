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
    var cmd_txt = cmd_sel.options[cmd_sel.selectedIndex].text;
    var cmd_val = cmd_sel.value;

    var new_options = "";

    if (cmd_txt in cmd_arg_list) {

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
