var elPlayerTabs = document.getElementById('playernav').getElementsByTagName('a');
var elPlayerContent = [ document.getElementsByClassName('playerInfo'),
                        document.getElementsByClassName('kitInfo'),
                        document.getElementsByClassName('personalInfo') ]

console.log(elPlayerTabs);
console.log(elPlayerContent);

function showTab ( event, divToShow ){
    
    var target = event.target;
    var i;

    for ( i = 0; i < elPlayerContent.length; i++ ){
        elPlayerContent[i].style.display = "none"
    }

    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    divToShow.style.display = "block";
       
}

for ( var i = 0; i < elPlayerTabs.length; i++ ){
    console.log(elPlayerContent[i]);
    console.log(elPlayerTabs[i]);
    elPlayerTabs[i].addEventListener( 'click', function (event) {
        showTab(event, elPlayerContent[i])
    }, false );
}

/*
function show_table(evt, cityName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("leaderboard");

    for (i = 0; i < tabcontent.length; i++) {

      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className = "tablink active";
}
*/
// Get the element with id="defaultOpen" and click on it
document.getElementById("playerInfo").click();


