var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var level=0;
var started=false;
var userClickedPattern=[];
function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
  var randomChoosenColor=buttonColors[randomNumber];
  gamePattern.push(randomChoosenColor);
  $("#"+randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoosenColor);
  $("h1").text("Level "+level);
  level+=1;
}
$(".btn").on({
  click:function(){
  var userChosenColor=$(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  var c=userClickedPattern.length-1;
  checkAnswer(c);
}
}
);
function playSound(name){
  var aud=new Audio("sounds/"+name+".mp3");
  aud.play();
}
function animatePress(currentColor){
  var a=$("#"+currentColor);
  a.addClass("pressed");
  setTimeout(function(){
    a.removeClass("pressed");
  },100);
}
$(document).keydown(function(e){
  if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
else{
  if(e.keyCode==65){
    var userChosenColor="yellow";
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    var c=userClickedPattern.length-1;
    checkAnswer(c);
  }
  if(e.keyCode==68){
    var userChosenColor="red";
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    var c=userClickedPattern.length-1;
    checkAnswer(c);
  }
  if(e.keyCode==83){
    var userChosenColor="blue";
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    var c=userClickedPattern.length-1;
    checkAnswer(c);
  }
  if(e.keyCode==87){
    var userChosenColor="green";
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    var c=userClickedPattern.length-1;
    checkAnswer(c);
  }
}
});
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]==userClickedPattern[currentLevel]){
      if(gamePattern.length==userClickedPattern.length){
      setTimeout(function(){
        userClickedPattern=[];
        nextSequence();
      },1000);

    }
  }
  else{
    playSound("wrong");
    $(document.body).addClass("game-over");
    setTimeout(function(){
      $(document.body).removeClass("game-over");
    },200);
    $("h1").text("Game Over press any key to start again");
    startover();
  }

}
function startover(){
  level=0;
  gamePattern=[];
  started=false;
  userClickedPattern=[];
}
