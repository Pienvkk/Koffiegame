console.log("hallo wereld");

// Elementen selecteren met behulp van querySelector
const spelKnop = document.querySelector("#spelKnop")
const melkKnop = document.querySelector("#melkKnop")
const serveerKnop = document.querySelector("#serveerKnop")
const schenkGeluid = new Audio('sounds/pourCoffee.mp3') 
const niveauBalk = document.querySelector('#niveauBalk')
const koffieAfbeelding = document.querySelector("#koffieAfbeelding")
const klantAfbeelding = document.querySelector("#klantAfbeelding")
const klantBudget = document.querySelector("#klantBudget")
const niveauTekst = document.querySelector("#niveauTekst")

let koffieAfbeeldingen = ['images/Koffie.JPG', 'images/KoffieMetMelk.JPG', 'images/KoffieLeeg.JPG']
let klantAfbeeldingen = ['images/costumerBoos.JPG', 'images/costumerBlij.JPG']
let niveauAfbeeldingen = ['images/levelBalk/xpbalk20punten.JPG', 'images/levelBalk/xpbalk80punten.JPG', 'images/levelBalk/xpbalkLevel2.JPG']

// Functie om melk toevoegen knop te tonen
function toonMelkToevoegen() {
  koffieAfbeelding.src = koffieAfbeeldingen[0]
  niveauBalk.src = niveauAfbeeldingen [0]
  melkKnop.style.display = "inline"
  spelKnop.style.display = "none"
  serveerKnop.style.display = "none"
}

// Functie om melk toe te voegen aan de koffie
function voegMelkToe() {
  koffieAfbeelding.src = koffieAfbeeldingen[1]
  niveauBalk.src = niveauAfbeeldingen [1]
  niveauBalk.src = 'images/levelBalk/xpbalk60punten.JPG'
  melkKnop.style.display = "none"
  serveerKnop.style.display = "inline"
}

// Functie om de koffie aan de klant te serveren
function geefAanKlant() {
  koffieAfbeelding.src = koffieAfbeeldingen[2]
  klantAfbeelding.src = klantAfbeeldingen[1]
  niveauBalk.src = niveauAfbeeldingen [2]
  serveerKnop.style.display = "inline"
}

// Functie om het klantbudget bij te werken
function updateBudget() {
  if (klantBudget.textContent === "budget 0.20" || klantBudget.textContent === "budget 0.40" || klantBudget.textContent === "budget 0.60") {
    baristaTekst.textContent = 'Je hebt nog genoeg budget!'
  } else {
    baristaTekst.textContent = 'Je budget is op!'
  }
}

// Eventlistener voor de startknop
spelKnop.addEventListener("click", function () {
  if (spelKnop.textContent === "start") {
    klantBudget.textContent = "budget 0.40"
    schenkGeluid.play()
    toonMelkToevoegen()
    updateBudget()
  }
});

// Eventlistener voor de melk toevoegen knop
melkKnop.addEventListener("click", function () {
  if (melkKnop.textContent === "melk toevoegen") {
    klantBudget.textContent = "budget 0.20"
    schenkGeluid.play()
    voegMelkToe()
    updateBudget()
  }
});

// Eventlistener voor de serveer knop
serveerKnop.addEventListener("click", function () {
  if (serveerKnop.textContent === "geven aan klant") {
    niveauTekst.textContent = "level 2 ervaringsdeskundige"
    klantBudget.textContent = "budget 0"
    geefAanKlant()
    updateBudget()
  }
  
  if (klantBudget.textContent === "budget 0") {
      spelKnop.style.display = "inline"
      serveerKnop.style.display = "none"
    }
})

// https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
// https://www.w3schools.com/jsref/met_audio_play.asp audio code
//https://www.w3schools.com/jsref/prop_style_display.asp style code
// audio van rechtvrije website https://pixabay.com/



//document.querySelector(".hoofdpagina section:last-of-type img").src = 'images/' + 'Koffiemetmelk.JPG';


