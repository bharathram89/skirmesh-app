

function update_field() {

    fetch('/index/update',  {
                                method: "GET",
                                cache: "no-cache",
                               })
        .then(function (response) {
            return response.json();
        }).then(function (data) {

            for (var node in data) {

                var ele = document.getElementById(data[node].id);

                if (data[node].stable && ele){

                    ele.setAttribute("fill", data[node].color);
                    ele.setAttribute("opacity", "0.5");
                    ele.setAttribute("class", "owned");
                }
                else{
                    ele.setAttribute("fill", data[node].color);
                    ele.setAttribute("class", "beacon");
                }

            }
        });
  }


setInterval(update_field, 5000); // Happen every 5 seconds (5000 milliseconds)

update_field();
