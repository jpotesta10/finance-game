let balance = 1000;
let income = 100;
let expenses = 50;

function updateFinanceOverview() {
    document.getElementById('balance').innerText = balance;
    document.getElementById('income').innerText = income;
    document.getElementById('expenses').innerText = expenses;
}

function earnIncome() {
    balance += income;
    updateFinanceOverview();
    alert("You've earned income!");
}

function payExpenses() {
    balance -= expenses;
    updateFinanceOverview();
    alert("Expenses have been paid.");
}

function invest() {
    const investmentReturn = 50; // Simplified fixed return for demonstration
    balance += investmentReturn;
    updateFinanceOverview();
    alert("Your investment paid off!");
}

updateFinanceOverview();
