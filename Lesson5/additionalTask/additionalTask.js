'use strict';

let year = new Date().getFullYear(),
    hour = new Date().getHours(),
    min = new Date().getMinutes(),
    sec = new Date().getSeconds(),
    day = new Date().getDate(),
    month = new Date().getMonth();

// 1) Выведите на страницу текущую дату и время в формате   
// alert(hour + ":"+ min + ":" + sec + " " + day + "." + month + "." + year);

// 2) Напишите функцию
let getDate = function getDayMonth(date) {     
    let newDate = 0;
    if (date < 10) {
        return newDate = "0"+ date;
    }
}

let a = getDate(day),
    b = getDate(month+1);

alert(hour + ":"+ min + ":" + sec + " " + a + "." + b + "." + year);