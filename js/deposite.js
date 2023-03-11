
//step-1
document.getElementById('btn-deposit').addEventListener('click', function () {

    //step-2

    const dipositeField = document.getElementById('deposit-field');
    const newDipositeAmountString = dipositeField.value;
    const newDipositeAmount = parseFloat(newDipositeAmountString);

    if (isNaN(newDipositeAmount)) {
        alert('please provide a valid number');
        return;
    }

    //step-3

    const dipositeTotalElement = document.getElementById('diposite-total');
    const previousDipositeTotalString = dipositeTotalElement.innerText;
    const previousDipositeTotal = parseFloat(previousDipositeTotalString);

    //step-4

    const currentDipositeTotal = previousDipositeTotal + newDipositeAmount;
    dipositeTotalElement.innerText = currentDipositeTotal;

    //step-5

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6

    const currentBalanceTotal = previousBalanceTotal + newDipositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-7

    dipositeField.value = '';
})


