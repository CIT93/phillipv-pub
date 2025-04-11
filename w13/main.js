const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");


function getFit(exerciseType,numberReps, time) {
  return new Promise((resolve, reject) => {
    if (numberReps < 10 ) {
      reject(`Error: You have to do more than 10 ${exerciseType} to look like Captain America!`);
    } else {
      setTimeout(() => {
        resolve(`${exerciseType}`); 
      }, time * 1000);
    }
  });
}

const onSuccess = (data) => {
  const message = document.createElement("p");
  message.textContent = `Stop ${data}.`;
  OUTPUT.appendChild(message);
}

const onError = (errorCode) => {
  const errorMsg = document.createElement("p");
  errorMsg.textContent = `${errorCode}`;
  OUTPUT.appendChild(errorMsg);
}

const onFinal = () => {
  const doneMsg = document.createElement("p");
  doneMsg.textContent = `On to the next Workout!`;
  OUTPUT.appendChild(doneMsg);
  FORM.reset()
}

FORM.addEventListener("submit", e => {
  e.preventDefault();

  OUTPUT.innerHTML = ""; 

  const exerciseType = document.getElementById('exercise').value;  
  const numberReps = document.getElementById('reps').value;
  const time = document.getElementById(`time`).value;

  const outputMsg = document.createElement('p');
  outputMsg.textContent = `Start ${exerciseType} < > Goal rep is ${numberReps}`;
  OUTPUT.appendChild(outputMsg);

  getFit(exerciseType,numberReps,time)
    .then(onSuccess)
    .catch(onError)
    .finally(onFinal);
});