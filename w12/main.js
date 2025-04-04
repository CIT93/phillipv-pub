const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const getFit = () => {
  const heading = document.createElement("h2");
  heading.textContent = "Submit to start!";
  OUTPUT.appendChild(heading);

  FORM.addEventListener('submit', (e) => {
    e.preventDefault();  

    const exerciseType = document.getElementById('exercise').value;  
    const numberReps = document.getElementById('reps').value;

    const outputMsg = document.createElement('p');
    outputMsg.textContent = `Start ${exerciseType} < > Goal rep is ${numberReps}`;
    OUTPUT.appendChild(outputMsg);

    setTimeout (() => {
       const timeout = document.createElement('p')
       timeout.textContent = `Stop doing ${exerciseType}`
       OUTPUT.appendChild(timeout);
    }, 4000);
});

}

getFit()