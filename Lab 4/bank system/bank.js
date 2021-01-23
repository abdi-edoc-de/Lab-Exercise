
let arr=[];
function creatAcount(){    
    let name = prompt("Enter Your Full Name");
    let id1 = prompt("Enter account number you want");
    let bal = Number(prompt("Enter the balance you want to put in first"));
    let check=false;
    for (element of arr){
        if (element.fullName===name && element.id===id1){
            check=true;
        }
    }
    if (!check){
        arr.push({
            fullName:name,
            id:id1,
            balance:bal    
        });
        alert(`Full Name: ${name} id: ${id1} with balance:${bal} succefully created account`)
    }else{
        alert("use another name and account number already reserved")
    }
  
}
function deposit(){
    let name = (prompt("Enter the account owner name"));
    let id = (prompt("Enter the account number"));
    let amnt = Number(prompt("Enter the amount you want to deposit"));
    let check=false;
    for (let i=0;i<arr.length;i++){
        if (arr[i].fullName===name && arr[i].id===id){
            arr[i].balance+=amnt
            check=true
        }
    }
    if(check){
        alert(`you succesfully deposited ${amnt} to ${name}`  )
    }else{
        alert(`the acccount dose not exist`)
    }
}

function withdraw(){
    let name = (prompt("Enter acount owner name"));
    let id = (prompt("Enter acount number"));
    let amnt = Number(prompt("Enter the amount you want to withdraw"));
    let check=false;
    for (let i=0;i<arr.length;i++){
        if (arr[i].fullName===name && arr[i].id===id && arr[i].balance>amnt && arr[i].balance>25){
            arr[i].balance-=amnt
            check=true;
        }
    }
    if(check){
        alert(`you succesfully withdraw ${amnt} of money from your account`)

    }else{
        alert('wrong name or account number try again')
    }
}



function checkBalance(){
    let name = (prompt("Enter the account owner name"));
    let id= (prompt("Enter acount number"));
    let check=false;
    for (let i=0;i<arr.length;i++){
        if (arr[i].fullName===name && arr[i].id===id){
            alert(`your account balance is ${arr[i].balance}`)
            check=true;
            return arr[i].balance

        }
    }
    if (!check){
        alert('wrong name and account number')
    }

}


function transfer(){    
    let name = (prompt("Enter Your or the account owner name"));
    let id= (prompt("Enter account number"));
    let amnt = Number(prompt("Enter the amount you want to transfer"));
    let rName = (prompt("Enter the reciver acount owner name"));
    let rId = (prompt("Enter the reciver acount number"));
    let m=0;
    let n=0;
    let checkR=false;
    let check =false;
    let checkA=false
    for (let i=0;i<arr.length;i++){
        if (arr[i].fullName===rName && arr[i].id===rId ){
            m=i
            checkR= true

        }
        if (arr[i].fullName===name && arr[i].id===id ){
            n=i
            check=true
            if(arr[i].balance>amnt && arr[i].balance>25){
                checkA=true
            }
        }
        
    }
    if (check && checkR && checkA){
        arr[n].balance-=amnt
        arr[m]+=amnt
        alert(`You succesfuly transfer ${amnt} from ${name} to ${rName}`)
    }else if(check && checkR){
        alert("your amount is insuficient")
    }else{
        alert('wrong name or account pleas try again')
    }
}



function menuu(){
    let menu = prompt("1 for  crating acount\n2 for deposit\n3 for withdraw\n4 check Balance\n5 for transfer");
    switch(menu){
        case "1":
            creatAcount()
            break;
            
        case "2":
            deposit()
            
            break;
        case "3":
           
            withdraw()
            
            break;
        case "4":
            checkBalance()
            
            break;
        case "5":
            transfer()
            break;  
        default:
            alert("Wrong entry number try again")
            menuu()            
    }
}



(function () {
   
    while (true){
        menuu()
    }

})();

