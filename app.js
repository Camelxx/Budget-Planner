const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');



let totalExpenses = 0;


const clear = () =>{    
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click', ()=>{
    const enterReason = reasonInput.value;
    const enterAmount = amountInput.value;

    if(enterReason.trim().length <= 0 || enterAmount <= 0 || enterAmount.trim().length <= 0 ){
        alertCtrl.create({
           message:'Please enter valid reason and amount!',
           header:'Invalid Inputs',
           buttons:['Okay']
        }).then(alertElement =>{
            alertElement.present();
        });
        
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enterReason + ': $' + enterAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enterAmount;
    totalExpensesOutput.textContent = totalExpenses;


    clear();    
});

cancelBtn.addEventListener('click' , clear);


