import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js"


function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    yourMember: houseHoldMembers,
    yourHouse: houseSize,
    yourMemPts: houseHoldPTS,
    yourSizePts: houseSizePts,
    tot: total,
  });

}
renderTbl(cfpData);

const firstBlur = document.getElementById("firstName");
const lastBlur = document.getElementById("lastName");
function fieldBlur(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === "") {
    fieldError.textContent = `${event.target.dataset.label} is required`
    event.target.classList.add(`invalid`);
  } else {
    fieldError.textContent = ""
    event.target.classList.remove(`invalid`);
  }

}
firstBlur.addEventListener("blur",fieldBlur);
lastBlur.addEventListener("blur", fieldBlur);


FORM.addEventListener("submit", function (e) {
  const errorMsg = document.getElementById("error");
  e.preventDefault();
  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  if (firstName === "" || lastName === "") {
    errorMsg.innerText = "First and Last Name is required";
  }
  else {
    errorMsg.innerText = "";
    const houseHoldMembers = parseInt(FORM.houseM.value);
    const houseSize = FORM.houseS.value;
    start(firstName, lastName, houseHoldMembers, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  }
});
