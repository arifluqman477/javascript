// Chapter 01


// alert("Welcome to JavaScript")
// alert("Erorr ! Please enter a valid password")


// alert("Welcome to JS Land \n Happy Coding ! ")

// alert("Welcome to JS Land")


// alert("Happy Coding !")


// console.log("Hello I can run JS through my web browser's console")

// Chapter 02

var username = "Muhammad";
var Myname = "Arif";

document.write(username + " " + Myname);
document.write("<br>");




stdName = "Muhammad Arif";
window.alert("Student Name is " + " " + stdName)


stdage = "27 year old";
window.alert("Student Age is " + " " + stdage)

stdCourse = "Certified Mobile Application Development";
window.alert("Student Course is " + " " + stdCourse);


window.alert("PIZZA" + " " + "PIZZ" + "PIZ" + " " + "PI" + "P");



Email = "arifluqman477@gmail.com";
window.alert("My email is " + " " + Email);


Book = "A Smarter way to learn JavaScript";
window.alert("I'm Trying to learn from this Book " + Book);

// Chapter 03

var age = 21 ;
alert("My age is : " + String(age));


var NUmberOFTrack=21
alert("You have Visited this site"+" " + String(NUmberOFTrack) + " " + "times");


var birthYear=1998;

document.write("My birth year is " + " " + String(birthYear) + "<br>" +"Data Type of my declare variable is number");


// Chapter 09


var city = prompt("Enter a city");
if (city == "Karachi") {
    document.write("Welcome to the City of light")
}

var Gender = prompt("Enter a Gender");
if (Gender == "Male") {
    document.write("Good Morning Sir")
}
else {
    document.write("Good Morning Maa'm")

}


var SignalColor = prompt("Enter a Signal Color");
if (SignalColor == "Red") {
    document.write("Must Stop")
}
else if (SignalColor == "Yellow") {
    document.write("Ready to Move")

}
else {
    document.write("Move Now")
}

var RemainFuel = +prompt("Enter a Remail Fuel Color");
if (RemainFuel == 0.25) {
    document.write('“Please refill the fuel in your car”')
}


