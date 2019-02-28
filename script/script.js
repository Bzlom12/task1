`use strict`;

let money, time, expenses, optionalExpenses,
    income, savings,
    question, question2, question3, question4;
    
money = prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате", "YYYY-MM-DD");

appData = {
    money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

question = prompt("Введите обязательную статью расходов в этом месяце", "");
question2 = prompt("Во сколько обойдется?");
appData.expenses[question] = question2;
// console.log(appData.expenses);

question3 = prompt("Введите обязательную статью расходов в этом месяце", "");
question4 = prompt("Во сколько обойдется?");
appData.expenses[question3] = question4;
// console.log(appData.expenses);
alert("Ваш бюджет на день "+ appData.money/30);