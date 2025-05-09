
# HTML Change: 
<div>
        <label>Water Consumption</label>
        <select name="water" required>
          <option value="">--- Dishwasher and/or Washing Machine Usage ---</option>
          <option value="10">More than 9 times per week</option>
          <option value="6">4 to 9 times per week</option>
          <option value="3">1 to 3 times per week</option>
          <option value="0">Don't have a Dishwasher</option>
        </select>
      </div>
      <div>
        <label>Do you have a Dishwasher and Washing Machine?</label>
        <select name="hasBoth" required>
          <option value="">---Yes or No---</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>


# FP.JS Change: 
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

# Why the change: 
* Code impliments a boolian to reference if both appliances are used. (yes or no)
* calWaterConsumption calculates the waterConsumptionPts and passes the score to calTotalWaterConsumption for conditional logic. HTML changed from 3,2,1,0 due to changing the value to frequency value. 
10 is > than 9
6 is >= 4 
3 is >= 1
0 = 0 
This means that the calWaterConsumption needs to follow the logic of the if/elseif.