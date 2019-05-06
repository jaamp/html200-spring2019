let message = document.getElementById("message-line");
let clear = document.getElementById("body");
let balance = 100;
let amtBool;
let ckAmt;
let amt;
let amt1;

const upperLimit = 50000;


function bankingBtn() {
  const btnBanking = document.getElementsByClassName('btn');

    btnBanking[0].addEventListener('click', function () {
        message.innerHTML = ""
        amtBool = false;
        amt = prompt('Please enter the amount you would like to withdraw')
        amt1 = Number(amt)
        if (!amt1) {
            amtBool = true;
        }
        amt= parseFloat(amt)
        ckAmt = amt1.toFixed(2);
        switch (true) {
            case amtBool : message.innerHTML = "<pre>You did not enter a valid amount.\nThis transaction is canceled.\nPlease make a transaction selection.</pre>";
            break;
            case (ckAmt != amt) : message.innerHTML = "<pre>Partial Cents are not allowed.\nThis transaction is canceled.\nPlease make a transaction selection.</pre>";
            break;
            case (amt > balance) : message.innerHTML = "<pre>You cannot withdraw more than you have.\nThis transaction is canceled.\nPlease make a transaction selection.</pre>";
            break;
            default : balance = balance - amt;
            message.innerHTML = "<pre>Transaction Complete\nPlease make another transaction selection.</pre>";
            break;
        }
    }),

    btnBanking[1].addEventListener('click', function () {
        message.innerHTML = ""
        amtBool = false;
        amt = prompt('Please enter the amount you would like to deposit')
        amt1 = Number(amt)
        if (!amt1) {
            amtBool = true;
        }
        amt= parseFloat(amt)
        ckAmt = amt1.toFixed(2);
        switch (true) {
            case amtBool : message.innerHTML = "<pre>You did not enter a valid amount.\nThis transaction is canceled.\nPlease make a transaction selection.</pre>";
            break;
            case (ckAmt != amt) : message.innerHTML = "<pre>Partial Cents are not allowed.\nThis transaction is canceled.\nPlease make a transaction selection.</pre>";
            break;
            case (amt > upperLimit) : message.innerHTML = "<pre>Whoa Cowboy, that is a lot of cash, please do your banking in person.\nThis transaction is canceled.\nPlease make a transaction selection.</pre>";
            break;
            default : balance = balance + amt;
            message.innerHTML = "<pre>Transaction Complete\nPlease make another transaction selection.</pre>";
            break;
        }
        
    }),

    btnBanking[2].addEventListener('click', function () {
        message.innerHTML = ""
        message.innerHTML = `Your Current Balance: \$${balance.toFixed(2)}`
    }),

    btnBanking[3].addEventListener('click', function () {
        message.innerHTML = "";
        alert('Closing Account')
        while (clear.hasChildNodes()) {
            clear.removeChild(clear.lastChild);
        }
        clear.innerHTML = "Thank you for your business"
    })
    }

bankingBtn();

