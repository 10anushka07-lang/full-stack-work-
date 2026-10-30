// Write a function that takes an array of strings and returns a new array
// where each string is capitalized.

let ar = ["anushka", "aayush", "deepika", "rohan", "agrima"]
//let n_ar =ar.map(ar =>ar.charAt(0).toUpperCase() + ar.slice(1))

function capitalizeStrings(ar1) {
    return ar1.map(ar1 => ar1.toUpperCase())
}
console.log(capitalizeStrings(ar))
