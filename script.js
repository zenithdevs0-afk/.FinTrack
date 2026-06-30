
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



// دالة تحديث الرسم البياني
function updateChart(expenses) {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    // تدمير الرسم القديم قبل إنشاء الجديد
    if(window.myChartInstance) window.myChartInstance.destroy();
    
    window.myChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: expenses.map(e => e.desc),
            datasets: [{
                data: expenses.map(e => e.amount),
                backgroundColor: ['#4f46e5', '#ef4444', '#10b981', '#f59e0b']
            }]
        }
    });
}

function addExpense() {
    const desc = document.getElementById('desc').value;
    const amount = document.getElementById('amount').value;
    const user = localStorage.getItem('currentUser') || 'guest';
    
    const expense = { desc, amount, id: Date.now() };
    
    // تخزين البيانات باسم المستخدم
    const expenses = JSON.parse(localStorage.getItem('expenses_' + user) || '[]');
    expenses.push(expense);
    localStorage.setItem('expenses_' + user, JSON.stringify(expenses));
    
    renderExpenses();
    updateChart(expenses); // تحديث الرسم البياني
}






