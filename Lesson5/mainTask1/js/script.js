'use strict';

let menuItem = document.getElementsByClassName("menu-item"),
    menuMain = document.querySelector(".menu"),
    advertising = document.getElementsByClassName("adv"),
    col = document.getElementsByClassName('column'),
    tit = document.getElementById("title"),
    bod = document.querySelector("body"),
    prom = document.getElementById("prompt");

// console.log(prom);
// console.log(bod);
// console.log(menuItem);
// console.log(tit);
// console.log(men);
// console.log(advertising);
// console.log(col);

col[1].removeChild(advertising[0]);
tit.textContent  = 'Мы продаем только подлинную технику Apple';
bod.style.background = "url(img/apple_true.jpg) center no-repeat";
let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menuMain.appendChild(li);
menuMain.insertBefore(menuItem[2], menuItem[1]);

let preTitle = document.createElement('h2');
let question = prompt("Какое у Вас отношение к технике apple?", "");
preTitle.textContent = question;
prom.appendChild(preTitle);


