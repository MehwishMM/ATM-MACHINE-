
import chalk from "chalk" ; // call chalk
import inquirer from "inquirer"; // call inquirer


let mybalance =10000;   
let pin=1234;
console.log(chalk.bold.red("Well come"));  
console.log(chalk.italic.blue ("please enter your ATM card"));
console.log(chalk.bold.yellow("mybalane is 10000")); 
console.log(chalk.italic.blue ("my pin  code is 1234"));
let language = await inquirer.prompt([
{
   name:"language",
   message:"please select a language",
   type:"list",
   choices:["urdu","english"], 
},

 {
  name:"userId",
  message:"kindly enter your id(your name)", 
  type:"input",
 }]);
 let code =await inquirer.prompt ([
 {
    name:"pincode",
    message:"kindly enter your pin code",
    type:"number",

 },
]);
if (code.pincode === pin){
    console.log(chalk.green.bold("your pincode is correct")); 
    let accounttype= await  inquirer.prompt ([
   {
     name:"accounttype",
     message:"select your account type",
     type:"list",
     choices:["current account","saving account"],
   }
  ]);
  let  operationAns=await inquirer.prompt([
 {

   name:"operation",
   message:"select your transaction",
   type:"list",
   choices:["Withdrawl","Checkbalance","Fast Cash"],
   }]);
   if (operationAns.operation === "withdrawl"){
   let withdrawl =await inquirer.prompt ([
   {    
     name:"amount",
     message:"please select your amount",
     type:"list",
     choices:["1000","500","5000"],
   }
  ]);
   if (withdrawl.amount > mybalance){
   console.log(chalk.red.bold("insufficient balance"));
   }
    mybalance -= withdrawl.amount;
    console.log(`your remaining balance is ${mybalance}`);
   

     }else if (operationAns.operation === "Checkbalance"){
   console.log(`your current balance is ${mybalance}`);
   }
   else if (operationAns.operation === "Fast Cash")  
   {
    let askFastCash =await inquirer .prompt([{

     message:"Enter Amount",
      type:   "list",
      choices:["1000","500","5000"], 
      name:  "fastCash",
    },  
     ]); 
    if (askFastCash.fastCash==="1000") 
      {
        if (mybalance>=1000)  
      {
     console.log(chalk.green(`now your balance is $${mybalance -1000}`));
   } 
    else
   {
     console.log (chalk.red("insufficient balance"));
   }  
  
}
   else if (askFastCash.fastCash==="500" )
  {
    if (mybalance >=500)
   
  {
    console.log(chalk.green(`now your balance is $${mybalance-500}`));
  }
  else
  {
   console.log(chalk.red("insufficient balance")); 
  }

  }  
  else if (askFastCash.fastCash ==="5000")
  
    if(mybalance >=5000)

  {
   console.log(chalk.green(`now your balance is $${mybalance-5000}`)); 

  }  

else{ 
     console.log (chalk.red.bold("your pin code is in correct"));
};
console.log(chalk.red.italic("Thank you"));
   }
  };






