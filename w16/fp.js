class FP {
  constructor(firstName, lastName, houseHoldMembers, houseSize, foodChoice, foodSource, waterConsumPoints) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.houseHoldMembers = houseHoldMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.waterConsumPoints = waterConsumPoints;
    this.calHouseHoldPoints();
    this.calHouseSizePoints();
    this.calFoodChoicePoints();
    this.calFoodSourcePoints();
    this.calTotal();
  }


  calHouseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apt") {
      this.houseSizePoints = 2;
    }
  }


  calHouseHoldPoints() {
    if (this.houseHoldMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseHoldMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseHoldMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseHoldMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseHoldMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseHoldMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseHoldMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }

  calFoodChoicePoints() {
    if (this.foodChoice === "domesticMeatDaily") {
      this.foodChoicePoints = 10;
    } else if (this.foodChoice === "domesticMeatWeekly") {
      this.foodChoicePoints = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePoints = 4;
    } else if (this.foodChoice === "veganOrWildMeat") {
      this.foodChoicePoints = 2;
    }
  }

  calFoodSourcePoints() {
    if (this.foodSource === "packed") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "balance") {
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "local") {
      this.foodSourcePoints = 2;
    }
  }

  calTotal() {
    this.total = 
      this.houseHoldPoints + 
      this.houseSizePoints + 
      this.foodChoicePoints + 
      this.foodSourcePoints +
      this.waterConsumPoints;
  };
}

export { FP };