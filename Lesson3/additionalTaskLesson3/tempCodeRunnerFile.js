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