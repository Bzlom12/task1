'use strict';

let money, time, expenses, optionalExpenses,
    income, savings, appData,
    question, question2, question3, question4;
    
money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате", "YYYY-MM-DD");

appData = { 
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

/*question = prompt("Введите обязательную статью расходов в этом месяце", "");
question2 = prompt("Во сколько обойдется?", "");
appData.expenses[question] = question2;*/

/*question3 = prompt("Введите обязательную статью расходов в этом месяце", "");
question4 = prompt("Во сколько обойдется?", "");
appData.expenses[question3] = question4;
console.log(appData.expenses);*/

//Способ 1 (новый)
let i = 0;
/*while (i < 2) {
    question = prompt("Введите обязательную статью расходов в этом месяце", "");
    question2 = prompt("Во сколько обойдется?", "");
    if ( (typeof(question)) === 'string' && question != null && question2 != null
        && question != '' && question2 != '' && question.length < 50 ) {
        console.log("done");
        appData.expenses[question] = question2;
    i++; 
        }
} */       

//Способ 2 (новый)
do {question = prompt("Введите обязательную статью расходов в этом месяце", "");
    question2 = prompt("Во сколько обойдется?", "");
    if ( (typeof(question)) === 'string' && question != null && question2 != null
        && question != '' && question2 != '' && question.length < 50 ) {
        console.log("done");
        appData.expenses[question] = question2;
        i++; 
    }    
}
while (i < 2);




//Способ 1
/*for (let i = 0; i < 2; i++) {
    question = prompt("Введите обязательную статью расходов в этом месяце", "");
    question2 = prompt("Во сколько обойдется?", "");
    
    if ( (typeof(question)) === 'string' && question != null && question2 != null
        && question != '' && question2 != '' && question.length < 50 ) {
        console.log("done");
        appData.expenses[question] = question2;
    } else {
        i--;
    }
}*/

//Способ 2
/*for (let i = 0; i < 2; i++) {
    question = prompt("Введите обязательную статью расходов в этом месяце", "");
    question2 = prompt("Во сколько обойдется?", "");

    ( (typeof(question)) === 'string' && question != null && question2 != null
        && question != '' && question2 != '' && question.length < 50) ? 
        appData.expenses[question] = question2 : i--;
}*/





appData.moneyPerDay = (appData.budget / 30 );

alert("Ваш бюджет на день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}