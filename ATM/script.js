let balance = 1000;

let choice = prompt(
    "welcome to atm !\n" +
    "1. check balance\n"+
    "2. deposit money\n"+
    "3. withdraw money\n"+
   " 4. exit\n"+

    "Enter you choice (1-4):"
);

if ( choice === "1"){
    console.log(balance);
}else if( choice === "2"){
   let dm = Number(prompt( "enter the amount of number you wantt to deposit " ));
   balance = balance + dm;
    console.log( "the total amt is", balance  );
}else if (choice ==="3"){
    let wm = Number(prompt(" Enter the amt of money u want to withdraw"));
    if ( wm <= balance){
    balance = balance - wm ;
    console.log( "you current balance is ",balance);
    } else {
        console.log ("you dont have sufficient balance in your acc");
    }
}else if ( choice === "4"){
    console.log(" thank you for visiting");
} else{
    console.log(" you have entered a wrong choice , please refresh and choose again");
}