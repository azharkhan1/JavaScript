

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

document.write(newArr)