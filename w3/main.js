let carbonFootPrintPoints = 0;
const numberInHousehod = 3;

    if (numberInHousehod === 1) {
        carbonFootPrintPoints = carbonFootPrintPoints + 14;
    } else if (numberInHousehod === 2) {
        carbonFootPrintPoints = carbonFootPrintPoints + 12;
    } else if (numberInHousehod === 3) {
        carbonFootPrintPoints = carbonFootPrintPoints + 10;
    } else if (numberInHousehod === 4) {
        carbonFootPrintPoints = carbonFootPrintPoints + 8;
    } else if (numberInHousehod === 5) {
        carbonFootPrintPoints = carbonFootPrintPoints + 6;
    } else if (numberInHousehod === 6) {
        carbonFootPrintPoints = carbonFootPrintPoints + 4;
    } else if (numberInHousehod > 6) {
        carbonFootPrintPoints = carbonFootPrintPoints + 2;
    }
console.log(`Based on the number of members in the household ${numberInHousehod} the points would be ${carbonFootPrintPoints}.`);



