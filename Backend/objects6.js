accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(accounts.length);
console.log('....................');
//2. print account number whose ac_type is savings
accounts.filter(account=>account.ac_type=='savings').forEach(element => {
    console.log(element.acno);
});
console.log('....................');
//3.print the balance of accnount number 1000
accounts.filter(account=>account.acno==1000).forEach(item=>{console.log(item.balance);})
console.log('....................');
//4. print all gpay transactions
accounts.map(item=>item.transaction).flat().filter(account=>account.mode=='gpay').forEach(item=>console.log(item))
console.log('....................');
//5. print all transaction whose amount > 5000
accounts.map(item=>item.transaction).flat().filter(account=>account.amount>5000).forEach(item=>console.log(item))
console.log('....................');
//6. print credit transaction of account 1002
console.log('credit:');
credit=accounts.map(item=>item.transaction).flat().filter(account=>account.to==1002)
console.log(credit);
console.log('....................');
//7. print debit transaction of account 1002
debit=accounts.filter(account=>account.acno==1002).map(item=>item.transaction).flat()
console.log(debit);
console.log('....................');
//8. print transaction history of 1002
transhis={
    credit:credit,
    debit:debit
}
console.log(transhis);
console.log('....................');
// print as array
history=[...credit,...debit]
console.log(history);
console.log('....................');
//9. print highest balance account details
a=accounts.reduce((account1,account2)=>account1.balance>account2.balance?account1:account2)
console.log(a);