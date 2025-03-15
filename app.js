// Q1-Falsy or Truthy
//    Given two values, return the first one if it is falsy, otherwise return the second one.

//    filterOutFalsy(0, 500)-->0
//    filterOutFalsy(false, 100)-->false
//    filterOutFalsy([true, `Dog`])-->dog 

// -----------------------Ternary operator solution-------------------

function filterOutFalsy(elem1, elem2){
    return (!elem1) ? elem1 : elem2;
}
console.log(filterOutFalsy(0, 500))
console.log(filterOutFalsy(false, 100))
console.log(filterOutFalsy(true, `Dog`))

// -----------------------------IF/ELSE solution------------------------

function filterOutFalsy(elem1, elem2){
      if(!elem1){
        return elem1;
      }
      else {
        return elem2;
      }
   }
  console.log(filterOutFalsy(0, 500));
  console.log(filterOutFalsy(false, 100))
  console.log(filterOutFalsy(true, `Dog`))

// -------------------------------------------------------------------------------
  // Q2-Return the Length of any given Array. 
  //   Given an array, return its length.

  //   arrLength([1,2,3])----->3
  //   arrLength([5,0,-4,1])--->4
  //   arrLength([])---------->0
  
function arrLength(arr){
  return arr.length;
}
console.log(arrLength([1,2,3]))
console.log(arrLength([5,0,-4,1]))
console.log(arrLength([]))

// ----------------------------------------------------------
// Q3-Get the last element in an Array.
// Given an array, return the first element.

// lastElem([3,2,0,6,2])--->2
// lastElem([`dog`, `cat`, `ball`])---->`ball`
// lastElem([null, 5, false])---->false

function lastElem(arr){
  return arr[arr.length - 1]
}
console.log(lastElem([3, 2, 0, 6, 2]))
console.log(lastElem([`dog`, `cat`,  `ball`]))
console.log(lastElem([null, 5, false]))


// -------------------------------------------------------------------------------------------------
// Q4-find the sum of an array
// given an Array, return the sum of every Element.

// arrSum([2,2,2])---->6
// arrSum([100,200,500])---->800
// arrSum([0,-5,-10])---->-15
function arrSum(arr){
  let sum = 0
  for( let i=0; i < arr.length; ++i){
    sum = sum + arr[i];
  }
  return sum;
}
console.log(arrSum([2,2,2]))
console.log(arrSum([100,200,500]))
console.log(arrSum([0,-5,-10]))

//----------------------------------------------------------------------------------------------------
// Q5-add up the numbers from a single number 
// given a number, add up all the numbers from 1 to the number that is given. 
// E.G an input of 4 will give you 1 + 2 + 3 + 4, wich equals 10

// progressiveSum(3)-->6
// progressiveSum(4)-->10
// progressiveSum(600)-->180300

function progressiveSum(num){
  let sum = 0 ;
for(let i = 1; i <= num; ++i){
   sum= sum + i
}
   return sum
}
console.log(progressiveSum(3))
console.log(progressiveSum(4))
console.log(progressiveSum(600))

//-------------------------------------------------------------------------------------------------------
// Q6-Calculate the Time 
// Given a number in seconds, return this number in MM:SS fromat 

// calcTime(66)--->`01:06`
// calcTime(50)--->`00:50`
// calcTime(300)--->`05:00`

function calcTime(seconds){
  let timerminutes = Math.floor(seconds / 60)
  let timerSeconds = seconds % 60

if (timerminutes.toString().length === 1){
   timerminutes = `0` + timerminutes
}
if(timerSeconds.toString().length === 1){
  timerSeconds = `0` + timerSeconds
}

  return timerminutes + `:` + timerSeconds;
}
console.log(calcTime(66))
console.log(calcTime(50))
console.log(calcTime(300))

//----------------------------------------------------------------------------------------------------
// Q7- Find the largest Number
// Given an array of numbers, Return the largest number of that array.

// getMax([5, 100, 0])--->100
// getMax([12, 10, -20])->12
// getMax([-300, -100, -200])-->-100

function getMax(arr){
 let max = arr[0]
for( let i = 0; i < arr.length; ++i){
   if (arr[i] > max){
    max = arr[i];
   }
}
    return max;
}

console.log(getMax([5, 100, 0]))
console.log(getMax([12, 10, -20]))
console.log(getMax([-300, -100, -200]))

//-----------------------------------------------------------------------------------------------------------
// Q8-Reverse a String 
// Given a string, return the reversed string. 

// reverseString(`abc`)----> `cba`
// reverseString(`David`)--->`divaD`
// reverseString(`This is cool`)-->`looc si sihT`
//-------------------------------------------------------------------------------
// us an incrementing for loop----------------------------------------------------
function reverseString(str){
  let reversedString = ``;
  for (let i = 0; i < str.length; ++i){
   reversedString = str[i] + reversedString
  }
   return reversedString
}
console.log(reverseString(`abc`))
console.log(reverseString(`David`))
console.log(reverseString(`This is cool`))
//-------------------------------------------------------------------------------
// us a decrementing for loop-----------------------------------------------------
function reverseString(str){
  let reversedString = ``;
  for (let i = str.length - 1; i >= 0 ; --i){
   reversedString += str[i]
  }
   return reversedString
}
console.log(reverseString(`abc`))
console.log(reverseString(`David`))
console.log(reverseString(`This is cool`))
//-------------------------------------------------------------------------------
// use the array reverse property. ----------------------------------------------
function reverseString(str){
   return str.split(``).reverse().join();
}
console.log(reverseString(`abc`))
console.log(reverseString(`David`))
console.log(reverseString(`This is cool`))
//------------------------------------------------------------------------------------------------------------------
// Q9-turn every element in an arrar into 0.
// given an array of elements, return the same length array filled with 0's.

