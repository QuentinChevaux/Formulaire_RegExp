let nom = document.getElementById("nom")
let prenom = document.getElementById("prenom")
let adresse = document.getElementById("adresse")
let code_postal = document.getElementById("code_postal")
let ville = document.getElementById("ville")
let email = document.getElementById("email")

let valider = document.getElementById("valider")

valider.addEventListener('click', (event) => {

    let value_nom = nom.value.search(/^[a-zA-Z ]{2,30}$/)

    let value_prenom = prenom.value.search(/^[a-zA-Z ]{2,30}$/)

    let value_adresse = adresse.value.search(/^[a-zA-Z0-9\s,.'-]{3,}$/)

    let value_code_postal = code_postal.value.search(/^[1-9][0-9][0-9]{3}$/)
    
    let value_ville = ville.value.search(/[a-zA-Z ]{2,30}$/)

    let value_email = email.value.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)


    if ( value_nom == -1) {

        nom.style.border = "2px solid red"

        event.preventDefault();

    }

    else {

        nom.style.border = "2px solid lightgreen"

    }

    if ( value_prenom == -1) {

        prenom.style.border = "2px solid red"

        event.preventDefault();

    }

    else {

        prenom.style.border = "2px solid lightgreen"

    }

    if ( value_adresse == -1) {

        adresse.style.border = "2px solid red"

        event.preventDefault();

    }

    else {

        adresse.style.border = "2px solid lightgreen"

    }

    if ( value_code_postal == -1) {

        code_postal.style.border = "2px solid red"

        event.preventDefault();

    }

    else {

        code_postal.style.border = "2px solid lightgreen"

    }

    if ( value_ville == -1) {

        ville.style.border = "2px solid red"

        event.preventDefault();

    }

    else {

        ville.style.border = "2px solid lightgreen"

    }

    if ( value_email == -1) {

        email.style.border = "2px solid red"

        event.preventDefault();

    }

    else {

        email.style.border = "2px solid lightgreen"

    }

})

annuler.addEventListener('click', () => {

    document.getElementById("form").reset();


})