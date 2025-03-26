// let num1=document.getElementById("num1");
// let num2=document.getElementById("num2");

function add_number(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)){
        alert("Please enter the value : ");
    }


   let total=num1+num2;
   document.getElementById("result").textContent= "SUM of the Number is : "+total

    console.log(total);
}