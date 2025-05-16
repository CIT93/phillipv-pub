class GUN {
  constructor(budget, optics, shotsHit) {
    this.budget = budget;
    this.optics = optics;
    this.shotsHit = shotsHit;
    this.setExpAndCaliber();
    this.setTotalBudget();
    this.setGunRecommendation();
  }

  setExpAndCaliber() {
    if (this.shotsHit < 15) {
      this.expLevel = "Beginner";
      this.caliber = ".22LR";
    } else {
      this.expLevel = "Intermediate";
      this.caliber = "9mm";
    }
  }

  setTotalBudget() {
    this.totalBudget = this.optics ? this.budget + 300 : this.budget;
  }

  setGunRecommendation() {
    if (this.totalBudget >= 500 && this.totalBudget <= 1200) {
      this.recommendation = "Glock 19 or Sig Sauer P365Macro";
    } else {
      this.recommendation = "Sig Sauer P226 or Taran Tactical Pit Viper";
    }

    if (this.optics) {
      this.recommendation += " with red dot optic";
    }
  }

  displayUnderBudget(outputElement) {
    const newP = document.createElement("p");
    newP.textContent = `Your budget of ${this.budget} is not enough.`;
    outputElement.appendChild(newP);
  }
}

export { GUN }
