'use strict';

let money, time, appData,
    question, question2, question3;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате", "YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

appData = { 
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpences: function() {
        for (let i = 0; i < 2; i++) {
            question = prompt("Введите обязательную статью расходов в этом месяце", "");
            question2 = +prompt("Во сколько обойдется?", "");
            while(isNaN(question2) || question2 == "" || question2 == null) {
                question2 = +prompt("Во сколько обойдется?", "");
            }
            if ( typeof question === 'string' && question != null
                && question != '' && question.length < 50 ) {
                console.log("done");
                appData.expenses[question] = question2;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на день: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            question3 = prompt("Статья необязательных расходов?", "");
            if (typeof question3 === 'string' && question3 != null
            && question3 != '' && question3.length < 50 ) {                  
                appData.optionalExpenses[i+1] = question3;
                console.log("done");
            } else {
            i--;
            }
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = (save/100/12*percent).toFixed();
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);    
        }
    },
    chooseInCome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if (typeof items === "string" && items != "" && isNaN(items)  && items != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
            } else {
                i--;
            }
        }
        appData.income.forEach(function(item, i) {
            alert("Способы дополнительного заработка: "+ (i+1) + ") " + item);
        });
    }
    
};

for (let keys in appData) {
    console.log("Наша программа включает в себя данные: " + keys);
} 

let btn = document.getElementById("start"),
    bjt = document.getElementsByClassName("budget-value"),
    dayBjt = document.getElementsByClassName("daybudget-value"),
    lvl = document.getElementsByClassName("level-value"),
    expns = document.getElementsByClassName("expenses-value"),
    optionalExpens = document.getElementsByClassName("optionalexpenses-value"),
    inc = document.getElementsByClassName("income-value"),
    monthSave = document.getElementsByClassName("monthsavings-value"),
    yearSave = document.getElementsByClassName("yearsavings-value"),
    expItem = document.getElementsByClassName("expenses-item"),
    expItemBtn = document.getElementsByTagName("button")[0],
    optExpBtn = document.getElementsByTagName("button")[1],
    countBudjetBtn = document.getElementsByTagName("button")[2],
    optExpItem = document.querySelectorAll(".optionalexpenses-item"),
    years = document.querySelector(".year"),
    months = document.querySelector(".month"),
    days = document.querySelector(".day"),
    percents = document.querySelector(".choose-percent"),
    sums = document.querySelector(".choose-sum"),
    checkBoxs = document.querySelector(".checksavings"),
    chooseInComeLable = document.querySelector(".choose-income-label");
    
// console.log(btn);
// console.log(bjt);
// console.log(dayBjt);
// console.log(lvl);
// console.log(expns);
// console.log(optionalExpens);
// console.log(inc);
// console.log(monthSave);
// console.log(yearSave);
// console.log(expItem);
console.log(expItemBtn);
console.log(optExpBtn);
console.log(countBudjetBtn);
// console.log(optExpItem);
// console.log(years);
// console.log(months);
// console.log(days);
// console.log(percents);
// console.log(sums);
// console.log(checkBoxs);
// console.log(chooseInComeLable);