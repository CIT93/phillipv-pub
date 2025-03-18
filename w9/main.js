import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js"

const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const submitEl = document.getElementById("submitError")

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

function validateField (event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === ``) {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add(`invalid`);
  } else {
    fieldError.textContent = ``;
    event.target.classList.remove(`invalid`);
  }

}
firstNameEl.addEventListener("blur",validateField);
lastNameEl.addEventListener("blur", validateField);


FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  const firstNameIsValid = firstNameEl.value !== ``;
  const lastNameIsValid = lastNameEl.value !== ``;
  if (firstNameIsValid && lastNameIsValid) {
    submitEl.textContent = ``;
    const houseHoldMembers = parseInt(FORM.houseM.value);
    const houseSize = FORM.houseS.value;
    start(firstName, lastName, houseHoldMembers, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    submitEl.textContent = "Form requires first and last name";

  }
});
