import { renderTbl } from "./render.js";
import { OUTPUT, FORM, submitEl, sHit, yourBudget } from "./global.js";
import { saveLS, gunData } from "./storage.js";
import { GUN } from "./gun.js";

renderTbl(gunData);

const start = (budget, optics, shotsHit) => {
  const userGun = new GUN(budget, optics, shotsHit);

  gunData.push({
    budget: budget,
    optics: optics,
    shotsHit: shotsHit,
    recommendation: userGun.recommendation,
    totalBudget: userGun.totalBudget,
    expLevel: userGun.expLevel,
    caliber: userGun.caliber,
  });

  OUTPUT.innerHTML = "";
  renderTbl(gunData);
};

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
};

sHit.addEventListener("blur", validateField);
yourBudget.addEventListener("blur", validateField);

FORM.addEventListener("submit", e => {
  e.preventDefault();
  const budget = parseFloat(FORM.budget.value);
  const optics = FORM.optics.value === "true";
  const shotsHit = parseInt(FORM.shotsHit.value);
  const budgetIsValid = FORM.budget.value !== ``;
  const shotsIsValid = FORM.shotsHit.value !== ``;

  if (budgetIsValid && shotsIsValid) {
    submitEl.textContent = ``;
    start(budget, optics, shotsHit);
    saveLS(gunData);
    FORM.reset();
    
    setTimeout(() => {
      const msg = document.createElement("p");
      msg.textContent = "Are you ready to go Gun Shopping? PEW PEW! 🔫 PEW PEW!";
      msg.classList.add("gun-shopping-msg");
      OUTPUT.appendChild(msg);
    }, 1000);

  } else {
    submitEl.textContent = "*Budget and Hits on target required*";
  }
});



