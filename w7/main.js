import { renderTbl, renderTblHeading } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

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

function start(houseHoldMembers, houseSize, firstName, lastName) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstName: firstName, //added first and last name
    lastName: lastName,
    yourMember: houseHoldMembers,
    yourHouse: houseSize,
    yourMemPts: houseHoldPTS,
    yourSizePts: houseSizePts,
    tot: total
  });

}

FORM.addEventListener(`submit`, function(e){
  e.preventDefault();
  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  const houseHoldMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseHoldMembers, houseSize);
  OUTPUT.innerHTML = "";
  // displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});


