'use strict';

let money, time, appData, sum,
    question, question2, question3;

let startBtn = document.getElementById("start"),
    bjt = document.getElementsByClassName("budget-value")[0],
    dayBjt = document.getElementsByClassName("daybudget-value")[0],
    lvlValue = document.getElementsByClassName("level-value")[0],
    expns = document.getElementsByClassName("expenses-value")[0],
    optionalValue = document.getElementsByClassName("optionalexpenses-value")[0],
    optExpItem = document.querySelectorAll(".optionalexpenses-item"),
    inc = document.getElementsByClassName("income-value")[0],
    monthSave = document.getElementsByClassName("monthsavings-value")[0],
    yearSave = document.getElementsByClassName("yearsavings-value")[0],
    expItem = document.getElementsByClassName("expenses-item"),
    expItemBtn = document.getElementsByTagName("button")[0],
    optExpBtn = document.getElementsByTagName("button")[1],
    countBudjetBtn = document.getElementsByTagName("button")[2],
    years = document.querySelector(".year-value"),
    months = document.querySelector(".month-value"),
    days = document.querySelector(".day-value"),
    percents = document.querySelector(".choose-percent"),
    sums = document.querySelector(".choose-sum"),
    checkBoxs = document.querySelector(".checksavings"),
    chooseInComeLable = document.querySelector(".choose-income");  

// Кнопка "Начать расчет"
startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате", "YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "");
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    bjt.textContent = money.toFixed();
    years.value = new Date(Date.parse(time)).getFullYear();
    months.value = new Date(Date.parse(time)).getMonth() + 1;
    days.value = new Date(Date.parse(time)).getDate();
});

// Кнопка "Утвердить" Обязательные расходы
expItemBtn.addEventListener('click', function() {
    sum = 0;
    for (let i = 0; i < expItem.length; i++) {
        if (expItem[i].value != "" ) {
            question = expItem[i].value;
            question2 = expItem[++i].value;
            appData.expenses[question] = question2;
            sum += +question2;  
        } 
    }
    expns.textContent = sum;
});

function validNum() {
    let reg = /[^\d]/;
    let value2 = expItem[1].value;
    for (let i = 1; i < expItem.length; i= i + 2) {
        expItem[i].addEventListener('input', function(e) {
           let value = e.target.value;
           expItem[i]
        //    console.log(value2);
            if (!value.match(reg)) {
                expItem[i].value = value;
                return false;
            } else {
                expItem[i].value = value2;
                return false;
            }
        });
    }
}
validNum();

// Кнопка "Утвердить" необязательные расходы
optExpBtn.addEventListener('click', function() {
    if (optionalValue.textContent == "") {
        for (let i = 0; i < optExpItem.length; i++) {
            if (optExpItem[i].value != "") {
                question3 = optExpItem[i].value;
                appData.optionalExpenses[i+1] = question3;
                optionalValue.textContent  += appData.optionalExpenses[i+1] + " ";
            }
        }
    } else {
        optionalValue.textContent = "";
        for (let i = 0; i < optExpItem.length; i++) {
        optExpItem[i].value = "";
        }
    }   
});
 
// check optExp
function valid() {
    let reg = /[^А-ЯЁ][а-яё]*$/ig,
        value2 = optExpItem[2].value;
    for (let i = 0; i < optExpItem.length; i++) {
        optExpItem[i].addEventListener('input', function(e) {
            let value = e.target.value;

            if (!value.match(reg)) {
                optExpItem[i].value = value;
            
                return false;
            } else {
                optExpItem[i].value = value2;
            
                return false;
            }
        });
    }
}
valid();
 

// Кнопка "Расчет дневного бюджета"
countBudjetBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
        dayBjt.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            lvlValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            lvlValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            lvlValue.textContent = "Высокий уровень достатка";
        } else {
            lvlValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBjt.textContent = "Произошла ошибка";
    }
});

// статьи возможного дохода через запятую
chooseInComeLable.addEventListener('input', function() {
    if (isNaN(chooseInComeLable.value)) {
        let items = chooseInComeLable.value;
        appData.income = items.split(', ');
        inc.textContent = appData.income;
    }
});

// Галочка savings
checkBoxs.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

// Сумма накоплений
sums.addEventListener('input', function() {
    if (appData.savings == true && sums.value !== "string" ) {
        let sum = +sums.value,
            percent = +percents.value;
            appData.monthIncome = (sum/100/12*percent).toFixed();
            appData.yearIncome = (sum/100*percent).toFixed();

            monthSave.textContent = appData.monthIncome;
            yearSave.textContent = appData.yearIncome;
    }
});

// Процент накоплений
percents.addEventListener('input', function() {
    if (appData.savings == true && percents.value !== "string") {
        let sum = +sums.value,
            percent = +percents.value;
            console.log(typeof percents.value);
            appData.monthIncome = (sum/100/12*percent).toFixed(1);
            appData.yearIncome = (sum/100*percent).toFixed(1);

            monthSave.textContent = appData.monthIncome;
            yearSave.textContent = appData.yearIncome;
    }
});

appData = { 
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false, 
};