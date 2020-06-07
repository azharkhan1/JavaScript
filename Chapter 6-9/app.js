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




