
// global scope 
a = 20;

function abc {
 console.log(a); // can be called 
}
// local scope
function xyz() {
    var a = 10;
    console.log(a); // can be called 
}
// but a cannot be called outside the function