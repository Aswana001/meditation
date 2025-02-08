
var numberOfDrum = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrum;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);

   
    function handleclick(){

        var buttonInnerHTML = this.innerHTML;
        sound(buttonInnerHTML);
        buttonani(buttonInnerHTML);
    }
}

document.addEventListener("keypress",handleclick2);
function handleclick2(){
    sound(event.key); 
    buttonani(event.key);
}

function sound(key){

    switch (key){
        case "Focus": 
            var audio1 = new Audio("tom-1.mp3");
            audio1.play();   
            break;
        
        case "Love":
            var audio2= new Audio("tom-2.mp3");
            audio2.play();   
            break;

        case "Peace":
            var audio3= new Audio("tom-3.mp3");
            audio3.play();   
            break;

         case "Soul": 
            var audio4 = new Audio("tom-4.mp3");
            audio4.play();   
            break;

        case "Present": 
            var audio5 = new Audio("crash.mp3");
            audio5.play();   
            break;

        case "Positive": 
            var audio6 = new Audio("snare.mp3");
            audio6.play();   
            break;

         case "Heal": 
            var audio7 = new Audio("kick-bass.mp3");
            audio7.play();   
            break;
          
          
        default:console.log(); 
    }
}

 
function buttonani(currentkey){
   var acbutton =  document.querySelector("."+currentkey);
   acbutton.classList.add("pressed");
   setTimeout(function(){
    acbutton.classList.remove("pressed");
   },100);
}


/*
var audio= new Audio("tom-1.mp3");
audio.play();
*/

