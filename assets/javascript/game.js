<script type = "text/javascript"> 

//user cliks on letter

document.onkeyup = function(){

let userChoice = String.fromCharCode(event.keyCode).toLowerCase();

console.log(userChoice); //a way to only choose letters?


//computer chooses random letter on click
let options= ["a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
let cpChoices = options[Math.floor(Math.random() * options.length)];


//create counters //guesses correctly adds point to counterWin//guesses all nine incorrectly add point to counterLoss
let counterLoss = 0;
let counterWin = 0;
let reset=9;


//computer selections vs user selections wins/losses

if ((userChoice ==="f") && (cpChoices ==="f")  ) {
  counterWin++;
  alert("Wins: " + counterWin);
  } 

if ((userChoice ==="t") && (cpChoices ==="t")  ) {
  
  counterWin++;
  alert("Wins: " + counterWin);
  }

  if ((userChoice ==="g") && (cpChoices ==="g")  ) {
  
  counterWin++;
  alert("Wins: " + counterWin);
 }
  if ((userChoice ==="m") && (cpChoices ==="m")  ) {
  
  counterWin++;
  alert("Wins: " + counterWin);
 } 
 if ((userChoice ==="r") && (cpChoices ==="r")  ) {
  
  counterWin++;

 } 

 if ((userChoice ==="y") && (cpChoices ==="y")  ) {
  
  counterWin++;

 }
  if ((userChoice ==="v") && (cpChoices ==="v")  ) {
  
  counterWin++;

  } 

  if ((userChoice ==="h") && (cpChoices ==="h")  ) {
  
  counterWin++;

  } 
  
  if ((userChoice ==="d") && (cpChoices ==="d")  ) {
  
  counterWin++;

  } 
  
  else { (userChoice !== cpChoices) && (reset > 0)  // if user does not choose above after 9 tries counter loss ++ and reset
    
    counterLoss++;

  }


let html = "<p> Guess what letter I'm thinking of: </p>" + 
"<p>Wins:" + counterWin + "</p>" +
"<p>Loss:" + counterLoss + "</p>" +
"<p>Guesses Left: " + reset + "</p>"+
"<p>Guesses so far: " + userChoice +  "</p>";

document.querySelector('#psychic').innerHTML = html;

}

    </script>