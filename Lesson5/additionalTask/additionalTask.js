'use strict';

let year = new Date().getFullYear(),
    hour = new Date().getHours(),
    min = new Date().getMinutes(),
    sec = new Date().getSeconds(),
    day = new Date().getDate(),
    month = new Date().getMonth();

// 1) Выведите на страницу текущую дату и время в формате.
// document.write(hour + ":"+ min + ":" + sec + " " + day + "." + month + "." + year);

let zer = (a) => {
    return (a < 10)? "0" + a : a;
};  

let get = function getDate(h, m, s, d, mon) {
    document.write(zer(h) + ":" + zer(m) + ":" + zer(s) + " " + zer(d) + "." + zer(mon) + "." + year);
}
get(hour, min, sec, day, month);

// 3) Функция, которая выводит на страницу текущий день недели на русском языке.
// function week() {
//     let arr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
//     day1 = new Date();
//     let dayWeek = arr[day1.getDay()];
//     alert(dayWeek);
// }
// week();

// // 4) Функция, которая выводит на страницу разницу между двумя датами в количестве дней.
// let div1 = document.createElement("input"),
//     div2 = document.createElement("input"),
//     div3 = document.createElement("div"),
//     btn = document.createElement("button");
// document.body.appendChild(div1);
// div1.classList.add("block-input");

// document.body.appendChild(div2);
// div2.classList.add("block-input");

// document.body.appendChild(div3);
// div3.classList.add("block");
// div3.style.height = "20px";
// div3.style.width = "346px";
// div3.style.backgroundColor = "black";
// div3.style.color = "white";
// div3.style.textAlign = "center";
// div3.textContent = "Введите дату в формате YYYY-MM-DD"

// document.body.appendChild(btn);
// btn.classList.add("block-button");
// btn.style.borderRadius = "50px";
// btn.style.height = "20px";
// btn.style.width = "80px";
// btn.textContent = "Расчет";

// let day1 = document.getElementsByClassName("block-input")[0],
//     day2 = document.getElementsByClassName("block-input")[1];

// btn.addEventListener('click', function() {
//     let a, b, c;
//     a = new Date (Date.parse(day1.value)).getTime();
//     b = new Date (Date.parse(day2.value)).getTime();
//     console.log(a);
//     console.log(b);
//     c = (a - b)/1000/60/60/24;
//     div3.textContent = c;
// });