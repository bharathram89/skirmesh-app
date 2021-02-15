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
