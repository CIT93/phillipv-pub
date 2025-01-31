const myHeading = document.querySelector("h1");
myHeading.textContent = "Week 3 - Carbon Footprint Household";

// function determineHouseholdPts(numberInHousehod) {
//     console.log("Inside the function")
//     if (numberInHousehod === 1) {
//         carbonFootPrintPoints = carbonFootPrintPoints + 14;
//     } else if (numberInHousehod === 2) {
//         carbonFootPrintPoints = carbonFootPrintPoints + 12;
//     } else if (numberInHousehod === 3) {
//         carbonFootPrintPoints = carbonFootPrintPoints + 10;
//     } else if (numberInHousehod === 4) {
//         carbonFootPrintPoints = carbonFootPrintPoints + 8;
//     } else if (numberInHousehod === 5) {
//         carbonFootPrintPoints = carbonFootPrintPoints + 6;
//     } else if (numberInHousehod === 6) {
//         carbonFootPrintPoints = carbonFootPrintPoints + 4;
//     } else if (numberInHousehod > 6) {
//         carbonFootPrintPoints = carbonFootPrintPoints + 2;
//     }
//     console.log(`Based on the number of members in the household ${numberInHousehod} the points would be ${carbonFootPrintPoints}.`)
// }

// let carbonFootPrintPoints = 0;
// //const numberInHousehod = 7;


// // global scope

// determineHouseholdPts(3)
// determineHouseholdPts(4)

// Consider the size of your home: 
// If you have a large house, then add 10 points to your score.
// If you have a medium-sized house, then add 7 points.
// If you have a small house, then add 4 points.
// If you live in an apartment, then add 2 points.

function housePoints(houseSize) {
    switch(houseSize){
        case "large":
            console.log("10 points");
            break;
        case "medium":
            console.log("7 points");
            break;
        case "small":
            console.log("4 points");
            break;
        case "apartment":
            console.log("2 points");
            break;
    }
}

housePoints("large")
housePoints("medium")
housePoints("small")
housePoints("apartment")

