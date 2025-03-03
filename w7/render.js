const TBL = document.getElementById("tab-data")

function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Footprint"]; //reflect name and total footrint
    
    headingTextArr.forEach(function(text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    return table
}

function renderTbl(data){
    TBL.innerHTML = ""; // clear table bore appending new content 
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    

    data.forEach(function(text){ 
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.textContent = text.firstName  //Would I have to import data? 
        tr.appendChild(tdName);

        const tdTotal = document.createElement("td")
        tdTotal.textContent = text.tot;
        tr.appendChild(tdTotal);

        tbody.appendChild(tr);
    });

    // const btnEdit = document.createElement("button");
    // const btnDel = document.createElement("button");
    // btnEdit.textContent = "Edit";
    // btnDel.textContent = "Delete";
    // td.appendChild(btnEdit)
    // td.appendChild(btnDel)
    table.appendChild(tbody);
    console.log(table)
    TBL.appendChild(table) 
}

export{renderTbl, renderTblHeading};
