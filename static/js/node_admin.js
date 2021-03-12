
function form_submit(button) {

    var data = {'button':button.value};

    // console.log(data)

    if (button.value == "Pause Game"){
        button.value = "Resume Game";
    }
    else if (button.value == "Resume Game") {
        button.value = "Pause Game";
    }

    var safe = true;

    if (button.value === "Start Game") {
        safe = confirm("!! WARNING !!\nStarting a new game will\nRESET THE FIELD and ALL SCORES!");
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



function unlock(ele) {

    var child;

    child = ele.getElementsByTagName("select")[0];
    child.disabled = !child.disabled;

}



function update_location_tree(locations) {

    var i, j, trees, taken, new_, val;

    taken = [];
    trees = document.getElementsByClassName("FF");

    for (i = 0; i < trees.length; i++) {

        taken.push(trees[i].value);

    }

    for (j = 0; j < trees.length; j++) {

        val = trees[j].value;
        new_ = "<option/>";

        for (i = 0; i < locations.length; i++) {

            if (!taken.includes(locations[i].text)) {

                new_ += "<option>";
                new_ += locations[i].text + "</option>";

            }

            if (locations[i].text == val) {

                new_ += "<option selected>";
                new_ += locations[i].text + "</option>";

            }
        }

        trees[j].innerHTML = new_;

    }
}



function enable_broadcast(checkbox) {

    var i;

    eles = document.getElementsByClassName("broadcast");

    for (i = 0; i < eles.length; i++) {

      if (checkbox.checked) {

          eles[i].classList.add("enabled");

          }

      else {

          eles[i].classList.remove("enabled");

          }

    }

}



function update_param(ele) {

    var node, i, broadcast, data;

    node = ele.parentNode.parentNode.id;
    broadcast = document.getElementById("do_broadcast").checked;

    if (broadcast) {

        eles = document.getElementsByClassName(ele.className);

        for (i = 0; i < eles.length; i++) {

              eles[i].value = ele.value;

              data = {
                      'dest' : eles[i].parentNode.parentNode.id,
                      'arg'  : eles[i].value,
                      'cmd'  : eles[i].className,
                      'bcst' : true,
                     };

              transmit_param_data(data);

        }

        data.arg = ele.value;
        data.cmd = ele.className;
        broadcast_data(data);

    }

    else {

        data = {
                'dest' : ele.parentNode.parentNode.id,
                'arg'  : ele.value,
                'cmd'  : ele.className,
                'bcst' : false,
               };

        transmit_param_data(data);

    }

}



function transmit_param_data(data) {

    fetch("/node_admin/set_param", {
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



function broadcast_data(data) {

    fetch("/node_admin/send_broadcast", {
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



function update_config(ele) {

    var node;

    node = ele.parentNode.parentNode.id;

    var data = {
                'dest' : ele.parentNode.parentNode.id,
                'conf' : ele.value,
               };

    switch(data.conf) {

          // QUERY, PAIR_UID, CAPTURE, MEDIC, BOMB
          case '02': case '03': case '0E': case 'BB':

              transmit_config_data(data);
              break;

          // REGISTER, SET TEAM
          case '01': case '04':

              data.team = ele.parentNode.parentNode.getElementsByClassName("04")[0].value;
              if (data.team){

                  transmit_config_data(data);
              }

              break;

          case '0A':
              ele.parentNode.parentNode.getElementsByClassName("04")[0].value = "";
              transmit_config_data(data);
              break;
          }

}



function transmit_config_data(data) {

    fetch("/node_admin/set_config", {
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



function update_team(ele) {

    var node, text;

    node = ele.parentNode.parentNode.id;
    conf = ele.parentNode.parentNode.getElementsByClassName("00")[0].value;

    var data = {
                'dest' : ele.parentNode.parentNode.id,
                'team' : ele.value,
               };

    if (data.team) {

        switch(conf) {
              // ONLY SET TEAM IF IN CAPTURE MODE
              case '0A':

                  text = "!! WARNING !!\nContinuing to set the team\n";
                  text += "will turnover control of this objective!";

                  var safe = confirm(text);

                  if (safe) { transmit_team_data(data); }
                  else {location.reload();}
                  break;

              case '01':
                  data.conf = conf;
                  transmit_config_data(data);
                  break;
              }

     }

}



function transmit_team_data(data) {

    fetch("/node_admin/set_team", {
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



function update_controller(ele) {

    var node, cmd, arg, data, broadcast;

    broadcast = document.getElementById("do_broadcast").checked;

    if (!ele.className || ele.className == "9A") {
        broadcast = false;
    }

    if (broadcast) {

        eles = document.getElementsByClassName(ele.className);

        for (i = 0; i < eles.length; i++) {

            node = eles[i].parentNode.parentNode.id;
            cmd  = eles[i].className;

            eles[i].value = ele.value;
            arg  = eles[i].value;

            data = {
                    'dest' : node,
                    'cmd'  : cmd,
                    'arg'  : arg,
                   };

            update_controller_data(data);
        }
    }
    else {

        node = ele.parentNode.parentNode.id;
        cmd  = ele.className;
        arg  = ele.value;

        data = {
                'dest' : node,
                'cmd'  : cmd,
                'arg'  : arg,
               };

        update_controller_data(data);

    }

}



function update_controller_data(data) {

    fetch("/node_admin/set_controller_data", {
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
