console.log("connected");

const drum = document.querySelectorAll(".drum");

for (let i = 0; i < drum.length; i++) {

drum[i].addEventListener("click", function(){

  this.style.backgroundColor = "black";
  

});
  
  
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

});

  function makeSound(key) {
  
    switch (key) {
      case "j":
        let clap = new Audio("samples/clap.wav");
        clap.play();
        break;
  
      case "a":
        let snare = new Audio("samples/snare.wav");
        snare.play();
        break;
  
      case "f":
        let kick = new Audio('samples/kick_1.wav');
        kick.play();
        break;
  
      case "w":
        let hiHat = new Audio('samples/hi_hat.wav');
        hiHat.play();
        break;
  
      case "c":
        let tom = new Audio('samples/tom_3.wav');
        tom.play();
        break;
  
      case "u":
        let crash = new Audio('samples/crash.wav');
        crash.play();
        break;

      default: console.log(key);
  
    }
  }
