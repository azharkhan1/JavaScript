


/* Checking lowerCase or upperCase or type of Variable */


var a = prompt ("enter any kind of variable");

if (a>="A" && a<="Z")
{
            document.write("The letter is Capital");

}

else if (a>="a" && a<="z")
{
            document.write("The letter is lowerCase");
                     

}

else (
        document.write("The variable is not string")
)

/* Comparring two numbers */

var a = +prompt ("Enter the value of A");
var B = +prompt ("Enter the value of B");

if (a===b)
{
            document.write ("The two numbers are equal <br>");
}

else if (a=b){
                document.write ("a is greater than b");
}

else if (b>a){
                document.write ("b is greater than a");
}

/* Checking if the number is zero , positive or negative */

var a = +prompt ("enter the number");

if (a<0)
{
            document.write ("The number is in negative");
}
else if (a===0)
{   
        document.write ("The number is equal to zero");
}
else {
            document.write ("The number is positive");
}


/* Guessing if the character is vowel or not */

var ch = prompt ("Enter any character");

if (ch==="a")
{
            document.write("The character is vowel");
}

else if (ch==="e")
{
            document.write("The character is vowel");
}

else if (ch==="i")
{
            document.write("The character is vowel");
}

else if (ch==="o")
{
            document.write("The character is vowel");
}

else if (ch==="u")
{
            document.write("The character is vowel");
}

else {
            document.write ("The character is not vowel");
            }


            /* Checking if the password is same or not */

            var password = prompt ("Enter your passowrd");

var verifyPassword = prompt ("Re-enter your passowrd");

if (password===verifyPassword)
{
            alert("The password is character");
}
else {
            alert("The password is not character, re-enter please!");
}

/* solution for 6th question fixed */

var greeting; 
var hour = 13; 
if (hour <= 13)
 { 


 greeting = "Good day"; 
 document.write(greeting)
 }

 else{

  greeting = "Good evening"; 

}

/* Greeting According to the time */

var time = +prompt ("Enter time in whole numbers 24 hours");

if (time>=00 && time<12){
                document.write("Good Morning!");
}

var time = +prompt ("Enter time in whole numbers 24 hours");

else if (time>=12 && time<17){
                document.write("Good Evening!");
}

else if (time>=12 && time<17){
                document.write("Good Afternoon!");
}

else if (time>=17 && time<21){
                document.write("Good Evening!");
}

else {
            document.write("Good Night!");
}


 