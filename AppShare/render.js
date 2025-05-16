import { TBL, FORM } from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHeading = () => {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Current Budget", "Recommendation", "Total Budget", "Actions"];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  return thead;
}

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  if (data.length === 0) {
    TBL.innerHTML = "";
  } else {
    renderTbl(data);
  }
}

const renderBtns = (obj, index, data) => {
  const tdButton = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  tdButton.appendChild(btnEdit);
  tdButton.appendChild(btnDel);

  btnDel.addEventListener(`click`, e => {
    onUpdate(index, data);
  });

  btnEdit.addEventListener(`click`, e => {
    FORM.budget.value = obj.budget
    FORM.optics.value = obj.optics
    FORM.shotsHit.value = obj.shotsHit
    onUpdate(index, data);
  });

  return tdButton;
}

const renderBody = data => {
  const tbody = document.createElement("tbody");

  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    const tdArr = [];
    for (let i = 0; i < 3; i++) {
      tdArr.push(document.createElement("td"));
      tr.appendChild(tdArr[i]);
    }

    if (obj.budget < 500) {
      tdArr[0].textContent = obj.budget
      tdArr[1].textContent = `Your budget of ${obj.budget} it not enough.`;
      tdArr[2].textContent = `Please update your budget`;
    } else {
      tdArr[0].textContent = obj.budget;
      tdArr[1].textContent = obj.recommendation;
      if (obj.optics) {
        tdArr[2].textContent = `Your total budget needs to be ${obj.totalBudget}`;
      } else {
        tdArr[2].textContent = `Your total budget is good!`;
      }
    };
    const td = renderBtns(obj,index,data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  return tbody;
}

const renderTbl = data => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = document.createElement("table");
    const thead = renderTblHeading();
    const tbody = renderBody (data);

    table.appendChild(thead);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
};



export { renderTbl };