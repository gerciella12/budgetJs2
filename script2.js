'use sctrict';

let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};
/*jslint maxlen: 130*/

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательнуюстатью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}
chooseExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с депозита: " + percent);
    }
}
checkSavings();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Ежедневный бюджет:" + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
if (appData.moneyPerDay < 100) {
    console.log("минимум");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("средний");
} else if (appData.moneyPerDay > 2000) {
    console.log("высокий");
} else {
    console.log("ошибка");
}
}
detectLevel();

function chooseOptExpenses(){
    for (let i = 0; i <= 2; i++){
     let questionOptExpenses = prompt("Статья необязательных расходов?");
     appData.optionalExpenses[i]= questionOptExpenses;
     console.log (appData.optionalExpenses);
}
}

chooseOptExpenses();
