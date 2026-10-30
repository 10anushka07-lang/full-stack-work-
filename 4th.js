let a = [10,20,0,30,40,50];
function filterArray(arr) {
    let filteredArr = arr.filter(function(value) {
        return value !== 0;
    });
    return filteredArr;
}
let b = filterArray(a);
console.log(b);