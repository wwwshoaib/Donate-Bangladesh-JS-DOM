// donation for Noakhali

document.getElementById('btn-donation-noakhali').
addEventListener('click', function(){
   
    const donationNoakhali = getInputFieldValueById('input-noakhali');
    const balanceMainAccount = getTextFieldValueById('total-balance');
    
    // validation input 
    if(isNaN(donationNoakhali) || donationNoakhali<0 ||(donationNoakhali>balanceMainAccount)) {
        alert('Failed donation');
        return;
    }

    /**
     * 
    const currentBalanceNoakhali = balanceNoakhali + donationNoakhali;
    document.getElementById('noakhali-balance').innerText = currentBalanceNoakhali;
    const currentBalanceMainAccount = balanceMainAccount - donationNoakhali;
    document.getElementById('total-balance').innerText = currentBalanceMainAccount;
     */

    getUpdateBalance('input-noakhali', 'noakhali-balance', 'total-balance');

})