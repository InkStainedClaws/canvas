x = 0;
y = 0;

var screen_width = 0;
var screen_height = 0;

var apple = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var speak_data = ""

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
 
 to_number = Number(content);
 if (Number.isInteger(to_number))
  {
    Document.getElementById("status").innerHTML = "Started drawing apple"
    draw_apple = "set"
  }
  else
  {
    document.getElementById("status").innerHTML = "No Number"
  }
}

function setup() {;
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width, screen_height - 150)
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + "Apples Drawn"
    draw_apple = "";
    for(var i =1; 1 <= to_number; i++)
      {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple, x, y, 50, 50);
      }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload()
{
  apple = loadImage(apple.png);
}


