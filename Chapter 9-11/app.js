
/* Welcoming on specific city */

var city = prompt ("Enter the name of the city ");

if (city === "Karachi")
{
    
    alert("Welcome To The City of lights");
}

/* Welcoming On The Basis Of Gender */

var gender = prompt ("Enter your gender");

if (gender==="male")
{
        alert("Welcome Sir");
}
        if(gender==="female"){

            alert("Welcome Madam");
        }

        /* Traffic Light Controller */

        var color = prompt ("Enter color of current Traffic");

if (color==="red")
{
                alert("must Stop");
}

else if (color==="yellow"){
                alert("Ready To Move")

}
else if (color==="green")
{
            alert("Ready to move");
}

/* Refuel of car application */

var fuel = prompt ("Enter the amount of the fuel");

if (fuel<0.25){
                alert("Please refuel");
}

/* Checking If Conditions Are True */

document.write ("part a is true");
document.write ("part b wont run because not true");
document.write ("Part c Condition 2 is true");
document.write ("part d The Cost is equal in part d");
document.write ("part e is true")
document.write ("part f is car is smaller than cat");


/* Mark Sheet */

var totalMarks = 300;
var marksObtained = +prompt("Enter the marks Obtained");
var percentage = (marksObtained/totalMarks) * 100


if (percentage>=80)
{
        document.write("You have A+ grade , Excellent Marks!");
}

else if (percentage>=70)
{
        document.write("You have A grade , Good!");
}

else if (percentage>=60)
{
        document.write("B Grade , You need to improve");

}
else if (percentage<60)
{
        document.write ("Fail, Sorry");
}

/* Guessing the number */

var guessNumber = prompt ("Enter the secret number range 1-10");

var guessIt = prompt ("Enter the secret number range to guess it 1-10");

if (guessNumber===guessIt)
{
            alert("Bingo, Correct Answer!");
}

else if (guessNumber-guessIt===1)
{
        alert("You were almost close!");
}


/* checking if the number is divislbe by 3 */

var  b = prompt ("Enter any number");

if (b%3==0){
                alert("The number is divisble by 3");
}
               else{
                    alert ("The number is not divisible by 3");               
               }


/* checking even odd */

var  b = prompt ("Enter any number");

if (b%2==0){
                alert("The number even Number");
}
               else{
                    alert ("The number odd number");               
               }

               /* weather calculator messages */

               var t = prompt ("Enter temprature");

if (t>40)
{
        prompt ("It is too hot outside.")
}
else if (t>30)
{
        prompt ("The Weather today is Normal.")
}

else if (t>20)
{
        prompt ("Today’s Weather is cool.")
}
else if (t>10)
{
        prompt ("Today’s weather is so Cool")
}




/* Calculator */

var firstNumber = prompt ("Enter the first Number");
var secondNumber = prompt ("Enter the second Number");
var sign = prompt ("Enter the operator"); 

if (sign === "+")
{
        var total = firstNumber+secondNumber;
        document.write("<br>")
        document.write("The addition of 2 numbers is "+total);
}


else if (sign === "-")
{
        var total = firstNumber-secondNumber;
        document.write("<br>")
        document.write("The Subtraction of 2 numbers is "+total);
}

else if (sign === "*")
{
        var total = firstNumber*secondNumber;
        document.write("<br>")
        document.write("The Multiplication of 2 numbers is "+total);
}

else if (sign === "/")
{
        var total = firstNumber/secondNumber;
        document.write("<br>")
        document.write("The Divsion of 2 numbers is "+total);
}


else if (sign === "%")
{
        var total = firstNumber*secondNumber;
        document.write("<br>")
        document.write("The Modulus of 2 numbers is "+total);
}


