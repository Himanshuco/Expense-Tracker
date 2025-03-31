const form = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeSelect = document.getElementById('type');
const transactionTable = document.getElementById('transaction-table').getElementsByTagName('tbody')[0];
const totalAmount = document.getElementById('total-amount');
let transactions = [];
let balance = 0;

function updateBalance() {
    totalAmount.textContent = `$${balance.toFixed(2)}`;
}

function renderTransactions() {
    transactionTable.innerHTML = '';
    transactions.forEach((transaction, index) => {
        const row = transactionTable.insertRow();
        row.innerHTML = `
            <td>${transaction.description}</td>
            <td>$${transaction.amount}</td>
            <td>${transaction.type}</td>
            <td><button class="delete" onclick="deleteTransaction(${index})">Delete</button></td>
        `;
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());
    const type = typeSelect.value;

    if (!description || isNaN(amount)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const transaction = {
        description,
        amount,
        type
    };

    transactions.push(transaction);
    balance += (type === 'income' ? amount : -amount);

    renderTransactions();
    updateBalance();

    descriptionInput.value = '';
    amountInput.value = '';
    typeSelect.value = 'income';
});

function deleteTransaction(index) {
    const transaction = transactions[index];
    balance -= (transaction.type === 'income' ? transaction.amount : -transaction.amount);
    transactions.splice(index, 1);
    renderTransactions();
    updateBalance();
}

updateBalance();
