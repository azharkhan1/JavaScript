Chapter 1 


alert("Hello World"); /* Task1 */
alert("Error! Please Enter A valid Password");  /* Task2 */

alert("Welcome TO JS Land... \n Happy Coding!") /* Task3 */

alert("Welcome to JS land!"); /* Task4
 */ alert("Happy Coding"); 


Chapter 2

var userName;

var myName ="Muhammad Azhar";

var message = "Hello World";

alert(message);

var name="Azhar";
var age = "23";
var profession = "Mobile Developer";


alert(name);
alert(age);
alert(Profession);

alert(" Pizza \n Pizz \n Piz \n Pi \n P")


var email = "gmail.com";
var fullEmail = "azharkhan@" + email;

alert(fullEmail);


var book = "A smarter way to learn JavaScript";

alert("I am triny to learn "+book);

document.write("Yeah I can write through javascript in HTML");

var end="“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”";

alert(end);


Chapter 3

var age = 23;
alert("my age is "+age+" years old");

var visited = 5;

alert("you have visited "+visited+" times");

typeof(visited);

var birthYear = 1990;

document.write("my birth year is "+birthYear+ "\nThe date type of declared varible is "+typeof(birthYear));


var visitorName="Äzhar";
var productTitle ="Shirt";
var prodcutQuantity=2;

alert(""+visitorName+" Ordered "+prodcutQuantity+" "+productTitle+" on xyzclothing.com");


Chapter 4

var x,y,z;

/* legal variables declaration */
var x;
var fullName;
var full_Name;
var $money;
var $$$;



/* Illegal variables declaration  */


var product cost;
var money_%full;
var plus-name;
var my+name;
var declaration/of;



document.write("Variables names can only contain , numbers, $ and _. For Example : $my_1stVariable <br>");
document.write("<br>Variables must being with a letter, $ or _. For Example $name, _name or name <br>");
document.write ("Vairable name are case sensitive <br>");
document.write("Vairable names should not be JS keywords <br>");

Chapter 5

var a = +prompt ("Enter the value of a");
var b = +prompt ("Enter the value of B");

var c = a+b;

document.write("Result of addition is "+c);


var d = a-b;

document.write("Result of substraction is "+d);

var e = a/b;

document.write ("result of division is "+e);

var f = a*b;

document.write("Result of multiplication is "+e);

var g = a%b;

document.write ("Result of modulus is "+g);


var a;

document.write ("The value of a is <br>"+a);

 a = 5;

document.write ("The value of a after declaration is "+a+ "<br>");

a++;

document.write("the value of a after increament is "+a+"<br>");

a = a + 7;

document.write ("The value of a after addition of 7 is "+a+"<br>");

a--;

document.write ("The value of a after decreament is "+a+"<br>");

a = a%3;

document.write ("The reminder of a after dividing by 3 is "+a+"<br>");



/* task 4 */

var ticket = 600;
var qty = 5;
var total = ticket*5;

document.write("Total cost of buying 5 tickets is "+total);

/* multiplication of table */


var a=2;
var total;
for (var i = 1; i<=10 ; i++){

total = a*i;

document.write(a+"x"+i+"="+total+"<br>");

}

/*temprature conversion c to f */


var c = 25;

var f = (c*9/5) + 32;

document.write("Converted from C to F temprature is "+f);



/*temprature conversion f to c */

var f = 25;

var c = (f-32) * 5/9;

document.write("Converted from C to F temprature is "+c);

/*shopping cart */

var item1 = 650;
var item2 = 100;

var qt = item1*3;

var qt2 = item2 * 7;

var shipping = 100;

var total = shipping + qt + qt2;

document.write ("total cost of your order is "+total);


/* Percentage calculator */
var totalMarks = 1150;
var obtainedMarks = 850;

var percentage = (obtainedMarks/totalMarks)*100

document.write("The percentage is "+percentage);

/* Currency Calculator */

var dollars = 10;
var riyal = 28;

var currencyToPkr = dollars*104.80+riyal*25;

document.write(dollars+" dollar into pkr is "+currencyToPkr);

/*Math Expression in single line */

var a = 5 + 5 * 10 / 2;

document.write(a);

/* Age Calculator */

var currentYear=2020;
var birthYear = 1997;
var totalAge = currentYear - birthYear;

document.write("Your Current Age is "+totalAge);


/* Area of Circle */

var radius = 20;

const PI = 3.142;

var cOfCircle = 2*PI*radius;

document.write("The Circumference of Circle is "+cOfCircle);

var areaOfCircle = PI*radius*radius;


document.write("The Area of Circle is "+areaOfCircle);

/* Lifetime Supply Calculator */

var salanty = 15;
var maximumAge = 40;
var perDay = 3

var need = 3*25;

document.write("You will need "+need+ " salanties to last 40 years");



Chapter 6-9

/*Arithematic Operations */

var a = 10;

document.write ("The value of A  is "+a+"<br>");

++a;


