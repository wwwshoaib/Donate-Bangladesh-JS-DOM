

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

// // changing background of the button when it is visited
// document.getElementById('btn-to-show-donation')
// .addEventListener('mousedown', function(){

//     //remove the hidden class 
//     const btndonation = document.getElementById('btn-to-show-donation');
//     btndonation.classList.add('bg-red');
//     //add the hidden class to show donation section
  
    
// }) 

// const button = document.getElementById('btn-to-show-donation');

// button.addEventListener('click', function()  {
//   // Toggle between green and the original red background
//   if (button.classList.contains('bg-gray-200')) {
//     button.classList.remove('bg-gray-200');
//     button.classList.add('bg-green-500');
//   } else {
//     button.classList.remove('bg-green-500');
//     button.classList.add('bg-gray-200');
//   }
// }); 


// const button1 = document.getElementById('btn-to-show-transaction');

// button1.addEventListener('click', function()  {
//   // Toggle between green and the original red background
//   if (button1.classList.contains('bg-gray-200')) {
//     button1.classList.remove('bg-gray-200');
//     button1.classList.add('bg-green-500');
//   } else {
//     button1.classList.remove('bg-green-500');
//     button1.classList.add('bg-gray-200');
//   }
// });