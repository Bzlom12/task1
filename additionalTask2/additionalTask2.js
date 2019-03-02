'use strict';

let week;
week = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday'];

//Вывести на экран все дни недели Вар 1;
/*function printArray(array) {
    document.write(week.join(' '));
}
printArray();*/

//Вывести на экран все дни недели Вар 2;
/*function printArray(array) {
    for (let i = 0; i < 7; i++) {
        document.write(week[i] + " ");
    }
}
printArray();*/

//Каждый из них с новой строчки;
/*function printArray2(array) {
    document.write(week.join('<br>'));
}
printArray2();*/
   
// Выходные дни - жирным шрифтом;  
/*function printArray(array) {
    for (let i = 0; i < 4; i++) {
        document.write(week[i] + " ");
    }
    document.write(week[5].bold() + " " + week[6].bold());
}
printArray();*/

// Текущий день - курсивом;
/*let day = "Tuesday";
for (let i = 0; i < 7; i++) {
    if (day == week[i]) {
        document.write(week[i].italics() + " ");
        continue;
    }
    document.write(week[i] + " ");
}*/

//Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)
let arr = [];
arr[0] = "123";
arr[1] = "721";
arr[2] = "222";
arr[3] = "723";
arr[4] = "333";
arr[5] = "444";
arr[6] = "355";

arr.forEach((e) => {
   if (e[0] == '3' || e[0] == '7') {
     console.log(e);
   }
 });