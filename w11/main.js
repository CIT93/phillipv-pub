import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT, TBL } from "./global.js";
import { saveLS, cfpData } from "./storage.js"
import { FP } from "./fp.js";

const start = (firstName, lastName, houseHoldMembers, houseSize, foodChoice) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const foodChoicePTS = determineFoodChoicePts(foodChoice);
  const total = houseHoldPTS + houseSizePTS + foodChoicePTS;

  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    foodC: foodChoice,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    foodCPTS: foodChoicePoints,
    cfpTotal: total,
  });
}
renderTbl(cfpData);


const validateField = event => {
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
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== `` && LNAME.value !== ``) {
    SUBMIT.textContent = ``;
    //start(FNAME.value, LNAME.value, parseInt(FORM.houseM.value), FORM.houseS.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.houseM.value), FORM.houseS.value, FORM.foodC.value);
    // fpObj.houseSizePoints();
    // fpObj.houseHoldPoints();
    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first and last name";

  }
});

// const me = {
//   name: "phillip",
//   hairColor: "Brown",
//   location: "home",
//   sleepScore: 95,
//   introduce: function() {
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is at ${this.location} right now`)
//   }
// }

// const you = {
//   name: "Jan",
//   hairColor: "Red",
//   location: "School",
//   sleepScore: 2,
//   introduce: function() {
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is at ${this.location} right now`)
//   }
// }

// me.introduce();
// you.introduce();

// class Human {
//   constructor(name, hairColor, location, sleepScore) {
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce() {
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is at ${this.location} right now and had sleep score of ${this.sleepScore}.`)
//   }
// }

// const phillip = new Human("Phillip", "Brown", "home", "95");
// const jane = new Human("Jane", "Red", "School", "2");
// phillip.introduce();
// jane.introduce();
// phillip.hrv = 50;