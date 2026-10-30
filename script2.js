

let task=()=>{
    console.log("i am task func");
};
let handle=()=>{
    console.log("i am handle func");
};
setTimeOut(()=>{Task();},2000);
handle();