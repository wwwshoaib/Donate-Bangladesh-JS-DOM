//donation for the flood affected people in Noakhali

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
        //To show modal
        const updatedBalanceArea = balanceMainAccount + donationNoakhali;
        if (updatedBalanceArea > donationNoakhali) {
            modal_noakhali.showModal();
        }

        //function to get updated balance in Noakhali
        getUpdateBalance('input-noakhali', 'noakhali-balance', 'total-balance');

        // transaction history
        //get id where the transaction will be added
        const transactionDiv = document.getElementById('transaction-div');
        //add class to make the background red
        transactionDiv.classList.add('bg-slate-50');
        // create an element to add transaction
        const div = document.createElement('div')
        div.classList.add('bg-blue-100');
        div.classList.add('p-5');
        const currentDateTime = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        div.innerHTML = `
       <h4 class = "text-xl fond-semibold">Donation for the Noakhali flood: </h4>
       <p class = "text-md"> Tk ${donationNoakhali} credited in Noakhali flood affected account on ${currentDateTime}
       
       `
        document.getElementById('transaction-div').appendChild(div);
        document.getElementById('input-noakhali').value = '';

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

        //To show modal
        const updatedBalanceArea = balanceMainAccount + donationFeni;
        if (updatedBalanceArea > donationFeni) {
            modal_feni.showModal();
        }


        //function to get updated balance in Feni
        getUpdateBalance('input-feni', 'feni-balance', 'total-balance');


        // transaction history
        //get id where the transaction will be added
        const transactionDiv = document.getElementById('transaction-div');
        //add class to make the background red
        transactionDiv.classList.add('bg-slate-50');
        // create an element to add transaction
        const div = document.createElement('div')
        div.classList.add('bg-orange-100');
        div.classList.add('p-5');
        const currentDateTime = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        div.innerHTML = `
       <h4 class = "text-xl fond-semibold">Donation for the Feni flood: </h4>
       <p class="text-md"> Tk ${donationFeni} credited in Noakhali flood affected account on ${currentDateTime}
       
       `
        document.getElementById('transaction-div').appendChild(div);
        document.getElementById('input-feni').value = '';

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

        //To show modal
        const updatedBalanceArea = balanceMainAccount + donationInjured;
        if (updatedBalanceArea > donationInjured) {
            modal_id.showModal();
        }

        //function to get updated balance for the injured people
        getUpdateBalance('input-injured-people', 'injured-people-balance', 'total-balance');

        // transaction history
        //get id where the transaction will be added
        const transactionDiv = document.getElementById('transaction-div');
        //add class to make the background red
        transactionDiv.classList.add('bg-slate-50');
        // create an element to add transaction
        const div = document.createElement('div')
        div.classList.add('bg-red-100');
        div.classList.add('p-5');
        const currentDateTime = new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        div.innerHTML = `
       <h4 class = "text-xl fond-semibold">Donation for the injured people </h4>
       <p class = "text-md"> Tk ${donationInjured} credited in  injured people account on ${currentDateTime}
       
       `
        document.getElementById('transaction-div').appendChild(div);
        document.getElementById('input-injured-people').value = '';
    })