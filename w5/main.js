// const cfpData = [];
// function determineHouseSizePts(size) {
//   let houseSizePoints = 0;
//   if (size === "large") {
//     houseSizePoints = 10;
//   } else if (size === "medium") {
//     houseSizePoints = 7;
//   } else if (size === "small") {
//     houseSizePoints = 4;
//   } else if (size === "apt") {
//     houseSizePoints = 2;
//   }
//   return houseSizePoints;
// }

// function determineHouseHoldPts(numberInHousehold) {
//   let houseHoldPoints = 0;
//   if (numberInHousehold === 1) {
//     houseHoldPoints = 14;
//   } else if (numberInHousehold === 2) {
//     houseHoldPoints = 12;
//   } else if (numberInHousehold === 3) {
//     houseHoldPoints = 10;
//   } else if (numberInHousehold === 4) {
//     houseHoldPoints = 8;
//   } else if (numberInHousehold === 5) {
//     houseHoldPoints = 6;
//   } else if (numberInHousehold === 6) {
//     houseHoldPoints = 4;
//   } else if (numberInHousehold > 6) {
//     houseHoldPoints = 2;
//   }
//   return houseHoldPoints;
// }

// function displayOutObj(obj) {
//   console.log(obj);
//   const output = document.getElementById("output");
//   const newH2 = document.createElement("h2");
//   const newP = document.createElement("p");
//   newH2.textContent = `Your Carbon Footprint total score is ${obj.tot}!`;
//   output.appendChild(newH2);
//   newP.textContent = `This score is based on your household member(s) of ${obj.yourMember} (score: ${obj.yourMemPts})`;
//   newP.textContent += ` and a ${obj.yourHouse} size home (score ${obj.yourSizePts}).`;
//   output.appendChild(newP);
// }

// function start(houseHoldMembers, houseSize) {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePts = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePts;
//   cfpData.push({
//     yourMember: houseHoldMembers,
//     yourHouse: houseSize,
//     yourMemPts: houseHoldPTS,
//     yourSizePts: houseSizePts,
//     tot: total
//   });

// }


// function displayOutput() {
//   const output = document.getElementById("output");
//   for (obj of cfpData) {
//     const newH2 = document.createElement("h2");
//     const newP = document.createElement("p");
//     const newH3 = document.createElement("h3");
//     newH2.textContent = `Your Carbon Footprint total score is ${obj.tot}!`;
//     output.appendChild(newH2);
//     newH3.textContent = `Based on the Number in your household and size of home.`
//     output.appendChild(newH3);
//     newP.textContent = `This score is based on your household member(s) of ${obj.yourMember} (score: ${obj.yourMemPts})`;
//     newP.textContent += ` and a ${obj.yourHouse} size home (score ${obj.yourSizePts}).`;
//     output.appendChild(newP);
//   }
// }

// //   start(1, "apt");
// start(2, "apt");
// // start(3, "apt");
// // start(4, "apt");
// // start(5, "apt");
// // start(6, "apt");
// // start(7, "apt");
// // start(1, "small");
// // start(2, "small");
// // start(3, "small");
// // start(4, "small");
// start(5, "small");
// // start(6, "small");
// // start(7, "small");
// // start(1, "medium");
// // start(2, "medium");
// start(3, "medium");
// //   start(4, "medium");
// // start(5, "medium");
// // start(6, "medium");
// // start(7, "medium");
// // start(1, "large");
// // start(2, "large");
// // start(3, "large");
// //   start(4, "large");
// start(5, "large");
// // start(6, "large");
// // start(7, "large");

// displayOutput()

//Week 8: Array code challenge 

const movieArr = [
  {title: "Deadpool & Wolverine", year: 2024, rating: 7.6, watched: 5 },
  {title: "Spirited Away", year: 2001, rating: 8.6, watched: 5 },
  {title: "Dear Evan Hansen", year: 2021, rating: 6.1, watched: 1 },
  {title: "The Greatest Showman", year: 2017, rating: 7.5, watched: 7}
];

function displayHeading() {
  const output = document.getElementById("output");
  const newH1 = document.createElement("h1");
  newH1.textContent = "What should I watch tonight?";
  output.appendChild(newH1);
}

function arrTableHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Title", "Year", "Rating", "Watched"];

  headingTextArr.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function displaymoviesTable() {
  const moviesTable = document.getElementById("moviesData");
  moviesTable.innerHTML = ""; 

  const table = arrTableHeading();
  const tbody = document.createElement("tbody");

  movieArr.forEach((obj) => {
    if (obj.rating > 7 && obj.watched > 2) {
      const tr = document.createElement("tr");

      ["title", "year", "rating", "watched"].forEach(key => { 
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    }
  });

  table.appendChild(tbody);
  moviesTable.appendChild(table);
}

displayHeading ();
displaymoviesTable();


