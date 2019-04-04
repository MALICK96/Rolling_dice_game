/* This function will be use to calculate the age of each year of birth in the years array and find out if each ages is >= 18;
*/

let years = [1996, 1994, 1986, 1988, 2000, 2002];
function calc(arr, fn) {

    let arrRes = [];
    // cycle through the indexes
    for (let i = 0; i < arr.length; i++) {
        //  call the fn function with i'th index of the // array before pushing it into the array
        arrRes.push(fn(arr[i]));

    }

    // Return the arrRes
    return arrRes;
}

// function to find out the ages 
function calcAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 18;
} 
var ages = calc(years, calcAge);

var fullAge = calc(ages, isFullAge);

console.log(ages); 

console.log(fullAge);