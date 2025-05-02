# Initial thought: 
I would create a seperate js file to import/export high order function. 


# My updated thoughts: 
After thinking about the code, I would only need to update the render.js file since that file is responsible for redering the table. Since the average row will appear in the render table body, I would implament HOF as its own variable and update the const renderTbl. 

# High Order Function:
const getAvgScore = (data) => {
  if (data.length === 0) return 0;
  const total = data
    .map(entry => entry.total)
    .reduce((sum, score) => sum + score, 0);
  return (total / data.length).toFixed(2);
};

If data array is empty, it returns 0 to avoid errors. Else, it uses .map to grab the total score from each object in the array and passes it to the .reduce() to sum up the values. Used the reference to use .tofixed(2) to round to the nearest 2 decimals. 
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed



updated the table: 

reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow   to insert row 
https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell   to insert cell 


// Add avg row
    const avgScore = getAvgScore(data);
    const avgRow = table.insertRow(-1);

    // Fill first 4 empty cells
    for (let i = 0; i < 4; i++) {
      avgRow.insertCell(i).textContent = "";
    }

    // Label cell
    const avgLabelCell = avgRow.insertCell(4);
    avgLabelCell.textContent = "Average Footprint";

    // Score cell
    const avgValueCell = avgRow.insertCell(5);
    avgValueCell.textContent = avgScore;

    