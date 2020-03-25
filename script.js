'use sctrict';
let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
/*jslint maxlen: 130*/


/*for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательнуюстатью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
}*/


/*let i = 0;
while (i < 2) {
    let a = promt("Введите обязательнуюстатью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }
        i++;
    }*/

    /*let i = 0;
    do{
        let a = promt("Введите обязательнуюстатью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
        }
        i++; 
    }
    while (i < 2)
    */


    appData.moneyPerDay = appData.budget / 30;

    alert("Ежедневный бюджет:" + appData.moneyPerDay);

    if (appData.moneyPerDay < 100) {
        console.log("минимум");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("средний");
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокий");
    } else {
        console.log("ошибка");
    }