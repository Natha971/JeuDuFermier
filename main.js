// Récupération nombre de champs
let champCarotte = document.getElementById("champCarotte");
let champAvocat = document.getElementById("champAvocat");
let champBio = document.getElementById("champBio");
// https://stackoverflow.com/questions/51120813/addeventlistener-not-working-more-than-once-with-a-button
// Récupérer nombre légume
let carotte = document.getElementById("carotte");
let avocat = document.getElementById("avocat");
let produitBio = document.getElementById("produitBio");

// Récupérer image 
let imageCarotte = document.getElementById("imageCarotte");
let imageAvocat = document.getElementById("imageAvocat");
imageAvocat.style.visibility = "hidden";
let imageBio = document.getElementById("imageBio");
imageBio.style.visibility = "hidden";

let arrosoir = document.getElementById("arrosoir");
arrosoir.innerHTML = '<img src="img/arrosoir.png" alt="" width="150"></img>';
let engrais = document.getElementById("engrais");
engrais.innerHTML = '<img src="img/engrais.png" alt="" width="150"></img>';
let tuyauAutomatique = document.getElementById("tuyau_automatique");
tuyauAutomatique.innerHTML = '<img src="img/tuyau_automatique.png" alt="" width="150"></img>';

let arrosoirPrix = document.getElementById("arrosoirPrix");
arrosoirPrix.innerHTML = '<button type="button" class="btn btn-success" id="acheterChampBio"> Arroisoir 10$ </button>';
let engraisPrix = document.getElementById("engraisPrix");
engraisPrix.innerHTML = '<button type="button" class="btn btn-success" id="acheterChampBio"> Engrais 15$ </button>';
let tuyauAutomatiquePrix = document.getElementById("tuyau_automatiquePrix");
tuyauAutomatiquePrix.innerHTML = '<button type="button" class="btn btn-success" id="acheterChampBio">Tuyau automatique 35$ </button>';

let openMagasin = document.getElementById("openMagasin");
let openMine = document.getElementById("openMine");

let divMine = document.getElementById("mine");
divMine.classList.toggle("hide");
/* divMine.style.visibility = "hidden"; */

let acheterArrosoir = document.getElementById("acheterArrosoir");
let acheterEngrais = document.getElementById("acheterEngrais");
let acheterTuyauAutomatique = document.getElementById("acheterTuyauAutomatique");
let accessoires = document.getElementById("accessoires");
accessoires.innerHTML = "Vous n'avez pas encore d'accessoires.";
accessoires.style.color = "red";

// Rocher
let rocher1 = document.getElementById("rocher1");
rocher1.innerHTML = '<img src="img/!Rocher_intact.png" alt="" width="70"></img>';
let rocher2 = document.getElementById("rocher2");
rocher2.innerHTML = '<img  src="img/!Rocher_intact.png" alt="" width="70"></img>';
let rocher3 = document.getElementById("rocher3");
rocher3.innerHTML = '<img src="img/!Rocher_intact.png" alt="" width="70"></img>';
let objet = document.getElementById("objet");

// Affichage dans l'html
let argent = document.getElementById("argent");
let rentabilite = document.getElementById("rentabilite");
let r = 0;
rentabilite.innerHTML = "Rentabilité par secondes : " + r + " $";
let relance = document.getElementById("relance");
relance.innerHTML = "Casser un rocher";

let tentativeCasser = 5;

// Action button
let clickVendre = document.getElementById("vendre");
let acheterChampCarotte = document.getElementById("acheterChampCarotte");
let acheterChampAvocat = document.getElementById("acheterChampAvocat");
let acheterChampBio = document.getElementById("acheterChampBio");

let videoFinal = document.getElementById("videoFinal");
let gagne = document.getElementById("alertGagne");
gagne.style.visibility = "hidden";

let objetPossession = [];
let accessoirePossession = [];
// --------------------------------------- INITIALISATION  VARIABLE ---------------------------------------
// Au début argent à 0
let nombreArgent = 0;
argent.innerHTML = "Argent : " + nombreArgent + " $";

// Au début nombre de carottes à 0
let nombreCarotte = 0;
let nombrechampCarotte = 1;
champCarotte.innerHTML = "Nombre de champs de carottes : " + nombrechampCarotte;

let nombreAvocat = 0;
let nombrechampAvocat = 0;
champAvocat.innerHTML = "Nombre de champs d'avocat : " + nombrechampAvocat;

