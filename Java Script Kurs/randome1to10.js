var min = 1;
var max = 10;
var RandomNumber = Math.round((Math.random() * (max - min) + min));
console.log("Hint! it's "+RandomNumber);
var Repeat = 3;

while (Repeat != 0){
    var UserNumber = prompt("Between 1 to 10. Which Number is it? You have "+Repeat+" tries");
    if (UserNumber == RandomNumber){
        alert("Thats correct");
        alert("The Number was "+RandomNumber);
        break;
    } else {
        Repeat --;
        alert("Sadly not correct please try again");
    }
}
if (Repeat == 0){
    alert("sorry you didn't make it");
    alert("The Number was "+RandomNumber);
}