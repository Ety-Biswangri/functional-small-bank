// get deposit or withdraw input
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear deposit input field
    inputField.value = '';

    return inputAmount;
}

function updateTotal(totalId, inputAmount) {
    // debugger;
    const total = document.getElementById(totalId);
    const totalText = total.innerText;
    const previousTotal = parseFloat(totalText);
    total.innerText = previousTotal + inputAmount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(inputAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */

    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + inputAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - inputAmount;
    }
}

// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposit input
    /* 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    */

    // get and update deposit total
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    */

    // update account balance
    /*
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    */

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotal('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});


// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw input
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */

    // get and update withdraw total
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    */

    // update balance after withdrawal
    /* const balanceTotal = document.getElementById('balance-total');
    const BalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(BalanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotal('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('Your current balance is low, please deposit first');
    }
});