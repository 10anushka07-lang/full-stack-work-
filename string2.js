
// WRITE A FUNCTION THAT CONCATENATES ALL THE STRINGS IN AN ARRAY INTO A SINGLE STRING 
let ar = ["anushka", "nishita", "deepika", "riddhinangia", "agrima"]
let n_ar=ar.reduce((result, ar) => result + ar, "")
console.log(n_ar)