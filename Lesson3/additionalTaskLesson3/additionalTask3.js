'use strict';

// 1)
// let str = "урок-3-был слишком легким";
// console.log(str[0].toUpperCase() + str.substr(1));

//2)
// console.log(str[0].toUpperCase() + str.slice(1,4) + " " + str.slice(5,6) + " " + str.slice(7));

// 3)
// console.log( (str[0].toUpperCase() + str.slice(1,4) + " " + str.slice(5,6)
//      + " " + str.slice(7)).substring(19,23) + "oo" );

//4)
// let arr = [20, 33, 'Человек', 2, 3];
// arr.splice(2,1);
// console.log(arr);

// let square = (a) => a*a*a;

// let i = 0;
// while (i < 4) {
//     arr[i] = square(arr[i]);
//     i++;
// }
// let result = arr.reduce(function(sum, current) {
//     return sum + current;
//   });
// result = Math.sqrt(result);
// console.log(result);

//5)
function done(a) {
    if (a !== "string") {
        console.log(typeof(a));
        console.log("str")
    } else {
        console.log(typeof(a));
        alert("Это не строка!")
    }
    a = a.trim();
    console.log("п2");
    if (a.length > 49) {
        a = a.slice(0, 49)+ "...";
        console.log(a);
    }
}
done("  макfefeowjeofwefojwoefefоамлоифлоимивфмрогфиамифлшагимлшфгирашр");