var a = 4;
if (++a === 5) {

    
    alert(" Q5 : given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("Q5 : given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("Q5 : condition 1 is true");
}

if (c === 13) {
    alert("Q5 : condition 2 is true");
}
if (c === 14) {
    alert("Q5 :condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False")
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

TM=300;

document.write("Total Marks : " + TM)
document.write("<br>");
OM=219;

document.write("Obtained Marks : " + OM);
document.write("<br>");

Per=219/300*100;

document.write("Percentage : " + Per + "%" );
document.write("<br>");
if (Per>=80)
{
    document.write("Grade : A-1");
    document.write("<br>");
    document.write("Remakrs : Excellent")
}
else if(Per>=70)
{
    document.write("Grade : A")
    document.write("<br>");
    document.write("Remakrs: Good")

}
else if(Per>=60)
{
    document.write("Grade : B")
    document.write("<br>");
    document.write("Grade : A-1")

}
else if(Per>=50)
{
    document.write("Grade : C")
    document.write("<br>");
    document.write("Remarks : You Need to Improve")

}
else if(Per>=40)
{
    document.write("Grade : D")
    document.write("<br>");
    document.write("Remakrs: Sorry")

}
else
{
    document.write("Fail")

}

no=+prompt("Enter a number between 1 to 10")
guessNum=4;
if (no==guessNum){
    document.write("“Bingo! Correct Answer")

}
else if (no==(guessNum+1))
{

    document.write("“Close enough to the correct answer")

}
else{
    document.write(" Wrong answer")
}


no= +prompt("Enter a number")
if (no%3==0)
{
    document.write("It is Divisible by 3")
}
else{
    document.write("It is not Divisible by")
}

no= +prompt("Enter a number")
if (no%2==0)
{
    document.write("It is Even Number")
}
else{
    document.write("It is Odd number")
}

Temp=+prompt("Enter a temprature")
if (Temp>=40)
{
    document.write("It is too hot outside");
   
}
else if(Temp>=30)
{
    document.write("The Weather today is Normal")
   

}
else if(Temp>=20)
{
    document.write("Today’s Weather is cool")
  

}
else 
{
    document.write("“OMG! Today’s weather is so Cool.")
}

no1=+prompt("Enter a First Number");
no2=+prompt("Enter a Second Number");

Add= no1 + no2;
Sub=no1-no2;
Mul=no1*no2;
Div=no1/no2;
Mod=no1%no2;


document.write("Addition of Two number is :  " + String(Add) + "<br>");


document.write("Subtraction of Two number is :  " + String(Sub) + "<br>");

document.write("Multiply of Two number is :  " + String(Mul) + "<br>");

document.write("Division of Two number is :  " + String(Div) + "<br>");

document.write("Module of Two number is  : " + String(Mod) + "<br>");


time=+prompt("Enter an Hours  Like 1900 : ")
    if (time>=0000 && time<1200)
    {
       document.write("Good Morning !")
    }
    else if(time>=1200 && time<1700)
    {
        document.write("Good Afternoon !")
    }
    else if(time>=1700 && time<2100)
    {
        document.write("Good Evening !")
    }
    else if(time>=2100 && time<2359)
    {
        document.write("Good Evening !")
    }
    else{
        document.write("Sorry Invalid Input")
    }



    a = 10;

    document.write("Result" + "<br>" + "The value of a is : " + String(a))
    document.write("<br>")


    document.write(".......................................................");



    document.write("<br>")
    document.write("<br>")
    ++a
    document.write("The Value of a++ is " + " " + String(a));


    document.write("<br>")
    document.write("<br>")
    a++
    document.write("The Value of a++ is " + " " + String(a));


    document.write("<br>")
    document.write("<br>")
    --a
    document.write("The Value of --a is " + " " + String(a));


    document.write("<br>")
    document.write("<br>")
    a--
    document.write("The Value of a-- is " + " " + String(a));


    var user = prompt("Enter Your name :")

    document.write("Welcome to  " + user)


      // var number=ParseInt(prompt("Enter a number :"))

      var x = parseInt(prompt("Enter a number For print a Table:"));
      document.write("======================================" + "<br>")
      document.write("============== " + "Table of  " + String(x) + "  ===============" + "<br>")
      document.write("======================================" + "<br>")
      var i;
      if (x == 5) {

          var n1 = 5 * 1;
          var n2 = 5 * 2;
          var n3 = 5 * 3;
          var n4 = 5 * 4;
          var n5 = 5 * 5;
          var n6 = 5 * 6;
          var n7 = 5 * 7;
          var n8 = 5 * 8;
          var n9 = 5 * 9;
          var n10 = 5 * 10;

          document.write(String(n1) + "<br>" + String(n2) + "<br>" + String(n3) + "<br>" + String(n4) + "<br>" + String(n5) + "<br>" + String(n6) + "<br>"
              + String(n7) + "<br>" + String(n8) + "<br>" + String(n9) + "<br>" + String(n10) + "<br>");

      }


      else {
          var n1 = x * 1;
          var n2 = x * 2;
          var n3 = x * 3;
          var n4 = x * 4;
          var n5 = x * 5;
          var n6 = x * 6;
          var n7 = x * 7;
          var n8 = x * 8;
          var n9 = x * 9;
          var n10 = x * 10;

          document.write(String(n1) + "<br>" + String(n2) + "<br>" + String(n3) + "<br>" + String(n4) + "<br>" + String(n5) + "<br>" + String(n6) + "<br>"
              + String(n7) + "<br>" + String(n8) + "<br>" + String(n9) + "<br>" + String(n10) + "<br>");

      }

      // var x=5;

      // for(var i=10; i>=20; i++)
      // {
      //     document.write(i)
      // }


      var Sub1 = prompt("Enter your Subject 1")

      var mark1 = +prompt("Enter your sub1 marks out of 100")

      // document.write(String(Sub1) + "  marks is  " + String(mark1));

      // document.write("<br>")


      var Sub2 = prompt("Enter your Subject 2")
      var mark2 = +prompt("Enter your sub2 marks out of 100")
      // document.write(String(Sub2) + " marks is  " + String(mark2));

      // document.write("<br>")




      var Sub3 = prompt("Enter your Subject 3")
      var mark3 = +prompt("Enter your sub3 1marks out of 100")
      // document.write(String(Sub3) + "  marks is " + String(mark3));

      // document.write("<br>")


      var Tmarks = 300;
      // document.write("Total Marks is : " +  String(Tmarks))

      // document.write("<br>")

      var marks = mark1 + mark2 + mark3;
      document.write("Obtained Marks is : " + String(marks))


      // document.write("<br>")

      var per = (marks / Tmarks) * 100
  // document.write("Percentage is : " +  String(per))



        // Q1

        var var1 , var2 ,var3;


        // Q2 
        //legal
        var Name;
        var Age
        var $Address;
        var Percentage;
        var _grade;
       

          //illegal
        var @Name;
        var /Age
        var 1Address;
        var .Percentage;
        var =Grade;
       