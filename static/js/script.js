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


function update_cmd_args() {

    var cmd_arg_list = {
    "REGISTER": [
        {
        "value": "0x01",
        "text": "RED Team"
        },
        {
        "value": "02",
        "text": "BLUE Team"
        },
        {
        "value": "03",
        "text": "YELLOW Team"
        },
        {
        "value": "04",
        "text": "GREEN Team"
        },
        {
        "value": "05",
        "text": "PURPLE Team"
        },
    ],
    "SET LOCATION": [
        {
        "text":"KINGDOM",
        "value":"(10.6,69.3)"
        },
        {
        "text":"NORTH FIREBASE",
        "value":"(23,52)"
        },
        {
        "text":"MOSES TRAIL",
        "value":"(27.5,35.1)"
        },
        {
        "text":"NORTH SAM SITE",
        "value":"(32.4,69.6)"
        },
        {
        "text":"HALFBACK",
        "value":"(42,71.4)"
        },
        {
        "text":"RANGE",
        "value":"(45.1,60.6)"
        },
        {
        "text":"NORTH POND TRAIL",
        "value":"(47.7,44.3)"
        },
        {
        "text":"BAT HOUSE",
        "value":"(52.9,42.7)"
        },
        {
        "text":"BLACK THORN RAVINES",
        "value":"(57.7,22)"
        },
        {
        "text":"SAAB",
        "value":"(53.5,61.3)"
        },
        {
        "text":"RIGHT HOOK TRAIL",
        "value":"(52.7,84.6)"
        },
        {
        "text":"BARRIER WOODS",
        "value":"(63.4,52.8)"
        },
        {
        "text":"CANNIBAL VILLAGE",
        "value":"(64.3,14.9)"
        },
        {
        "text":"CUT THROAT TRAILS",
        "value":"(72.6,53.6)"
        },
        {
        "text":"TOWN",
        "value":"(65.3,64)"
        },
        {
        "text":"SOUTH BUNKER",
        "value":"(76.9,61.6)"
        },
        {
        "text":"AMMO DEPOT",
        "value":"(91.2,18)"
        },
        {
        "text":"THE LZ",
        "value":"(88.1,56.8)"
        },
        {
        "text":"BIG DIP",
        "value":"(96,55.1)"
        },
        {
        "text":"POND",
        "value":"(55.8,37.3)"
        }
    ]
    };

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
