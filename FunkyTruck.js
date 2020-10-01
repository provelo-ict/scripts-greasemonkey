// ==UserScript==
//@namespace https://www.provelo.org/
// @name     FunkyTruckProVelo
// @version  0.1.4
// @icon     https://www.provelo.org/favicon-32x32.png
// @downloadURL  https://raw.githubusercontent.com/provelo-ict/scripts-greasemonkey/master/FunkyTruck.js
// @updateURL https://raw.githubusercontent.com/provelo-ict/scripts-greasemonkey/master/FunkyTruck.js
// @run-at document-idle
// @description Shows wonderful trucks if a delivery is due for the Odoo activity
// @match    https://gestion.provelo.org/*
// @match    https://provelo-test.coopiteasy.be/*
// @grant    none
// ==/UserScript==


function modifImages() {
    var champsBooleens = document.getElementsByClassName("oe_list_field_cell oe_list_field_boolean    ")

    var x = 0;
    var fragmentid = window.location.hash.substr(1);
    if (fragmentid.match("model=resource.activity")){
        console.log("Loading truck images ⛟⛟ ");
        while (x < champsBooleens.length) {
            if ((champsBooleens[x].attributes["data-field"].nodeValue == "need_delivery") && (champsBooleens[x].childNodes[0].checked == true)) {
                champsBooleens[x].innerHTML = "<div class=\"fa fa-fw fa-truck fa-flip-horizontal\" style=\"color:#ADD8E6; font-size:xx-large\"></div>";
            }
            x = x + 1;
        }
    }
   setTimeout(modifImages,3000); //Pour se relancer toutes les 3 secondes

};



    modifImages();
