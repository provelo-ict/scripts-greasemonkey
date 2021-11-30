// ==UserScript==
//@namespace https://www.provelo.org/
// @name     FunkyTruckProVelo
// @version  0.2
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
    var lignes = document.getElementsByClassName("o_data_row")
    var compteur = 0
    while (compteur < lignes.length) {
       if (lignes[compteur].lastChild.querySelectorAll('input[class="custom-control-input"]:checked').length > 0) { // C'est à dire si la dernière cellule de la ligne contient au moins une checkbox cochée.
           lignes[compteur].lastChild.innerHTML = "<div class=\"fa fa-fw fa-truck fa-flip-horizontal\" style=\"color:#ADD8E6; font-size:xx-large\"></div>"; //On met la dernière cellule de la colonne comme une livraison.
       }
         compteur = compteur + 1;
    };
}

function lancerLamodif(){
    var fragmentid = window.location.hash.substr(1);
    if (fragmentid.match("model=resource.activity")){
        console.log("Loading truck images ⛟⛟ ");
        modifImages();
        }
    setTimeout(lancerLamodif,3000); //Pour se relancer toutes les 3 secondes
};

lancerLamodif();
