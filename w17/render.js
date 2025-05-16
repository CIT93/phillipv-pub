import { FORM, TBL } from "./global.js"
import { saveLS } from "./storage.js";

const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["First", "Last", "Footprint Total", "Actions"];
  headingTextArr.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
};

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener("click", () => {
    onUpdate(index, data);
  });

  btnEdit.addEventListener("click", () => {
    FORM.querySelector('[name="firstName"]').value = obj.firstName;
    FORM.querySelector('[name="lastName"]').value = obj.lastName;
    FORM.querySelector('[name="houseM"]').value = obj.houseHoldMembers;
    FORM.querySelector('[name="houseS"]').value = obj.houseSize;
    FORM.querySelector('[name="foodC"]').value = obj.foodChoice;
    FORM.querySelector('[name="foodSource"]').value = obj.foodSource;
    FORM.querySelector('[name="water"]').value = String(obj.waterConsumption);
    FORM.querySelector('[name="hasBoth"]').value = String(obj.hasBothAppliances);
    FORM.querySelector('[name="purchaseCount"]').value = String(obj.purchaseCount);
    FORM.querySelector('[name="waste"]').value = String(obj.wastePerWeek);
    FORM.querySelector('[name="personalVehicle"]').value = String(obj.personalVehicle);
    FORM.querySelector('[name="publicTransit"]').value = String(obj.publicTransit);
    FORM.querySelector('[name="flights"]').value = String(obj.flights);

    const recycleCheckboxes = FORM.querySelectorAll('input[name="recycle"]');
    recycleCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });

    obj.recycleItems.forEach(item => {
      const checkbox = FORM.querySelector(`input[name="recycle"][value="${item}"]`);
      if (checkbox) {
        checkbox.checked = true;
      }
    });

    onUpdate(index, data);
  });

  return td;
};

const renderBody = data => {
  const tbody = document.createElement("tbody");

  data.forEach((obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["firstName", "lastName", "total"];
    keys.forEach(key => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    });
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  return tbody;
};

const getAvgScore = (data) => {
  if (data.length === 0) return 0;
  const total = data
    .map(entry => entry.total)
    .reduce((sum, score) => sum + score, 0);
  return (total / data.length).toFixed(2);
};

const renderTbl = data => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderBody(data);
    table.appendChild(tbody);

    const avgScore = getAvgScore(data);
    const avgRow = table.insertRow(-1);

    for (let i = 0; i < 1; i++) {
      avgRow.insertCell(i).textContent = "";
    }

    const avgLabelCell = avgRow.insertCell(1);
    avgLabelCell.textContent = "Average Footprint";

    const avgValueCell = avgRow.insertCell(2);
    avgValueCell.textContent = avgScore;

    TBL.appendChild(table);
  }
};

export { renderTbl };