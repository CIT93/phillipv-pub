import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js"
import { FP } from "./fp.js";

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

    const formElements = e.target.elements;
    const recycleItems = [];

    for (let i = 0; i < formElements.recycle.length; i++) {
      if (formElements.recycle[i].checked) {
        recycleItems.push(formElements.recycle[i].value);
      }
    }

    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(formElements.houseM.value),
      formElements.houseS.value,
      formElements.foodC.value,
      formElements.foodSource.value,
      formElements.water.value,
      formElements.hasBoth.value,
      formElements.purchaseCount.value,
      formElements.waste.value,
      recycleItems
    );

    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first and last name";
  }
});