let nombreBio = 0;
let nombrechampBio = 0;
champBio.innerHTML = "Nombre de champs bio : " + nombrechampBio;

let nombreClickImage = 0;
// --------------------------------------- PRODUCTION CAROTTE ---------------------------------------
let productionCarotte = function() {
    if (nombreArgent >= 1000) {
        //gagne.innerHTML = "Bravo tu as gagné !"
    } else {
        nombreCarotte += nombrechampCarotte;
        carotte.innerHTML = "Nombre de carottes : " + nombreCarotte;
        setTimeout(function() {
            cloneCarotte(nombrechampCarotte);
            productionCarotte();
        }, 1000);

        // cacher le bouton acheter 
        if (nombreArgent > 10) {
            acheterChampCarotte.style.visibility = "visible";
        } else {
            acheterChampCarotte.style.visibility = "hidden";
        }

        if (nombreArgent > 20) {
            acheterChampAvocat.style.visibility = "visible";
        } else {
            acheterChampAvocat.style.visibility = "hidden";
        }

        if (nombreArgent > 5) {
            acheterChampBio.style.visibility = "visible";
        } else {
            acheterChampBio.style.visibility = "hidden";
        }
    }

}
productionCarotte();

// --------------------------------------- ACHETER CHAMP CAROTTE ---------------------------------------
acheterChampCarotte.addEventListener("click", acheterChampsCarottes)

function acheterChampsCarottes() {
    nombrechampCarotte++;
    nombreArgent -= 10;
    argent.innerHTML = "Argent : " + nombreArgent + " $";
    champCarotte.innerHTML = "Nombre de champs de carottes : " + nombrechampCarotte;
}

// --------------------------------------- ACHETER CHAMP AVOCAT ---------------------------------------

acheterChampAvocat.addEventListener("click", acheterChampsAvocat)

function acheterChampsAvocat() {
    nombrechampAvocat++;
    nombreArgent -= 20;
    argent.innerHTML = "Argent : " + nombreArgent + " $";
    champAvocat.innerHTML = "Nombre de champs d'avocat : " + nombrechampAvocat;
    imageAvocat.style.visibility = "visible";
    champAvocat.style.visibility = "visible";
    document.getElementById("boxAvocat").style.visibility = "visible";
    // Rendre visible ne nombre d'avocat
}

// --------------------------------------- ACHETER CHAMP BIO ---------------------------------------

acheterChampBio.addEventListener("click", acheterChampsBIO)

function acheterChampsBIO() {
    nombrechampBio++;
    nombreArgent -= 5;
    argent.innerHTML = "Argent : " + nombreArgent + " $";
    champBio.innerHTML = "Nombre de champs bio : " + nombrechampBio
    imageBio.style.visibility = "visible";
    champBio.style.visibility = "visible";
    document.getElementById("boxBio").style.visibility = "visible";
    // Rendre visible ne nombre d'avocat
}


// --------------------------------------- PRODUCTON AVOCAT ---------------------------------------
let productionAvocat = function() {
    if (nombreArgent >= 1000) {
        gagne.click();
        videoFinal.innerHTML = '<video id="videoFinal" width="320" height="240" controls autoplay="true"><source src="img/VICTOIRE.mov" type="video/mp4"></video>'
            //gagne.innerHTML = "Bravo tu as gagné !"
    } else {
        nombreAvocat += nombrechampAvocat;
        avocat.innerHTML = "Nombre d'avocat : " + nombreAvocat;
        setTimeout(function() {
            if (nombreAvocat != 0) {
                cloneAvocat(nombrechampAvocat);
            }
            productionAvocat();
        }, 3000);
    }
}

productionAvocat()

// --------------------------------------- PRODUCTON BIO ---------------------------------------
let productionBio = function() {
    if (nombreArgent >= 1000) {
        gagne.click();
        //gagne.innerHTML = "Bravo tu as gagné !"
    } else {
        nombreBio += nombrechampBio;
        produitBio.innerHTML = "Nombre de produits bio : " + nombreBio;
        setTimeout(function() {
            if (nombreBio != 0) {
                cloneBio(nombrechampBio);
            }
            productionBio();
        }, 2000);
    }
}

productionBio()


// --------------------------------------- VENDRE ---------------------------------------
clickVendre.addEventListener("click", vendreChamp)
    // Le button vendre remet le nbr de carotte à 0
