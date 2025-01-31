console.log("hello from inside the main.js file");

//let myVar;

const myVar = "Phillip";
const myVarType = typeof(myVar);
console.log("myVarType " + myVarType);
console.log(`myVarType" ${myVarType}`);



function runNow () {
    if(myVarType === "string") {
        console.log('this 11 line will run');
    }   else {
        console.log('this 16 line will not run');
    }
}

runNow();
runNow();
runNow();