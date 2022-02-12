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


// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposit input
    /* 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    */

    const depositAmount = getInputValue('deposit-input');

    // get and update deposit total
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;
    */

    updateTotal('deposit-total', depositAmount);

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
});


// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw input
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */

    const withdrawAmount = getInputValue('withdraw-input');

    // get and update withdraw total
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    */

    updateTotal('withdraw-total', withdrawAmount);

    // update balance after withdrawal
    const balanceTotal = document.getElementById('balance-total');
    const BalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(BalanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
});