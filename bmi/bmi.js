(function () {
    let weight = Number(prompt("Enter Your weight"));
    let height = Number(prompt("Enter Your height"));
    
    let bmi = weight / (height * height);

    alert("Your Bmi is : " + bmi);
    if (bmi < 18.5)
        alert("Your are : Underweight");
    else if (bmi >= 18.5 && bmi <= 24.9)
        alert("Your are : Normal");
    else if (bmi >= 25.0 && bmi <= 29.9)
        alert("Your are : Overweight");
    else if (bmi >= 30.0)
        alert("Your are : Obese");


})();



