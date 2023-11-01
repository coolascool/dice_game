var a = Math.floor(Math.random()*6)+1;
var b = Math.floor(Math.random()*6)+1;
var num1 = document.querySelector(".image1").innerHTML = a;
var num2 = document.querySelector(".image2").innerHTML = b;
var arr = ["dicepicture/dice1.jpg","dicepicture/dice2.jpg","dicepicture/dice3.jpg","dicepicture/dice4.jpg","dicepicture/dice5.jpg","dicepicture/dice6.jpg"];
var src1 = arr[num1 - 1];
var src2 = arr[num2 - 1];
document.querySelector(".image1").setAttribute("src",src1);
document.querySelector(".image2").setAttribute("src",src2);
if(a>b)
{
    document.querySelector(".fifth").innerHTML = "WINNER : PLAYER-1";
}
else if(a<b)
{
    document.querySelector(".fifth").innerHTML = "WINNER : PLAYER-2";
}
else
{
    document.querySelector(".fifth").innerHTML = "MATCH DRAW";
}