// Check Java Koppeling
console.log("hallo wereld")

// Geluidsbestand voor het schenken van koffie
// bron -> https://developer.mozilla.org/en-US/docs/Web/API/AudioContext & audio van rechtvrije website https://pixabay.com/ <- bron
const schenkGeluid = new Audio('sounds/pourCoffee.mp3') 


// Geselecteerde elementen
const startKnop = document.querySelector("#spelKnop")
const melkKnop = document.querySelector("#melkKnop")
const serveerKnop = document.querySelector("#serveerKnop")
const niveauBalk = document.querySelector('#niveauBalk')
const koffieAfbeelding = document.querySelector("#koffieAfbeelding")
const klantAfbeelding = document.querySelector("#klantAfbeelding")
const klantBudget = document.querySelector("#klantBudget")
const niveauTekst = document.querySelector("#niveauTekst")
const baristaTekst = document.querySelector ("#barista")

// Variabele voor budget & levelbalk afbeeldingen
let klantGeld = 9
let niveauAfbeeldingen = ['images/levelBalk/xpbalk20punten.JPG', 'images/levelBalk/xpbalk60punten.JPG', 'images/levelBalk/xpbalkLevel2.JPG']
 
// Functie om melk toevoegen knop te tonen
function voegKoffieToe() {
  koffieAfbeelding.src = 'images/Koffie.JPG'
  niveauBalk.src = niveauAfbeeldingen[0]
  melkKnop.style.display = "inline"   // bron -> https://www.w3schools.com/jsref/prop_style_display.asp style code
  startKnop.style.display = "none"
  serveerKnop.style.display = "none"
  klantGeld = klantGeld - 3 
  klantBudget.textContent = klantGeld
}

// Functie om melk toe te voegen aan de koffie
function voegMelkToe() {
  koffieAfbeelding.src = 'images/KoffieMetMelk.JPG'
  niveauBalk.src = niveauAfbeeldingen[1]
  melkKnop.style.display = "none"  // bron -> https://www.w3schools.com/jsref/prop_style_display.asp style code
  serveerKnop.style.display = "inline"
  klantGeld = klantGeld - 6
  klantBudget.textContent = klantGeld
}

// Functie om de koffie aan de klant te serveren
function geefAanKlant() {
  koffieAfbeelding.src = 'images/KoffieLeeg.JPG'
  klantAfbeelding.src = 'images/costumerBlij.JPG'
  niveauBalk.src = niveauAfbeeldingen[2]
  serveerKnop.style.display = "inline"  // bron -> https://www.w3schools.com/jsref/prop_style_display.asp style code
}

// Functie om het budget controleren
function updateBudget() {
  if (klantGeld > 0) { 
      baristaTekst.textContent = "Je hebt genoeg budget!"
  } else {
      baristaTekst.textContent = "Helaas, je budget is op!"
  }
}

// Eventlistener voor de startknop
startKnop.addEventListener("click", function () {
  if (startKnop.textContent === "start") {
    schenkGeluid.play()
    voegKoffieToe()
    updateBudget()
  }
})

// Eventlistener voor de melk toevoegen knop
melkKnop.addEventListener("click", function () {
  if (melkKnop.textContent === "melk toevoegen") {
    schenkGeluid.play()
    voegMelkToe()
    updateBudget()
  }
})

// Eventlistener voor de serveer knop
serveerKnop.addEventListener("click", function () {
  if (serveerKnop.textContent === "geven aan klant") {
    niveauTekst.textContent = "level 2 ervaringsdeskundige"
    geefAanKlant()
    updateBudget()
  }
  
  if (klantBudget.textContent === "budget 0") {
      startKnop.style.display = "inline"  // bron -> https://www.w3schools.com/jsref/prop_style_display.asp style code
      serveerKnop.style.display = "none"
    }
})

// https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
// https://www.w3schools.com/jsref/met_audio_play.asp audio code
//https://www.w3schools.com/jsref/prop_style_display.asp style code
// audio van rechtvrije website https://pixabay.com/

