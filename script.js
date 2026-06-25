
function addExpense() {
    const desc = document.getElementById('desc').value;
    const amount = document.getElementById('amount').value;
    
    if(!desc || !amount) return;

    const expense = { desc, amount, id: Date.now() };
    const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    
    renderExpenses();
}

function renderExpenses() {
    const list = document.getElementById('expenseList');
    const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    list.innerHTML = expenses.map(e => `<li>${e.desc}: $${e.amount}</li>`).join('');

    const total = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);
    document.getElementById('total').innerText = total;
}
 function clearAll() {
    localStorage.removeItem('expenses');
    renderExpenses();
}



