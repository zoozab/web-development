var firstname = prompt("First Name Please :")
var lastname = prompt("last Name Please :")
var age = prompt("enter your age :")
var hight = prompt("how high are you :")
var petname=prompt("what is your pet name ?")
alert("Thank you so much for your information :)");

namecond=null;
agecond=null;
hightcond=null;
petnamecond=null;


if (firstname[0]===lastname[0]) {
  namecond=true;
  }
  else {
    namecond=false;

  }


if (age>20 && age<30) {
  agecond=true;
  }
  else {
    agecond=false;
  }



if (hight >= 170) {
  hightcond=true;
  }
  else {
    hightcond=false;
  }




if (petname[petname.length-1]==="y") {
  petnamecond=true;
  }
  else {
    petnamecond=false;
  }

if (namecond&&agecond&&hightcond&&petnamecond) {
  console.log("hey spy !!!");
  }
  else {
    console.log("nothing");
  }
