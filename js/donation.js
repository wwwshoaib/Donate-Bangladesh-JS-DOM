// donation for Noakhali

document.getElementById('btn-donation-noakhali').
    addEventListener('click', function () {

        const donationNoakhali = getInputFieldValueById('input-noakhali');
        const balanceMainAccount = getTextFieldValueById('total-balance');

        // validation input 
        if (isNaN(donationNoakhali) || donationNoakhali < 0) {
            alert('Failed donation');
            return;
        }


        if ((donationNoakhali > balanceMainAccount)) {
            alert('Not enough money');
            return;
        }

        /**
         * 
        const currentBalanceNoakhali = balanceNoakhali + donationNoakhali;
        document.getElementById('noakhali-balance').innerText = currentBalanceNoakhali;
        const currentBalanceMainAccount = balanceMainAccount - donationNoakhali;
        document.getElementById('total-balance').innerText = currentBalanceMainAccount;
         */
        //function to get updated balance in Noakhali
        getUpdateBalance('input-noakhali', 'noakhali-balance', 'total-balance');

    })


// donation for Feni

document.getElementById('btn-donation-feni').
    addEventListener('click', function () {

        const donationFeni = getInputFieldValueById('input-feni');
        const balanceMainAccount = getTextFieldValueById('total-balance');

        // validation input 
        if (isNaN(donationFeni) || donationFeni < 0) {
            alert('Failed donation');
            return;
        }

        if ((donationFeni > balanceMainAccount)) {
            alert('Not enough money');
            return;
        }

        //function to get updated balance in Feni
        getUpdateBalance('input-feni', 'feni-balance', 'total-balance');

    })



// donation for the Injured People

document.getElementById('btn-donation-injured-people').
    addEventListener('click', function () {

        const donationInjured = getInputFieldValueById('input-injured-people');
        const balanceMainAccount = getTextFieldValueById('total-balance');

        // validation input 
        if (isNaN(donationInjured) || donationInjured < 0) {
            alert('Failed donation');
            return;
        }

        if ((donationInjured > balanceMainAccount)) {
            alert('Not enough money');
            return;
        }

        //function to get updated balance for the injured people
        getUpdateBalance('input-injured-people', 'injured-people-balance', 'total-balance');

    })