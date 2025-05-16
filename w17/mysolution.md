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

used the quarySelectorAll. Had some help from a fellow coder in understanding quarySelector.

const recycleCheckboxes = FORM.querySelectorAll('input[name="recycle"]');
Grabs all recycling checkboxes with the used name="recycle" from HTML. 

recycleCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
Makes sure only the correct boxes are checked when editing.

obj.recycleItems.forEach(item => {
  const checkbox = FORM.querySelector(`input[name="recycle"][value="${item}"]`);
  if (checkbox) {
    checkbox.checked = true;
  }
});
is an array that is saved from the original submission. For each item, this selects the checkboxes with that value. 

onUpdate(index, data);
This removes the old object from the array at the given index and rerenders the table. 

Another way of doing this would be to update the indexes with: 

FORM[11].checked = obj.recycleItems.includes("glass");
FORM[12].checked = obj.recycleItems.includes("plastic");
FORM[13].checked = obj.recycleItems.includes("paper");
FORM[14].checked = obj.recycleItems.includes("aluminum");
FORM[15].checked = obj.recycleItems.includes("steel");
FORM[16].checked = obj.recycleItems.includes("food");


Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll and week 17's codealong video. 


calTransportationPoints() {
    this.transportationPoints = this.personalVehicle + this.publicTransit + this.flights;
  }

values are references in HTML. 