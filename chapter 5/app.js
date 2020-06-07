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