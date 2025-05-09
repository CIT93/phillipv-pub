# Method: 

Part 1: 
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

Part 2: thinking Ahead
calTotalWaterConsumption() {
  this.calWaterConsumption();
  if (this.hasBothAppliances) {
    this.waterConsumptionPts *= 2;
  }
}



# HTML: 
<div>
  <label>Water Consumption</label>
  <select name="water" required>
    <option value="">--- Dishwasher and/or washing Machine Usage ---</option>
    <option value="3">More than 9 Tmes per week</option>
    <option value="2">4 to 9 times per week</option>
    <option value="1">1 to 3 times per week </option>
    <option value="0">Don't have a Dishwasher</option>
  </select>
</div>


Thinking ahead:  
<div>
  <label>Do you have a Dishwasher and Washing Machine?</label>
  <select name="hasBoth" required>
    <option value="">---Yes or No---</option>
    <option value="true">Yes</option>
    <option value="false">No</option>
  </select>
</div>