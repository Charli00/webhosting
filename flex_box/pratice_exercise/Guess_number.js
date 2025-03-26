var user_enter_correct=0;
function Get_user_Random(){
    let first_number=parseInt(document.getElementById("Number").value); 
    // let Random_number=(Math.random()*10)
    
    let Random_number = Math.floor(Math.random() * 10 +1); //0 to 9
    console.log("Generated Random Number : "+Random_number)
    if (isNaN(first_number) || first_number < 0 || first_number >12){
        alert("Please enter the valid number : ");
        return;
    }
    if (first_number === Random_number) {
        user_enter_correct++; // Increase the score
        document.getElementById("Final_score").textContent =  "🎉 Congratulations! Your score is: " + user_enter_correct;
        // alert("Correct! Your score ids now: " + user_enter_correct);
    }
    else{
        console.log("Please enter another number one more")
        document.getElementById("Wrong_ANSWER").textContent="The random number is : "+Random_number + " and You enter the : " +first_number;
    }




}