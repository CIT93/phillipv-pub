Using dev tools and looking at the functions helped me understand functions more. For exmaple: 
in the code: 

const add2 = function(a) { // () this is a parameter
   console.log(2 + a) // 3 is passed to "a".
}

add2(3) // () this is called argument -> this is being passed by value.

By understanding what a parameter and argument is, it helps me understand how a funtion works better. 

As for the 2nd example: 

const add2  = function(a) {
    return 2 + a //when function is returned, the result is =  (add2 = (2+3) )
}
const result = add2(3) 


Spread is used to unpack elements from an array or properties from an object and place them into anohter array or object. 
In an object, the code will look similar with the mergedObject having a obj1 and obj2 together = {obj1, obj2} in the console.log


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [
    ...array1
    ...array2
];
console.log(mergedArray);
//[1, 2, 3, 4, 5, 6]

or 

const obj1 = {firstName: Phillip}
const obj2 = {lastName: lee}

const mergedObj = {
    ...obj1
    ...obj2
}
console.log(mergedObj);
//{firstName: Phillip, lastName: lee}


IIFE 
A function which is defined and called straight away. 
(function () {
    console.log("My name is paul);
})();
//"My name is paul"

(myName = function (name = paul){
    console.log("My name is" + name);
})();
//my name is paul 

myName("bill")
// console.log will be bill