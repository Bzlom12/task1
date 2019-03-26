'use strict';

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
    
inputRub.addEventListener('input', function() {
    let request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {
            return new Promise(function(resolve, reject) {
                if (request.readyState < 4) {
                    resolve(inputUsd.value = "Загрузка");
                } else if (request.readyState === 4 && request.status == 200) {
                    let data = JSON.parse(request.response);
                    resolve(inputUsd.value = inputRub.value / data.usd);
                } else {
                    reject(inputUsd.value = "Что-то пошло не так!");   
                }
        });
    });   
});