function vendreChamp() {
    nombreArgent += (nombreCarotte * 0.5);
    nombreArgent += (nombreAvocat * 4);
    nombreArgent += (nombreBio * 15);
    argent.innerHTML = "Argent : " + nombreArgent + " $";
    nombreCarotte = 0;
    nombreAvocat = 0;
    r = 0;
    carotte.innerHTML = nombreCarotte;
    avocat.innerHTML = nombreAvocat;

    resetCarotte();
    resetAvocat();
}

// --------------------------------------- DUPLICATION IMAGE ---------------------------------------
function cloneCarotte(nombre) {
    for (let i = 0; i < nombre; i++) {
        let list = document.getElementById("list");
        let clonedItem = imageCarotte.cloneNode(true);
        list.appendChild(clonedItem);
    }
}

function cloneAvocat(nombre) {
    for (let i = 0; i < nombre; i++) {
        let list2 = document.getElementById("list2");
        let clonedItem = imageAvocat.cloneNode(true);
        list2.appendChild(clonedItem);
    }
}

function cloneBio(nombre) {
    for (let i = 0; i < nombre; i++) {
        let list2 = document.getElementById("list3");
        let clonedItem = imageBio.cloneNode(true);
        list2.appendChild(clonedItem);
    }
}

// --------------------------------------- RESET DUPLICATION IMAGE ---------------------------------------
function resetCarotte() {
    let list = document.getElementById("list");
    list.innerHTML = '';
}

function resetAvocat() {
    let list = document.getElementById("list2");
    list.innerHTML = '';
}

function resetBio() {
    let list = document.getElementById("list3");
    list.innerHTML = '';
}

// -------------------------------------- RENTABILITE PAR SECONDE -------------------------------------------------------------------
function rentabiliteChamp() {
    if (nombreArgent >= 1000) {
        gagne.click();
        //gagne.innerHTML = "Bravo tu as gagné !"
    } else {
        r += nombrechampCarotte * 0.5 + nombrechampAvocat * 4 + nombrechampBio * 15
        rentabilite.innerHTML = "Rentabilité par secondes : " + r + " $";
        setTimeout(function() {
            rentabiliteChamp();
        }, 1000);
    }

}
rentabiliteChamp()

// ------------------------------------------------ Button Mine & Button Magesin -------------------------------------------------------

openMine.addEventListener("click", () => {
    if (nombreArgent >= 100) {
        divMine.style.visibility = "visible"
    } else {
        alert("Vous n'avez pas assez d'argent")
    }
})

// --------------------------------------------------- EVENEMENT ROCHER --------------------------------------------------
rocher1.addEventListener("click", () => {
    changerImage(0)
});
rocher2.addEventListener("click", () => {
    changerImage(1)
});
rocher3.addEventListener("click", () => {
    changerImage(2)
});

let rochers = [rocher1, rocher2, rocher3];

function changerImage(numeroRocher) {
    nombreClickImage++;
    if (nombreClickImage == 1) {
        rochers[numeroRocher].innerHTML = '<img src="img/!Rocher_fissure.png" alt="" width="70"></img>';
    } else if (nombreClickImage == 2) {

        let choix = choixAleatoireGain();
        rochers[numeroRocher].innerHTML = choix[0];
        rochers[numeroRocher].style.width = '200px';

        rochers[numeroRocher].style.visibility = "hidden";
        rochers.splice(numeroRocher, 1);

        rochers[0].innerHTML = choix[1];
        rochers[1].innerHTML = choix[2];

        setTimeout(afficherObjet, 0);
        relancer(5)
    }
}

function choixAleatoireGain() {
    let gain = [];
    let choix = ['<img src="img/Platinum.png" alt="" width="70">', '<img src="img/Diamant.png" alt="" width="70">',
        '<img src="img/Or.png" alt="" width="70">', '<img src="img/Silver.png" alt="" width="70">'
    ]

    let choixString = ["platinium", "diamant", "or", "silver"];
    let c = Math.floor(Math.random() * choix.length);

    gain.push(choix[c])
    objetPossession.push(choixString[c])

    choix.splice(c, 1);

    c = Math.floor(Math.random() * choix.length);

    gain.push(choix[c]);

    choix.splice(c, 1); // 2nd parameter means remove one item only

    c = Math.floor(Math.random() * choix.length);

    gain.push(choix[c]);
    return gain;
}

