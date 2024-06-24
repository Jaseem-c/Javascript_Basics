class Bank {
    accountDetails = {
        1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
        1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
        1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
        1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 },
    }

    //method for validate given account number
    validate(acno) {
        return acno in this.accountDetails ? true : false

        // if(acno in this.accountDetails)
        //     {
        //         console.log('validate');
        //     }
        // else{
        //     console.log('not validate');
        // }
    }
    //method for authenticate a account}
    authenticate(acno, pswd) {

        if (this.validate(acno)) {
            if (this.accountDetails[acno].password == pswd) {
                console.log('authentication succcesfull');
            }
            else {
                console.log('invalid passsword');
            }
        }
        else {
            console.log('invalid account');
        }

    }
    //method for balance enquiry
    balance(acno, psd) {
        if (this.validate(acno)) {
            if (this.accountDetails[acno].passsword = psd) {
                console.log(this.accountDetails[acno].balance);
            }
            else {
                console.log('invalid password');
            }
        }
        else {
            console.log('invalid account');
        }
    }
    //method for fund transfer
    fundtrans(frmacno, toacno, amount, newbal) {
        if (this.validate(frmacno) && (this.validate(toacno))) {
            if (this.accountDetails[frmacno].balance >= amount) {
                newbal = this.accountDetails[toacno].balance += amount
                console.log(`new balnace of account no ${toacno} is ${newbal}`);
            }
            else{
                console.log('insufficient balance');
            }
        }
        else {
            console.log('invalid account');
        }
    }
}

const user = new Bank()
console.log(user.validate(1000));
user.authenticate(1000, 'userone');
user.balance(1000, 'userone');
user.fundtrans(1000, 1001, 2000);