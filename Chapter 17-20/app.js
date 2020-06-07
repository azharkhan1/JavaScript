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

