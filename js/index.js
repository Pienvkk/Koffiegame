console.log("hallo wereld")

const gamebutton = document.querySelector("#Gamebutton")
const melkToevoegen = document.querySelector("#MelkToevoegen")
const gevenAanKlant = document.querySelector("#GevenAanKlant")
const schenkGeluid = new Audio('sounds/pourCoffee.mp3')
const levelBalk = document.querySelector('header img')
const koffieAfbeelding = document.querySelector(".hoofdpagina section:last-of-type img")
const klantAfbeelding = document.querySelector(".hoofdpagina section:first-of-type img")
const klantBudget = document.querySelector(".hoofdpagina section:first-of-type p:last-of-type")
const baristaTekst = document.querySelector(".hoofdpagina section:last-of-type p:first-of-type")

let koffieAfbeeldingen = ['images/Koffie.JPG', 'images/Koffiemetmelk.JPG', 'images/Koffieleeg.JPG']
let klantAfbeeldingen = ['images/costumerBoos.JPG', 'images/costumerBlij.JPG']
let level = document.querySelector("header p")

function toonMelkToevoegen() {
  koffieAfbeelding.src = koffieAfbeeldingen[0]
  levelBalk.src = 'images/levelBalk/xpbalk20punten.JPG'
  melkToevoegen.style.display = "inline"
  gamebutton.style.display = "none"
  gevenAanKlant.style.display = "none"
}

function voegMelkToe() {
  koffieAfbeelding.src = koffieAfbeeldingen[1]
  levelBalk.src = 'images/levelBalk/xpbalk60punten.JPG'
  melkToevoegen.style.display = "none"
  gevenAanKlant.style.display = "inline"
}

function geefAanKlant() {
  koffieAfbeelding.src = koffieAfbeeldingen[2]
  klantAfbeelding.src = klantAfbeeldingen[1]
  levelBalk.src = 'images/levelBalk/xpbalkLevel2.JPG'
  gevenAanKlant.style.display = "inline" 
}

function updateBudget() {
  if (klantBudget.textContent === "budget 0.20" || klantBudget.textContent === "budget 0.40" || klantBudget.textContent === "budget 0.60") {
    baristaTekst.textContent = 'Je hebt nog genoeg budget!'
  } else {
    baristaTekst.textContent = 'Je budget is op!'
  }
}

gamebutton.addEventListener("click", function () {
  if (gamebutton.textContent === "start") {
    schenkGeluid.play()
    toonMelkToevoegen()
    klantBudget.textContent = "budget 0.40"
    updateBudget()
  }
});

melkToevoegen.addEventListener("click", function () {
  if (melkToevoegen.textContent === "melk toevoegen") {
    schenkGeluid.play()
    voegMelkToe()
    klantBudget.textContent = "budget 0.20"
    updateBudget()
  }
});

gevenAanKlant.addEventListener("click", function () {
  if (gevenAanKlant.textContent === "geven aan klant") {
    level.textContent = "level 2 ervaringsdeskundige"
    geefAanKlant()
    klantBudget.textContent = "budget 0"
    updateBudget()
  }
})

// https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
// https://www.w3schools.com/jsref/met_audio_play.asp audio code
//https://www.w3schools.com/jsref/prop_style_display.asp style code
// audio van rechtvrije website https://pixabay.com/



//document.querySelector(".hoofdpagina section:last-of-type img").src = 'images/' + 'Koffiemetmelk.JPG';