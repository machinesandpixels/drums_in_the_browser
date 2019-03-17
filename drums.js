console.log("connected");

const drum = document.querySelectorAll(".drum");

for (let i = 0; i < drum.length; i++) {

    drum[i].addEventListener("click", function() {

        console.log(this); 
       

    }); 

   } 