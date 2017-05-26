
var timing;


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


window.onload = function () {
    var countdown = 10;


display = document.querySelector('#timer');

    startTimer(countdown, display);
};



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



var z = "<h1>Totally Trivial Trivia!</h1><br><h2>You guessed " + wins + " correctly. You missed "  + (3-wins) +  " questions. </h2>";


$("#container").html(z) 

console.log(wins);


};
