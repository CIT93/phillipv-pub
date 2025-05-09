class FP {
  constructor(firstName, lastName, houseHoldMembers, houseSize, foodChoice, foodSource, waterConsumption, hasBothAppliances, purchaseCount) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.houseHoldMembers = houseHoldMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.waterConsumption = parseInt(waterConsumption);
    this.hasBothAppliances = (hasBothAppliances === "true");
    this.purchaseCount = parseInt(purchaseCount);
    this.calHouseHoldPoints();
    this.calHouseSizePoints();
    this.calFoodChoicePoints();
    this.calFoodSourcePoints();
    this.calTotalWaterConsumption();
    this.calPurchasePoints();
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

  calWaterConsumption() {
    if (this.waterConsumption > 9) {
      this.waterConsumptionPts = 3;
    } else if (this.waterConsumption >= 4) {
      this.waterConsumptionPts = 2;
    } else if (this.waterConsumption >= 1) {
      this.waterConsumptionPts = 1;
    } else {
      this.waterConsumptionPts = 0;
    }
  }
  
  calTotalWaterConsumption() {
    this.calWaterConsumption();
    if (this.hasBothAppliances) {
      this.waterConsumPoints = this.waterConsumptionPts * 2;
    } else {
      this.waterConsumPoints = this.waterConsumptionPts;
    }
  }

  calPurchasePoints() {
    if (this.purchaseCount > 7) {
      this.purchasePoints = 10;
    } else if (this.purchaseCount >= 5) {
      this.purchasePoints = 8;
    } else if (this.purchaseCount >= 3) {
      this.purchasePoints = 6;
    } else if (this.purchaseCount > 1 ) {
      this.purchasePoints = 4;
    } else {
      this.purchasePoints = 2;
    }
  }

  calTotal() {
    this.total = 
      this.houseHoldPoints + 
      this.houseSizePoints + 
      this.foodChoicePoints + 
      this.foodSourcePoints +
      this.waterConsumPoints +
      this.purchasePoints;
  };
}

export { FP };