function reinitialisation() {
    rocher1.style.visibility = "visible";
    rocher1.innerHTML = '<img src="img/!Rocher_intact.png" alt="" width="70"></img>';
    rocher2.style.visibility = "visible";
    rocher2.innerHTML = '<img src="img/!Rocher_intact.png" alt="" width="70"></img>';
    rocher3.style.visibility = "visible";
    rocher3.innerHTML = '<img src="img/!Rocher_intact.png" alt="" width="70"></img>';
}


function relancer(secondes) {
    if (secondes > 0) {
        setTimeout(() => {
            secondes--
            relance.innerHTML = "Vous pourrez rejouer dans " + secondes;
            relance.style.color = "red";
            relancer(secondes);

        }, 1000)
    } else {
        reinitialisation();
        nombreClickImage = 0;
        rochers = [rocher1, rocher2, rocher3];
        relance.innerHTML = "Casser un rocher";
        relance.style.color = "black";
    }
}

function afficherObjet() {
    objet.innerHTML = "";
    for (let i = 0; i < objetPossession.length; i++) {
        var imagem = document.createElement("img");
        if (objetPossession[i] == "or") {
            imagem.src = "img/Or.png";
            imagem.width = "70";
        } else if (objetPossession[i] == "platinium") {
            imagem.src = "img/Platinum.png";
            imagem.width = "70";
        } else if (objetPossession[i] == "silver") {
            imagem.src = "img/Silver.png";
            imagem.width = "70";
        } else {
            imagem.src = "img/Diamant.png";
            imagem.width = "70";
        }
        objet.appendChild(imagem);
    }
}

// --------------------------------------------------- ACESSOIRES --------------------------------------------------

acheterArrosoir.addEventListener("click", () => {
    acheterAccessoire("arrosoir");
});

acheterEngrais.addEventListener("click", () => {
    acheterAccessoire("engrais");
});

acheterTuyauAutomatique.addEventListener("click", () => {
    acheterAccessoire("tuyauAutomatique");
});

function acheterAccessoire(accesoire) {
    if (nombreArgent < 10) {
        alert("Vous n'avez pas assez d'argent")
    } else if (nombreArgent >= 10 && nombreArgent < 15) {
        if (accesoire == "arrosoir") {
            nombreArgent -= 10;
            argent.innerHTML = "Argent : " + nombreArgent + " $";
            accessoirePossession.push("arrosoir");
        } else {
            alert("Vous n'avez pas assez d'argent")
        }
    } else if (nombreArgent >= 15 && nombreArgent < 35) {
        if (accesoire == "arrosoir") {
            nombreArgent -= 10;
            argent.innerHTML = "Argent : " + nombreArgent + " $";
            accessoirePossession.push("arrosoir");
        } else if (accesoire == "engrais") {
            nombreArgent -= 15;
            argent.innerHTML = "Argent : " + nombreArgent + " $";
            accessoirePossession.push("engrais");
        } else {
            alert("Vous n'avez pas assez d'argent")
        }
    } else if (nombreArgent >= 35) {
        if (accesoire == "arrosoir") {
            nombreArgent -= 10;
            argent.innerHTML = "Argent : " + nombreArgent + " $";
            accessoirePossession.push("arrosoir");
        } else if (accesoire == "engrais") {
            nombreArgent -= 15;
            argent.innerHTML = "Argent : " + nombreArgent + " $";
            accessoirePossession.push("engrais");
        } else if (accesoire == "tuyauAutomatique") {
            nombreArgent -= 35;
            argent.innerHTML = "Argent : " + nombreArgent + " $";
            accessoirePossession.push("tuyauAutomatique");
        }
    } else {
        alert("Vous n'avez pas assez d'argent")
    }

    remplirAccessoire();
}

