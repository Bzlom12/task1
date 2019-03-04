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
    savings: true
};

function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        question = prompt("Введите обязательную статью расходов в этом месяце", "");
        question2 = +prompt("Во сколько обойдется?", "");
        while(isNaN(question2) || question2 == "" || question2 == null) {
            question2 = +prompt("Во сколько обойдется?", "");
        }
        if ( (typeof(question)) === 'string' && question != null
            && question != '' && question.length < 50 ) {
            console.log("done");
            appData.expenses[question] = question2;
        } else {
            i--;
        }
    }
}
chooseExpences();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на день: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        question3 = prompt("Статья необязательных расходов?", "");
        if ((typeof(question3)) === 'string' && question3 != null
        && question3 != '' && question3.length < 50 ) {                  
            appData.optionalExpenses[i+1] = question3;
            console.log("done")
        } else {
        i--;
        }
    }
}
chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = (save/100/12*percent).toFixed();
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);    
    }
}
checkSavings();