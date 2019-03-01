let num, result, exp, resultB;
num = 33721;

result = num.toString().split("").reduce(function(prev, current){
    return parseInt(prev) * parseInt(current)
})

console.log(result);

exp = result**3;
resultB = exp.toString().split("");
alert(resultB[0] + resultB[1]);


