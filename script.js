let money,
    time;

function checkBudget() {

    time = prompt(' Введите дату в формате YYYY-MM-DD', "");
    while (money == "" || money == null || isNaN(money)) {
        money = +prompt('Ваш бюджет на месяц?', "");
    }
}

checkBudget();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true

};


for (let i = 0; i < 2; i++) {
    let a = prompt('“Введите обязательную статью расходов в этом месяце”'),
        b = prompt('“Во сколько обойдется?”');
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '') {
        appData.expenses[a] = b;
    } else {
        i--;
    }

}

appData.daily = (appData.budget / 30).toFixed();
alert("Daily income :" + appData.daily);

function checkSaving() {
    let save = +prompt("Какова сумма накоплений"),
        percent = +prompt("Процентная ставка");
    if (appData.savings == true) {
        appData.monthIncome = (save / 100 / 12 / percent).toFixed();
        alert("Ваш месячный доход от депозита" + appData.monthIncome);

    }
}

checkSaving();

 function detectDayBudget(){
  appData.dayBudget = (appData.monthIncome / 30 ).toFixed();
  alert('Ваш ежедневный доход от депозита ' + appData.dayBudget);
 }
 detectDayBudget();

 function detectLevel(){
if (appData.daily < 5000) {
    alert("You are Poor,sorry");
} else if (appData.daily > 25000 && appData.daily < 75000) {
    alert("You are Normal");
} else if (appData.daily > 100000) {
    alert("You are Rich");
} else {
    alert("Ooops,error");
}

 }
 detectLevel();

 function chooseOptExpenses(){
     for(let i = 1 ; i < 4; i++){
         let opt = +prompt("Статья необязательных расходов?");
         appData.optionalExpenses[i] = opt;
     }
     
 }
 chooseOptExpenses();