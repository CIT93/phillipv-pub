const cfpData = [];

function determineHouseSizePts(size) {
    let houseSizePoints = 0;
    if (size === "large") {
        houseSizePoints = 10;
    } else if (size === "medium") {
        houseSizePoints = 7;
    } else if (size === "small") {
        houseSizePoints = 4;
    } else if (size === "apt") {
        houseSizePoints = 2;
    }
    return houseSizePoints
}

function determinHouseHoldPts(numberInHousehod) {
    let houseHoldPoints = 0;
    if (numberInHousehod === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehod === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehod === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehod === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehod === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehod === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehod > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints
}


function start(houseHoldMember, houseSize) {
    const houseHoldPTS = determinHouseHoldPts(houseHoldMember);
    const houseSizePTS = determineHouseSizePts(houseSize);
    total = houseHoldPTS + houseSizePTS;
    cfpData.push([houseHoldMember, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutPut() {
    for (arr of cfpData) {
      console.log(arr)
      const output = document.getElementById("output");
      const newP = document.createElement("p");
      newP.textContent = `Accodring to your files, you have ${arr[0]} house memebr(s) and live in a ${arr[1]} compound.`;
      output.appendChild(newP)
      const par2 = document.createElement("p")
      par2. textContent = `${arr[2]} points for household and ${arr[3]} points for your home size. Your total Carbon Footprint is ${arr[4]}!`
      output.appendChild(par2)

    }
}

start(1, "apt");
start(1, "large");
start(1, "medium");
start(1, "small");
start(2, "apt");
start(2, "large");
start(2, "medium");
start(2, "small");
start(3, "apt");
start(3, "large");
start(3, "medium");
start(3, "small");
start(4, "apt");
start(4, "large");
start(4, "medium");
start(4, "small");
start(5, "apt");
start(5, "large");
start(5, "medium");
start(5, "small");
start(6, "apt");
start(6, "large");
start(6, "medium");
start(6, "small");
start(7, "apt");
start(7, "large");
start(7, "medium");
start(7, "small");

displayOutPut()