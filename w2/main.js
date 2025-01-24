// 1. Count the members of your household. 3 other people - 8 pts
const houseMem = 8;

// 2. Consider the size of your home. medium house - 7 pts
const homeSize = 7;

// 3. Evaluate your food choices. domestic meat a few times - 8 pts
const foodChoice = 8;

// 4. Examine your water consumption. 4 to 9 times per week - 2 pts
const waterConsume = 2;

// 5. Determine how many household purchases you make each year. 5 to 7 items per year - 8 pts
const housePur = 8;

// 6. Consider how much waste you produce. 2 garbage cans per week - 30 pts
const wasteProduce = 30;

// 7. Identify the amount of waste that you recycle. subtract from 24 (glass, plastic, paper, aluminum, steel, food waste) "-4" for each - 4 pts
const wasteRec = 4;

// 8. Tally up your annual transportation scores. Personal: 10pts (10,000 - 15,000) / Public: 2pts (less than 1,000) / Flights: 20 pts (travel far)
const transpoScore = 32;

// 9. Add up your points. Total Carbon Footprint - 99 pts 
const totPts = houseMem + homeSize + foodChoice + waterConsume + housePur + wasteProduce + wasteRec + transpoScore;

// 10. Write JS to update the rendered html (index.html) with total.

const myHeading = document.querySelector("h1");
myHeading.textContent = "My total is " + totPts;
