// ==UserScript==
//@namespace https://www.provelo.org/
// @run-at context-menu
// @name     FunkyTruckProVelo
// @version  0.1
// @match    https://gestion.provelo.org/*
// @grant    none
// ==/UserScript==


function modifImages() {
    var champsBooleens = document.getElementsByClassName("oe_list_field_cell oe_list_field_boolean    ")

    var x = 0;
    while (x < champsBooleens.length) {
        if ((champsBooleens[x].attributes["data-field"].nodeValue == "need_delivery") && (champsBooleens[x].childNodes[0].checked == true)) {
            champsBooleens[x].innerHTML = "<image src=\"https://signature.provelo.org/signature/images/camionnette.png\" height=12px>";
        }
        x = x + 1;
    }
   setTimeout(modifImages,3000); //Pour se relancer toutes les 3 secondes
   console.log("Loading truck images ⛟⛟ ");
};



//setTimeout(modifImages,10000) //--> solution de base, on fait le travail une fois,  tout une fois - 10 seconde après le load

modifImages();
