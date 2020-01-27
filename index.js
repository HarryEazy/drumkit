// create array for all drum buttons on index.html
let buttonArray = document.querySelectorAll(".drum");

// Loop through array and add addEventListener to each element in array
for (let i = 0; i < buttonArray.length; i++)
  buttonArray[i].addEventListener("click", function() {

    let buttonHTML = this.innerHTML;
    makeSound(buttonHTML);
    buttonAnimation(buttonHTML);
  });

// add event listener to keys pressed if key matches a sound then it will play
document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});

// function to created sound depending on key pressed or picture clicked
function makeSound(key) {

  switch (key) {

    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;


    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      
  }

}

// function to created an animation on drum picture
function buttonAnimation(currentKey){

  // get key press or clicked
  let activeButton = document.querySelector("." + currentKey);
  // add css class "pressed" which will provide the animation
   activeButton.classList.add("pressed");
   // remove css class "pressed" after a delay
   setTimeout(function() {
     activeButton.classList.remove("pressed");

   }, 100);

}
