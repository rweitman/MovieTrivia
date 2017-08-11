
var timing;


// Formatting Timer into a Clock Format

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var entry = true;
    timing = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        
        if (entry===true)
        {
          if(timer<=0)
          {
            timer = 0;
            entry=false;
            endGame();
          }
          else timer--;
        }

    }, 1000);
}

// Sets the total number of seconds available
window.onload = function () {
    var countdown = 30;

// Initiates the timer
display = document.querySelector('#timer');

    startTimer(countdown, display);
};


// Checks to See if the Choices are Correct
function endGame()
{
  var wins=0;

  var years = $(".year");

  for (i=0;i<years.length;i++)
  {
   if((years[i].value === "correct") && years[i].checked)
   {
    console.log("YEARS!");
    wins++;
   }};

  var actors = $(".actor");

for (i=0;i<actors.length;i++)
{
if((actors[i].value === "correct") && actors[i].checked)
   {
    console.log("ACTORS!");
    wins++;
   }
};

  var ratings = $(".rating");

for (i=0;i<ratings.length;i++)
{
  if((ratings[i].value === "correct") && ratings[i].checked)
   {
    console.log("RATING!");
    wins++;
   }

};

 var stars = $(".star");

for (i=0;i<stars.length;i++)
{
  if((stars[i].value === "correct") && stars[i].checked)
   {
    console.log("STAR WARS!");
    wins++;
   }

};

 var awards = $(".award");

for (i=0;i<awards.length;i++)
{
  if((awards[i].value === "correct") && awards[i].checked)
   {
    console.log("AWARD SHOW!");
    wins++;
   }

};

 var directors = $(".director");

for (i=0;i<directors.length;i++)
{
  if((directors[i].value === "correct") && directors[i].checked)
   {
    console.log("Spielberg the Director!");
    wins++;
   }

};



 var ices = $(".ice");

for (i=0;i<ices.length;i++)
{
  if((ices[i].value === "correct") && ices[i].checked)
   {
    console.log("ICE AGE!");
    wins++;
   }

};

// Initiates new content into the body of the webpage
var z = "<h1>Totally Trivial Trivia!</h1><br><h2>You guessed " + wins + " correctly. You missed "  + (7-wins) 
+  " questions. </h2><br><button id='restart'>Restart</button>";

$("#container").html(z); 

// This reloads the page when clicking an object that has an id "restart" 
$("#restart").on("click", function(){
      location.reload();
      }); 

console.log(wins);

};



