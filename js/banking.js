function getInputValue(idName) {
    const input = document.getElementById(idName);
    const inputValue = input.value;
    const inputNumber = parseFloat(inputValue);
    input.value = '';
    return inputNumber;
}

//balance show
function showBalance(idname){
    const currentBalance = document.getElementById(idname);
    const currentBalanceText = currentBalance.innerText;
    const balance = parseFloat(currentBalanceText);
    return balance;
}

//current balance function
function currentNewBalance(idname, inputeBalnace) {
    // debugger;
    const currentBalance = document.getElementById(idname);
    const currentBalanceText = currentBalance.innerText;
    const balance = parseFloat(currentBalanceText);
    currentBalance.innerText = balance + inputeBalnace;
}

//update balance function
function updateBalance(idname, NewAmount, type) {
    // add balance amount 
    const balanceTotal = document.getElementById(idname);
    currentBalance = balanceTotal.innerHTML;
    if (type == true) {
        balanceTotal.innerHTML = parseFloat(currentBalance) + NewAmount;
    } else {
        balanceTotal.innerHTML = parseFloat(currentBalance) - NewAmount;
    }
}

// deposite
document.getElementById('deposite-btn').addEventListener('click', function () {
    const deposite = getInputValue('deposite-box');
    document.getElementById('visibility-error').style.display = 'none';
    if (deposite < 0) {
        document.getElementById('visibility-error').style.display = 'block';
    } else if (deposite > 0) {
        // show total amount 
        currentNewBalance('current-deposit', deposite);
        // add balance amount
        updateBalance('current-balance', deposite, true);
    }
})

// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdraw = getInputValue('withdraw-box');
    const amount = showBalance('current-balance');
    document.getElementById('wd-visibility-error').style.display = 'none';
    if (withdraw < 0) {
        document.getElementById('wd-visibility-error').style.display = 'block';
    } else if (withdraw > 0 && withdraw < amount ) {
        // show total amount 
        currentNewBalance('current-withdraw', withdraw);
        // add balance amount
        updateBalance('current-balance', withdraw, false);
    }
})