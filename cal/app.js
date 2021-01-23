// Declaring Object
// // Remove the variables and modify with the object 
// let calc = {
//     num1:0,
//     num2:0,
//     op:"",
   
//     add: function(num,num2) {return num+num2 },
//     mult: function(num,num2) {return num*num2 },
//     sub: function(num,num2) {return num-num2 },
//     div: function(num,num2) {
//         if (op==="/" && num2===0){
//             return "0 division problem"
//         } else{
//             return num/num2
//         }
//      },
//      maxx: function(num1,num2) {return Math.max(num1,num2) },
//      minn: function(num1,num2) {return Math.min(num1,num2) },
//      max: function(num1,num2) {return Math.max(num1,num2) },
     
     
    
// };
// function add(num1,num2) {return Math.max(num1,num2) }
// function maxx(num1,num2) {return Math.max(num1,num2) }
// function minn(num1,num2) {return Math.min(num1,num2) }
// function div(num,num2) {
//     if (op==="/" && num2===0){
//         return "0 division problem"
//     } else{
//         return num/num2
//     }
//  }
//  function  sub(num,num2) {return num-num2 }
//  function  add(num,num2) {return num+num2 }
//  function mult(num,num2) {return num*num2 }
 
//  function cal() {
//     (function() {
//         let num1,op,num2;
//         op =""+ prompt("1 for addtion\n 2 for subtraction\n 3 for multiplication \n 4 for division ");
//          num1 = Number(prompt("Enter Your First Number"));
         
//          num2 = Number(prompt("Enter Your Second Number"));
    
//          if (op==="1"){
//              alert(""+calc.add(num1,num2));
//          }else if(op==="2"){
//              alert(calc.add(num1,num2));
//          }else if(op==="3"){
//              alert(calc.add(num1,num2));
//          }else if(op==="4"){
//              alert(calc.add(num1,num2));
//          }else{
//              alert("insert correctly")
//              this.cal()
      
//          }
//  })();
// }
// (function() {
//     let num1,op,num2;
//     op =""+ prompt("1 for addtion\n 2 for subtraction\n 3 for multiplication \n 4 for division ");
//      num1 = Number(prompt("Enter Your First Number"));
     
//      num2 = Number(prompt("Enter Your Second Number"));

//      if (op==="1"){
//          alert(""+calc.add(num1,num2));
//      }else if(op==="2"){
//          alert(calc.add(num1,num2));
//      }else if(op==="3"){
//          alert(calc.add(num1,num2));
//      }else if(op==="4"){
//          alert(calc.add(num1,num2));
//      }else{
//          alert("insert correctly")
//          this.cal()
  
//      }
// })();

// (function() {

//     let num1,op,re;
    
//     let arr=[];
//     op =""+ prompt("For addition enter 1 \n for multiplication enter 2 ");
//     num1 = Number(prompt("Enter Your Number to quit enter q"));
    
//      while (num1!=="q"){
//         arr.push(Number(num1))
//         num1 = prompt("Enter Your Number");
        
        
//      }
//      if (op==="1"){
//          re=0
//          for (let i=0; i<arr.length;i++){
//              re=re+arr[i]
             
//          }
//      }else if (op==="2"){
//         re=1
//         for (let i=0; i<arr.length;i++){
//             re=re*arr[i]
            
//         }
//     }
//      alert(re)
     

   
// })();





 //  if (op==="+"){
    //      alert(""+calc.add(num1,num2));
    //  }else if(op==="-"){
    //      alert(calc.add(num1,num2));
    //  }else if(op==="/"){
    //      alert(calc.add(num1,num2));
    //  }else if(op==="*"){
    //      alert(calc.add(num1,num2));
    //  }else{
    //      alert("insert correctly")
    //      this.cal()
  
    //  }
function inputChecker(a){
    if (isNaN(a)){
        alert("only numbers must be entered")
        menuu()

    }
}

    function add(num,num2) {return num+num2 }
    function multi(num,num2) {return num*num2 }
    function sub(num,num2) {return num-num2 }
    function div(num,num2) {
        if (num2===0){
            alert("0 division problem try again")
            menuu()
        } else{
            return num/num2
        }
     }
function maxx() {
    let num=prompt("Enter the numbers one by one to fin the max")
    let arr=[]
    while(num){
        inputChecker(num)
        arr.push(Number(num))
        num=prompt("Enter the number\nto quit enter q")
        if (num==="q"){
            num=false
        }

        
    }
    let result= Math.max(...arr) 
    alert(`the result is ${result}`)
}
function minn() {
    let num=prompt("Enter the numbers one by one to fin the max")
    let arr=[]
    while(num){
        inputChecker(num)
        arr.push(Number(num))
        num=prompt("Enter the number\nto quit enter q")
        if (num==="q"){
            num=false
        }
        

        
    }
    let result= Math.min(...arr) 
    alert(`the result is ${result}`)
}

function average() {
    let num=prompt("Enter the numbers one by one to fin the max")
    let total=0;
    let len=0
    while(num){
        inputChecker(num)
        total+=Number(num)
        len+=1
        num=prompt("Enter the number\nto quit enter q")
        if (num==="q"){
            num=false
        }

        
    }
    let result= total/len
    alert(`the result is ${result}`)
}


function arthemetic(){
    let num1=Number(prompt("Enter the number "))
    inputChecker(num1)
    let q=true;
    let op,num2;

    while (q){
        op =prompt("For addition enter 1\nFor Subtraction enter 2\n for multiplication enter 3\nFor division enter 4\nif you finish enter q ");
        if (op!=="q"){
        num2=Number(prompt("Enter the number"))}
        inputChecker(num2)
        switch(op){
            case "1":
                num1=add(num1,num2)
                break;
            case "2":
                num1=sub(num1,num2)
                break;
            case "3":
                num1=multi(num1,num2)
                break;
            case "4":
                num1=div(num1,num2)
                break;
            case "q":
                alert(`the result is ${num1}`)
                menuu()
                break;
            default:
                alert("wrong entry pleas try again")
                menuu()           

        }
        
    }

}
function menuu(){
    let menu=prompt("1 for Arthemetic operation \n2 for min operation\n3 for max operation \n4 for average operation ")
    switch(menu){
        case "1":
            arthemetic()
            break;
        case "2":
            minn()
            break
        case "3":
            maxx()
            break
        case "4":
            average()
            break
        default:
            alert("worng number entry try again")
            menuu()

    } 
}

(function(){
        while(true){
            menuu()
        }

})();
