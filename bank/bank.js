let banP={
    fullName:"",id:"",
    balance:0,
    
}
let arr=[];
let t=0;
function creatAcount(name,id,bal){
    arr[t]=banP;
    arr[t].fulName=name;
    arr[t].id=id
    art[t].balance=balance
    t++
}
function deposit(name,id,amnt){
    for (let i=0;i<arr.length;i++){
        if (arr[i].name===name && arr[i].id===id){
            arr[i].balance+=amnt
        }
    }
}

function withdraw(name,id,amnt){
    for (let i=0;i<arr.length;i++){
        if (arr[i].name===name && arr[i].id===id && arr[i].balance>amnt && arr[i].balance>25){
            arr[i].balance-=amnt
        }
    }
}
function checkBalance(name,id){
    for (let i=0;i<arr.length;i++){
        if (arr[i].name===name && arr[i].id===id){
            return arr[i].balance
        }
    }
}
function transfer(name,id,amnt,sName){
    let m=0;
    for (let i=0;i<arr.length;i++){
        if (arr[i].name===sName ){
            m=i
        }
        if (arr[i].name===name && arr[i].id===id && arr[i].balance>amnt && arr[i].balance>25){
            arr[i].balance-=amnt
            arr[m]+=amnt
        }
    }
}


(function () {
    let menu = (prompt("1 for  crating acount 2 for deposit 3 for withdraw 4 check Balance 4 for transfer"));
    switch(menu){
        case "1":
            let name = (prompt("Enter Your name"));
            let id = (prompt("Enter Your id"));
            let ba = Number(prompt("Enter Your balance"));
            creatAcount(name,id,ba)
            break;
        case "2":
            let name = (prompt("Enter Your name"));
            let id = (prompt("Enter Your id"));
            let amnt = Number(prompt("Enter Your balance"));
            deposit(name,id,amnt)
            break;
        case "3":
            let name = (prompt("Enter Your name"));
            let id = (prompt("Enter Your id"));
            let amnt = Number(prompt("Enter Your balance"));
            withdraw(name,id,amnt)
            break;
        case "4":
            let name = (prompt("Enter Your name"));
            let id = (prompt("Enter Your id"));
            withdraw(name,id,amnt)
            break;
            
      
                

    }
    

})();

