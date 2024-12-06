// function to get input value

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
} 

//function to get text value 

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
} 


//function to get update balance

function getUpdateBalance(area_donation, area_balance, total_balance) {
    const currentAreaBalance  = getTextFieldValueById(area_balance) + getInputFieldValueById(area_donation);
    document.getElementById(area_balance).innerText = currentAreaBalance ;
    const currentTotalBalance = getTextFieldValueById(total_balance) - getInputFieldValueById(area_donation);
    document.getElementById(total_balance).innerText = currentTotalBalance;
    return currentAreaBalance, currentTotalBalance;
}
