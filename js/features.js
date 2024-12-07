

//show the donation section 

document.getElementById('btn-to-show-donation')
.addEventListener('click', function(){
    //remove the hidden class 
    document.getElementById('show-donation-section').classList.remove('hidden');
    //add the hidden class to show donation section
    document.getElementById('show-transaction-section').classList.add('hidden');
}) 

//show the transaction section

document.getElementById('btn-to-show-transaction')
.addEventListener('click', function(){
    //remove the hidden class 
    document.getElementById('show-transaction-section').classList.remove('hidden');
    //add the hidden class to show donation section
    document.getElementById('show-donation-section').classList.add('hidden');
}) 