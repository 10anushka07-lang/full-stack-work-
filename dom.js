let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");

let data = {
    shoesName: "Adidas",
    shirtName: "Polo",
    watchName: "Rolex",
};

card1.innerHTML = data.shoesName;
card2.innerHTML = data.shirtName;
card3.innerHTML = data.watchName;

let elements = document.getElementsByClassName("card");
let [c1, c2, c3] = elements;

console.log(c1);

let time = document.getElementById("time");
let dateElement = document.getElementById("date");

let clock = () => {
    let currentDate = new Date();

    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();

    let todayDate = currentDate.toLocaleDateString();

    dateElement.innerHTML = todayDate;
    time.innerHTML = `${hour}:${minute}:${second}`;
};

setInterval(clock, 1000);
clock();