// convertToZeros([5,100,0])---->[0,0,0]
// convertToZeros([12])---->[0]
// convertToZeros([1,2,3,4,5])---->[0,0,0,0,0]
//---------------------------------------------
//------------------------For Loop Solution-----------------------------------------
function convertToZeros(arr){
for(let i = 0; i < arr.length ; ++i){
   arr[i] = 0
}
   return arr;
}
console.log(convertToZeros([5, 100, 0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([1,2,3,4,5]))
//--------------------------------------------------------
//---to create a new array and not replace exhisting array---
//--------------------------------------------------------
function convertToZeros(arr){
  let newArr = []
for(let i = 0; i < arr.length ; ++i){
   newArr[i] = 0
}
   return newArr ;
}
console.log(convertToZeros([5, 100, 0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([1,2,3,4,5]))
//----------------------------------------------
//------------------------Array `fill` solution-------------------------------------
function convertToZeros(arr){
  return new Array(arr.length).fill(0)
}
console.log(convertToZeros([5, 100, 0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([1,2,3,4,5]))
//----------------------------------------------
//------------------------Array `Map` Solution---------------------------------------
function convertToZeros(arr){
  return arr.map(elem => 0)
}
console.log(convertToZeros([5, 100, 0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([1,2,3,4,5]))

//---------------------------------------------------------------------------------------------------
// Q10-Filer out all the apples
// given an array of fruits, if it is an apple remove it from the array.

// removeApples([`Banana`, `Apple`, `Orange`, `Apple`])--->[`Banana`, `Orange`]
// removeApples([`Tomato`, `Orange`, `Banana`])--->[`Tomato`, `Orange`, `Banana`]
// removeApples([`Banana`, `Orange`, `Apple`])--->[`Banana`, `Orange`]
//--------------------------------------------------------------
//-----------------------For Loop Solution----------------------
function removeApples(arr) {
 let noApples = []
  for (let i = 0; i < arr.length; ++i){
    if (arr[i] !== `Apple`){
      noApples.push(arr[i]);
    }
  }
  return noApples
}
console.log(removeApples([`Banana`, `Apple`, `Orange`, `Apple`]))
console.log(removeApples([`Tomato`, `Orange`, `Banana`]))
console.log(removeApples([`Banana`, `Orange`, `Apple`]))
//--------------------------------------------------------------
//----------------------Array `Filter` Solution-----------------
function removeApples(arr) {
   return arr.filter(elem => elem !== `Apple`)
 }

console.log(removeApples([`Banana`, `Apple`, `Orange`, `Apple`]))
console.log(removeApples([`Tomato`, `Orange`, `Banana`]))
console.log(removeApples([`Banana`, `Orange`, `Apple`]))

//-------------------------------------------------------------------------------------------------------
// Q11- Filter out all the flasy values. 
// Given an array of values, filter out all the falsy values and only reutrn the truthy values. 

// filterOutFalsy(["", [], 0, null, undefined, "0"])-->[[],"0"]
// filterOutFalsy([`Tomato`, `Orange`, `Banana`, false])-->[`Tomato`, `Orange`, `Banana`]
// filterOutFalsy([`Banana`, `Orange`, `Apple`])-->[`Banana`, `Orange`]
// //-----------------------For Loop Solution--------------------------
//------------------------------------------------------------------
function filterOutFalsyItems(arr){
    let truthyarr = [];
    for (let i = 0; i < arr.length; ++i){
      if (!!arr[i] === true){
        truthyarr.push(arr[i])
      }
    }
    return truthyarr
}
console.log(filterOutFalsyItems(["", [], 0, null, undefined, "0"]))
console.log(filterOutFalsyItems([`Tomato`, `Orange`, `Banana`, false]))
console.log(filterOutFalsyItems([`Banana`, `Orange`, `Apple`]))
//----------------------Array `Filter Solution----------------------
//------------------------------------------------------------------
function filterOutFalsyItems(arr){
  return arr.filter(elem => !!elem === true)
}
console.log(filterOutFalsyItems(["", [], 0, null, undefined, "0"]))
console.log(filterOutFalsyItems([`Tomato`, `Orange`, `Banana`, false]))
console.log(filterOutFalsyItems([`Banana`, `Orange`, `Apple`]))

//---------------------------------------------------------------------------------------------------
// Q12-Truthy to true amd Falsy to false. 
// Given an array of truthy and flasy values, return the same array of elements to its boolean value. 

// convertToBoolean([500, 0, "David", "", []])----->[true, false, true, false, true]

function convertToBoolean(arr){
 return arr.map(elem => !!elem)
}
console.log(convertToBoolean([500, 0, "David", "", []]))