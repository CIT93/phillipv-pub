const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

function displayOutObj(obj) {
  console.log(obj);
  const OUTPUT = document.getElementById("output");
  const newH2 = document.createElement("h2");
  const newP = document.createElement("p");
  newH2.textContent = `Your Carbon Footprint total score is ${obj.tot}!`;
  OUTPUT.appendChild(newH2);
  newP.textContent = `This score is based on your household member(s) of ${obj.yourMember} (score: ${obj.yourMemPts})`;
  newP.textContent += ` and a ${obj.yourHouse} size home (score ${obj.yourSizePts}).`;
  OUTPUT.appendChild(newP);
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    yourMember: houseHoldMembers,
    yourHouse: houseSize,
    yourMemPts: houseHoldPTS,
    yourSizePts: houseSizePts,
    tot: total
  });

}

function displayOutput() {
  for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    const newP = document.createElement("p");
    const newH3 = document.createElement("h3");
    newH2.textContent = `Your Carbon Footprint total score is ${obj.tot}!`;
    OUTPUT.appendChild(newH2);
    newH3.textContent = `Based on the Number in your household and size of home.`
    OUTPUT.appendChild(newH3);
    newP.textContent = `This score is based on your household member(s) of ${obj.yourMember} (score: ${obj.yourMemPts})`;
    newP.textContent += ` and a ${obj.yourHouse} size home (score ${obj.yourSizePts}).`;
    OUTPUT.appendChild(newP);
  }
}

displayOutput()


FORM.addEventListener(`submit`, function(e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseHoldMembers, houseSize)
  OUTPUT.innerHTML = "";
  displayOutput() 
  FORM.reset()
});