document.write("The value of ++a is "+a+"<br>");

document.write("now current value of a is "+a+"<br>");

document.write("The value of a is "+a+"<br>")

a++;
document.write("The value of a++ is "+a+"<br>");


a--;

document.write("The value of --a is "+a+"<br>");

document.write("now current value of a is "+a+"<br>");

document.write("The value of a is "+a+"<br>")

a--;
document.write("The value of a-- is "+a+"<br>");



/* Explanation of Arithematic Opeartions */

var a = 2, b = 1; var result = --a - --b + ++b + b--;
                               

/* Explanation  1  -  0   +  1  + 1    */

document.write(""+result);


/* Greeting User */

var name = prompt ("Enter your name");

alert("Welcome "+name+"!");

/* Default table 5 otherwise other tables*/

var a=+prompt("Enter the table for multiplication");



var total;
for (var i = 1; i<=10 ; i++){

    if (a>5 || a<5 ){

total = a*i;

document.write(a+"x"+i+"="+total+"<br>");
}

else {

a=5;    

total = a*i;

document.write(a+"x"+i+"="+total+"<br>");
}        
}


/* Percetage Calculator */

var total = 100;
var englishMarks=54;


var mathsMarks=54;
var urduMarks = 48;


var wholeTotal = total*3;

var obtainedTotal = englishMarks + mathsMarks + urduMarks;


var percentage = (obtainedTotal  / wholeTotal) * 100;

document.write ("The percentage of yours is "+percentage); 




Chapter 9-11


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


Chapter 12-13




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


 Chapter 14-16

 

var list = [];
var arrayB = new Array();

list = ["Azhar","Zeeshan","Ali"];

var numbers = [1,3,4,5,6];

var bolArr = [true,false];

var mixedArray = ["Azhar",0.46,true,"Ali",5];

var qualifications = ["school","college","gradutaion","job"];

for (var i = 0 ; i<4;i++)
{
document.write(qualification[i]+"<br>");
}



/* qualifcations printing in array */

var qualifications = ["SSC","HSC","BCS","BS","B.COM","MS","M.PHILL","PHD"];

var b =5 ;

for (var i = 0 ; i<8;i++)
{
document.write(i+(1)+" "+qualifications[i]+ "<br>");
}


/* calculating scores through array */

var names = ["Azhar","Ali","Zeeshan"];

var marks =  [320,230,480];

for (var i = 0 ; i<3;i++)
{
     var percentage = [(marks[i]/500)*100,(marks[i]/500)*100,(marks[i]/500)*100];
}

for (var i=0;i<3;i++)
{
                  
          document.write("Score of "+names[i]+ " is " +marks[i]+ ". Percentage: "+percentage[i]+ "<br>" );
     
    
      
}


/* colors from array */

var colors = ["yellow","green","blue"];

var askColor = prompt ("what color do you want to add in the beginning");

 colors.unshift(askColor);


var addAtEnd = prompt ("What color do you want to insert at the end of Array");

colors.push(addAtEnd);


colors.push("black","dark Blue");


colors.shift();

for (var i=0;i<colors.length;i++)
{
   
        document.write(" "+colors[i]+ "<br>");
}


/* cities list */

var city = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

city.slice(2,4);



/* Joining Arrays */

var arr = ["This", "is", "my", "cat"];

var newArr = arr.join();

document.write(newArr);



Chapter 17-20

for (var i =1 ; i<11;i++)
{
    document.write(i+ "<br>");
}

/* table of length */

var a=+prompt("enter the table");

var length= +prompt("Enter the length of the table");


var total;
for (var i = 1; i<=length ; i++){

total = a*i;

document.write(a+"x"+i+"="+total+"<br>");

}


/* frutis of array through loop */
var fruits = ["apple","banana","mango", "orange", "strawberry"];

/*   counting */

for (var i=0;i<5;i++)
{
            document.write(fruits[i]+"<br>");
}


/*  backward counting */

for (var i =10 ; i>=1;i--)
{
    document.write(i+ "<br>");
}

/*  even counting */



for (var i=1 ; i<=20;i++)
{

if (i%2==0)
{   
 document.write(i+ "<br>");

}


   
}

/*  Odd counting */



for (var i=1 ; i<=20;i++)
{

if (i%2==1)
{   
 document.write(i+ "<br>");

}


   
}

/* series counting */


for (var i=1 ; i<=20;i++)
{

if (i%2==0)
{   
 document.write(i+ "k<br>");

}


   
}

/* finding element in the array */
var A = ["cake", "apple Pie" ,"cookie", "chips", "patties"];


var search = prompt ("Ënter the element you want to search")

for (var i = 0 ; i<5;i++)
{


if (A[i]===search)
{
            document.write("The element is in the array");
            break;
}
else{
                document.write("Not in the array");
                break;
}
}

/* program to print multiple of 5 */

for (var i = 5 ; i<=100 ; i++)
{
                        if (i%5==0)
                        {
                                    document.write(i+" ");
                        }
}