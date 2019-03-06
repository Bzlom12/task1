'use strict';

// 1)
let str = "урок-3-был слишком легким";
let newStr = str[0].toUpperCase() + str.substr(1);
console.log(newStr);

// 2)
newStr = newStr.replace("-3-"," 3 ");
console.log(newStr);
// newStr = str[0].toUpperCase() + str.slice(1,4) + " " + str.slice(5,6) + " " + str.slice(7);

// 3)
let a = newStr.slice(-6);
a = a.replace('легким','легкоо');
console.log(a);


// 4)
let arr = [20, 33, 'Человек', 2, 3];
arr.splice(2,1);
console.log(arr);

let i = 0;
while (i < 4) {
    arr[i] = Math.pow(arr[i], 3);
    i++;
}
console.log(arr);
let result = arr.reduce(function(sum, current) {
    return sum + current;
  });
result = Math.sqrt(result);
console.log(result);

// 5)
function done(a) {
    console.log(a);
    if (typeof a === "string" ) {
        console.log(typeof(a));
        a = a.trim();
        if (a.length > 49) {
            a = a.slice(0, 49)+ "...";
            console.log(a);
        }
    } else {
        console.log(typeof(a));
        alert("Это не строка!");
    }
}
done(        "kjbgguygyugyfftydrtdrtdrtdrtdytdytfuyfuygfyugfgfuygyugguyguyggggg7ugiu7gigig7g7gu");