function remplirAccessoire() {

    accessoires.innerHTML = ""; // clear images

    for (let i = 0; i < accessoirePossession.length; i++) {
        // Create a div parent
        let div = document.createElement("div");
        let idDiv = "div" + i;
        div.setAttribute("id", idDiv);
        // create a divPopup qui va contenir le popup
        let divPopup = document.createElement("div");
        divPopup.innerHTML = '<span class="popuptext">Où voulez vous appliquer votre accesoire ?<button id="choixCarotte' + i + '">Champs de carottes</button> <button id="choixAvocat' + i + '">Champs d avocat</button><button id="choixBio' + i + '">Champs de produit bio</button></span>'

        divPopup.className = "popup";
        let idImage = "image" + i;
        divPopup.setAttribute("id", idImage);

        let imagem = document.createElement("img");
        //imagem.setAttribute("id", idImage)
        if (accessoirePossession[i] == "arrosoir") {
            imagem.src = "img/arrosoir.png";
            imagem.width = "70";
            imagem.addEventListener("click", () => {
                actionImage(i);
                //myFunction2("arrosoir");
            })
        } else if (accessoirePossession[i] == "engrais") {
            imagem.src = "img/engrais.png";
            imagem.width = "70";
            imagem.addEventListener("click", () => {
                //myFunction2("engrais");
                actionImage(i);
            })
        } else if (accessoirePossession[i] == "tuyauAutomatique") {
            imagem.src = "img/tuyau_automatique.png";
            imagem.width = "70";
            imagem.addEventListener("click", () => {
                actionImage(i);
            })
        }

        // Create a span
        let span = document.createElement("span");
        span.setAttribute("id", "span" + i)

        div.appendChild(divPopup);
        div.appendChild(span);
        div.appendChild(imagem);


        console.log(div);
        accessoires.appendChild(div);
    }

}

function actionImage(numberImage) {
    let idPopup = "image" + numberImage
    let popup = document.getElementById(idPopup);
    popup.childNodes[0].classList.toggle("show");
    let choixCarotte = document.getElementById("choixCarotte" + numberImage);
    let choixAvocat = document.getElementById("choixAvocat" + numberImage);
    let choixBio = document.getElementById("choixBio" + numberImage);


    choixCarotte.addEventListener("click", () => {
        popup.childNodes[0].classList.toggle("show");
        actionAccessoire("carotte", numberImage);

    });

    choixAvocat.addEventListener("click", () => {
        popup.childNodes[0].classList.toggle("show");
        actionAccessoire("avocat", numberImage);
    });

    choixBio.addEventListener("click", () => {
        popup.childNodes[0].classList.toggle("show");
        actionAccessoire("bio", numberImage);
    });

    /*let number = Array(accessoires.childNodes.length).fill().map((element, index) => index)
    for (let i = 0; i < accessoires.childNodes.length; i++) {
        console.log(accessoires.childNodes[i]);
        //accessoires.childNodes[i].addEventListener(c)
    }*/
}

function actionAccessoire(produit, numberImage) {
    if (produit == "carotte") {
        nombrechampCarotte *= 2;
    } else if (produit == "avocat") {
        nombrechampAvocat *= 2;
    } else if (produit == "bio") {
        nombrechampBio *= 2;
    }
    TimeLeft(5, produit, numberImage);
}


function TimeLeft(secondes, produit, numberImage) {
    let span = document.getElementById("span" + numberImage);
    span.innerHTML = "Il vous reste " + secondes
    secondes--
    if (secondes < 0) {
        if (produit == "carotte") {
            nombrechampCarotte /= 2;
        } else if (produit == "avocat") {
            nombrechampAvocat /= 2;
        } else if (produit == "bio") {
            nombrechampBio /= 2;
        }
        console.log(numberImage);
        let divRemove = "div" + numberImage;
        console.log(divRemove);
        divRemove = document.getElementById(divRemove);
        console.log(divRemove);
        removeAccessoire(divRemove);
        accessoirePossession.splice(numberImage, 1)
    } else {
        setTimeout(() => {
            TimeLeft(secondes, produit, numberImage)
        }, 1000)
    }
}

function removeAccessoire(child) {
    accessoires.removeChild(child);
}


// --------------------------- CODE MODAL PRIS SUR INTERNET AUCUNE IDEE COMMENT CA FONCTIONNE ---------------------------------------
let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function(btn) {
    btn.onclick = function() {
        let modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        let modal = btn.closest(".modal");
        modal.style.display = "none";
    };
});
window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};

function myFunction(accessoire) {
    if (accessoire == "arrosoir") {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    } else if (accessoire == "engrais") {
        var popup = document.getElementById("myPopup2");
        popup.classList.toggle("show");
    } else if (accessoire == "tuyauAutomatique") {
        var popup = document.getElementById("myPopup3");
        popup.classList.toggle("show");
    }

}