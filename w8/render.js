const TBL = document.getElementById("tab-data")

function renderTblHeading() {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "House Hold", "House Size", "Footprint", "Actions"];
    headingTextArr.forEach(function (text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    return table;
}

function renderTblBtn(index, data) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    const btnSave = document.createElement("button") // my attempt 
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Delete";
    btnSave.textcontent = "Save"; // my attempt
    td.appendChild(btnEdit);
    td.appendChild(btnDel); 
    td.appendChild(btnSave); //my attempt
    
    btnDel.addEventListener (`click`, function (e){
        data.splice(index, 1);
        renderTbl(data);
    });
    btnEdit.addEventListener(`click`, function(e){
        const obj = data[index] //my attempt

        btnSave.addEventListener ("click", function (e) { //my attempt
            obj.Name; //my attempt
            obj.household; //my attempt
            obj.houseSize; //my attempt
            obj.footprint; //my attempt
            
            renderTbl(data); //my attempt
        }); 

    });

    return td;
}

function renderBody(data) {
    const tbody = document.createElement("tbody")

    data.forEach(function (obj, index) {
        const tr = document.createElement("tr");
        for (const [key, value] of Object.entries(obj)) {
            if (key !== "lastName" && key !== "yourMemPts" && key !== "yourSizePts") {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            }
        }
        const td = renderTblBtn(index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });

    return tbody;

}

function renderTbl(data) {
    TBL.innerHTML = "";
    const table = renderTblHeading();
    const tbody = renderBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
}

export { renderTbl };

