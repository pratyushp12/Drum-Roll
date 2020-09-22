

var numberOfButton = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButton;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function() {
  var keyvalue  = this.innerHTML;
  makeSound(keyvalue);
  buttonAnimation(keyvalue);
});
}

document.addEventListener("keydown",function(event){
  var buttonValue = event.key;
  makeSound(buttonValue);
  buttonAnimation(buttonValue);

});


function makeSound(keyvalue)
{
  switch(keyvalue) {
    case "p":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "r":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "t":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "y":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "u":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;


    case "s":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;


    default:
  }
}

function buttonAnimation(btnKey)
{
  var currentKey = document.querySelector("."+btnKey);
  currentKey.classList.add("pressed");

  setTimeout(function(){
  currentKey.classList.remove("pressed");
},100);
}
