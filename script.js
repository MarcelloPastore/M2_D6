//! Esercizio 7: Cambiare il titolo

let changeH1 = function() {
    document.querySelector('h1').innerText = "Negozzietto dello zio Marcy"
}
// changeH1();

//! Esercizio 8: Cambiare colore del background della pagina
let changeColorBackground = function() {
    document.querySelector('body').style.backgroundColor = 'wheat'
}
// changeColorBackground();

//! Esercizio 9: Cambiare indirizzo nel footer

let changeAddress = function() {
    document.querySelector('#indirizzo').innerText = "Milano, Via Roma 104"
}
// changeAddress();

//! Esercizio 10: Scrivere una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

let cssClass = function() {
    let link = document.querySelectorAll('a')
    for (let i = 0 ; i < link.length ; i++) {
    link[i].classList.add('linkoso')
    }
}
// cssClass();

//! Esercizio 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine






