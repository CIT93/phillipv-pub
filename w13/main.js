const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const getFit = () => {
  const heading = document.createElement("h2");
  heading.textContent = "Submit to start!";
  OUTPUT.appendChild(heading);
};

  FORM.addEventListener('submit', (e) => {
    e.preventDefault();  

    const exerciseType = document.getElementById('exercise').value;  
    const numberReps = document.getElementById('reps').value;
    const time = document.getElementById(`time`).value;

    const outputMsg = document.createElement('p');
    outputMsg.textContent = `Start ${exerciseType} < > Goal rep is ${numberReps}`;
    OUTPUT.appendChild(outputMsg);

    FORM.reset();

    setTimeout (() => {
       const timeout = document.createElement('p');
       timeout.textContent = `Stop doing ${exerciseType}`;
       OUTPUT.appendChild(timeout);
    }, time * 1000);
});

getFit();


// const FORM = document.getElementById("form");
// const OUTPUT = document.getElementById("output");

// function updateDOM(message, el) {
//   const newEl = document.createElement(el)
//   newEl.textContent = message
//   OUTPUT.appendChild(newEl)
// }

// const startWorkout = (exerciseType, numberReps, time, fn) => {
//   fn(`Start ${exerciseType} <> Goal reps is ${numberReps} <> Complete in ${time} min!`, `p`) // sync
//   setTimeout(() => {
//     fn(`Stop ${exerciseType}`, "h1") // async
//   }, time * 1000)
// }

// FORM.addEventListener('submit', e => {
//   e.preventDefault();
//   const exerciseType = e.target.exercise.value
//   const numberReps = parseFloat(e.target.reps.value)
//   const time = parseFloat(e.target.time.value)
//   startWorkout(exerciseType, numberReps, time, updateDOM)
//   FORM.reset()
// })


