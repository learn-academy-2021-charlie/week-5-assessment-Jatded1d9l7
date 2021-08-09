// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { string } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Add appropriate dependencies to the repository:
// $ yarn add jest
// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
     //// a) Create a test with an expect statement using the variables provided.
     //// b) Create the function that makes the test pass.

//pseudo code 
// function that takes in a string codedMessage = ('string') =. {} returns coded message
// coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 
// 1. method that maps over each index of the string. Possible for loop or .map
// 2. method that replaces 'a, e, i , o' with 4310 
// 3.Returns a coded message


describe("codedMessage", () => {
    test("returns a coded message", () => {
      expect(secretCodeWord1()).toEqual("L4ck4d41s1c4l")
    })
  })

CodedMessage = ("string") => {
    let message = 0;
    for (let i = 0; i < string.length; i++){
       return 
        }
    }
}


var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.
     //// a) Create a test with an expect statement using the variable provided.
     //// b) Create the function that makes the test pass.

// Pseudo code 
// function that takes in an array allWordsA = [array] => {} returns all words that contain the letter a,
// 1. Method that scans each word in an array and filters just the words that contain the letter "a"
// 2. Conditional statement IF word in array contains "A" return word

describe("allWordssA", () => {
    test("returns all words that contain the letter a", () => {
      expect(arrayOfWords1()).toEqual(["Apple", "Banana", "Plum", "Orange", "Kiwi"])
    })
  })

allWordsA = [] => {
    let newArray = []
    array.map
}

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
     //// a) Create a test with an expect statement using the variable provided.
     //// b) Create the function that makes the test pass.

//pseudo code 
// Function that takes in an array of 5 numbers fullHouse = [numbers] => {} 
// Determines whether or not the array is a 'full house'
// A full house is exacly one pair and one three of a kind. 
// method that looks at each number in the array and determines if there are any duplicates
// method that looks at each number in the array and determines if there are any triplicates 

describe("fullHouse", () => {
    test("return exacly one pair and one three of a kind", () => {
      expect(hand1()).toEqual("true")
    })
  })

fullHouse = [] => {
    
}


var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false



