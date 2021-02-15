setInterval(

  function(){

  fetch('/pair_uid/get_uid',  {
                              method: "GET",
                              cache: "no-cache",
                             })
      .then(function (response) {
          return response.json();
      }).then(function (data) {

          if (data.uid) {

              var ele = document.getElementById('uidblock');

              ele.innerHTML  = data.uid;
              ele.setAttribute("value", data.uid);

          }
      });
    },

  1000); // Happen every 1 second (1000 milliseconds)



  function assign_uid(button) {

      var player = document.getElementById("players");
      var uid    = document.getElementById("uidblock");

      var data = {
                  'player'   : player.value,
                  'uid'      : uid.getAttribute("value"),
                  'button'   : button,
                 };

      uid.innerHTML = " ";

      fetch("/pair_uid/assign_uid", {
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
