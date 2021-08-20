
// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
     //// a) Create a test with an expect statement using the variables provided.
     //// b) Create the function that makes the test pass.

//-------------------- CODE BLOCK START ----------------------// Week-5-assessment-Jatded1d9l7 -Code Challenges- -Question 1-

// Pseudo Code
// Function that takes in a string
// Returns a coded message
// Converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// split the string into an array using .split
// Then use .map to iterate through each letter of the split array
// Set conditional statements for each condition (code word)


var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


describe("codeWord", () => {
  it("converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
    expect(codeWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codeWord(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codeWord(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

const codeWord = (string) => {
  let newString = string.split("").map(value => {
      if(value.toLowerCase() === "a"){
          return "4"
      }else if(value.toLowerCase() === "e"){
          return "3"
      }else if(value.toLowerCase() === "i"){
          return "1"
      }else if(value.toLowerCase() === "o"){
          return "0"
      }else{return value}
  })
  return newString.join("")
}

//-------------------- CODE BLOCK END ----------------------// Week-5-assessment-Jatded1d9l7 -Code Challenges- -Question 1-





// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.
     //// a) Create a test with an expect statement using the variable provided.
     //// b) Create the function that makes the test pass.

//-------------------- CODE BLOCK START ----------------------// Week-5-assessment-Jatded1d9l7 -Code Challenges- -Question 2-

// Pseudo Code 
// function that takes in an array 
// returns all the words that contain the letter a
// iterate throught the array using .filter 
// lowercase all words using .toLowerCase
// filter words that contain lowercase a

describe("fruits", () => {
  it("returns all the words that contain the letter a", () => {
    expect(fruits(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
    expect(fruits(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
  })
})

const fruits = (array) => {
  return array.filter(value => {
      return value.toLowerCase().includes("a")
  })
}


//-------------------- CODE BLOCK END ----------------------// Week-5-assessment-Jatded1d9l7 -Code Challenges- -Question 2-






// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
     //// a) Create a test with an expect statement using the variable provided.
     //// b) Create the function that makes the test pass.

//-------------------- CODE BLOCK START ----------------------// Week-5-assessment-Jatded1d9l7 -Code Challenges- -Question 3-

// Pseudo Code 
// Function that takes in an array of 5 numbers
// Determmines if the array is a "full house"
// Full house is exactly one pair and one three of a kind 
// Iterate through the array 
// Checks for (2 like numbers)
// Checks for (3 like numbers)


var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
  it("determines whether or not the array is a 'full house'", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

const fullHouse = (array) => {
  let countArray = []
  for(let i of array){
      countArray[i] = (countArray[i] || 0) + 1
  }
  let vals = Object.values(countArray)
  if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true
  } else {return false}
}


//-------------------- CODE BLOCK END ----------------------// Week-5-assessment-Jatded1d9l7 -Code Challenges- -Question 3-