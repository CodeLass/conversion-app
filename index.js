/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const squareInput = document.getElementById("square-input")
const btnConvert = document.getElementById("btn-convert")
const textLength = document.getElementById("text-length")
const textVolume = document.getElementById("text-volume")
const textMass = document.getElementById("text-mass")

btnConvert.addEventListener("click", function() {
    convertLength()
    convertVolume()
    convertMass()
})

function convertLength() {
    const metersToFeet = (squareInput.value * 3.28084).toFixed(3);
    const feetToMeters = (squareInput.value * 0.3048).toFixed(3);
    textLength.innerHTML = `${squareInput.value} meters = ${metersToFeet} feet | ${squareInput.value} feet = ${feetToMeters} meters`
}

function convertVolume() {
    const litersToGallons = (squareInput.value * 0.264172).toFixed(3);
    const gallonsToLiters = (squareInput.value * 3.78541).toFixed(3);
    textVolume.innerHTML = `${squareInput.value} liters = ${litersToGallons} gallons | ${squareInput.value} gallons = ${gallonsToLiters} liters`
}

function convertMass() {
    const kilosToPounds = (squareInput.value * 2.20462).toFixed(3);
    const poundsToKilos = (squareInput.value * 0.4535923).toFixed(3);
    textMass.innerHTML = `${squareInput.value} kilos = ${kilosToPounds} pounds | ${squareInput.value} pounds = ${poundsToKilos} kilos`
}