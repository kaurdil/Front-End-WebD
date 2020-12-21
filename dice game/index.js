var randomNumber1= Math.floor(Math.random()*6)+1;
var randomimg="dice" + randomNumber1 + ".png";
var ransource="images/"+ randomimg;
var im=document.querySelectorAll("img")[0];
im.setAttribute("src",ransource);


var randomNumber2= Math.floor(Math.random()*6)+1;
var randomimg1="dice" + randomNumber2 + ".png";
var ransource1="images/"+ randomimg1;
var im=document.querySelectorAll("img")[1];
im.setAttribute("src",ransource1);

var heading=document.querySelector("h1");
if(randomNumber1>randomNumber2){
    heading.innerHTML="🚩player 1 wins!";
}
else if(randomNumber2==randomNumber1){
    heading.innerHTML="Draw!";
}
else{
    heading.innerHTML="player 2 wins!🚩";
}
