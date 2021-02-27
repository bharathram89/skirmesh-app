
function show_tooltip() {

    var i, tooltip, paths;

    paths = document.getElementsByTagName("path");
    tooltip = document.getElementById("tooltip");

    for (i = 0; i < paths.length; i++) {

        paths[i].addEventListener("mousemove", e => {

            tooltip.innerHTML = e.target.id;
            tooltip.style.display = "block";
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY + 10 + 'px';

      });

      paths[i].addEventListener("mouseout", e => {

            tooltip.innerHTML = e.target.id;
            tooltip.style.display = "none";

      });
    }
}


show_tooltip();
