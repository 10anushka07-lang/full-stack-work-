let a = [5, 6, 7, 8, 9];
let b = [...a, 10, 11, 12];
console.log(b);
let a1 = [{
    name: "John", age: 30
},
{ name: "anushka", age: 10 }];
let b2 = { ...a1, city: "New York" };
console.log(b2);

//let shirtData={shirtSize:32};
//console.log(shirtData?.shirtSize);
//nullish coalescing operator
let shirtData="S";
console.log(shirtData ?? "L");
//setTimeout
let task1=()=>{
    console.log("Task 1 completed");
}
let handle=()=>{
    console.log("Handling task");
}
setTimeout(() => {
    task1();
}, 2000);
//handle();
//setInterval
//setInterval(() => {task1();}, 2000);
//get date and time
//define a function to get the current date and time
let getCurrentDateTime=()=>{
let now = new Date();
let hour=now.getHours();
let minute=now.getMinutes();
let second=now.getSeconds();
let date=now.getDate();
let todaydate=now.toLocaleDateString();
return { hour, minute, second, date, todaydate };
}
console.log(getCurrentDateTime());
setInterval(() => {
   console.log(getCurrentDateTime());
}, 1000);

//template literals
//callback functions
let task1 = (Task2, Task3) => {
    setTimeout(() => {
        console.log("Task 1 completed");
        Task2(Task3);
    }, 2000);
};
let task2 = () => {
    setTimeout(() => {
        console.log("Task 2 completed");
    }, 1500);
};
let task1 = () => {

    let msg = false;

    return new Promise((resolve, reject) => {
        if(msg===true){
  setTimeout(() => {
            resolve("Task completed3");
        }, 2000);
        }else{
            reject("Task failed3");
        }
      
    })
};
let task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task completed2");
        }, 1500);
    })
};

let task3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task completed1");
        }, 1000);
    })
};
//let promise = Promise.all([task1(), task2(), task3()]);


promise.then((results) => {
    console.log(results);
})
    .catch((err) => {
        console.log(err);
    });
let Execution = async () => {
    let t1 = await Task1();
    let t2 = await Task2();
    let t3 = await Task3();

    console.log(t1, t2, t3);
};
Execution();
