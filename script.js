
//backgroundSound
var jugleeSound = new Audio("jungle-6432.mp3");
jugleeSound.loop = true;
var button = 0


//keys
function start() {
    jugleeSound.play();
    button = 1;
    document.getElementById("score").style.visibility = "visible";
    document.getElementById("scoreBord").style.visibility = "visible";
    document.getElementById("gameName").style.visibility = "hidden";
    document.getElementById("note").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "hidden";
    ninjaRunId = setInterval(ninjaRun, 60);
    runSoundClip.play();
    backgroundId = setInterval(runBackground, 100);
    scoreId = setInterval(score, 1000);
    moveBox1Id = setInterval(box1Move, 80);
    moveBox2Id = setInterval(box2Move, 80);

}

function keyCheck(event) {
    var keyCode = (event.which);

    /* if (keyCode==13) {
         if (ninjaRunId==0) {
             ninjaRunId = setInterval(ninjaRun,60);
             runSoundClip.play();
             backgroundId=setInterval(runBackground,100);
             scoreId=setInterval(score,1000);
             moveBox1Id=setInterval(box1Move,80);
             moveBox2Id=setInterval(box2Move,80);
            
         }
         
      }*/

    if (keyCode == 32) {
        if (ninjaJumpId == 0) {

            runSoundClip.pause();
            clearInterval(ninjaRunId);
            ninjaRunId = 0;

            slideSoundClip.pause();
            clearInterval(SlideId);
            SlideId = 0;
            if (button == 1) {


                jumpSoundClip.currentTime = 0;
                jumpSoundClip.play();
                ninjaJumpId = setInterval(ninjaJump, 150);
            }

        }

    }

    if (keyCode == 16) {
        if (SlideId == 0) {
            runSoundClip.pause();
            clearInterval(ninjaRunId);
            ninjaRunId = 0;

            jumpSoundClip.pause()
            clearInterval(ninjaJumpId);
            ninjaJumpId = 0;

            if (button == 1) {


                slideSoundClip.currentTime = 0;
                slideSoundClip.play();
                SlideId = setInterval(Slide, 120);

            }
        }

    }


}
//runVar
var ninjaRunNumber = 1;
var ninjaRunId = 0;
//runSound

var runSoundClip = new Audio("runClip.wav");
runSoundClip.loop = true;

//run
function ninjaRun() {
    ninjaRunNumber = ninjaRunNumber + 1;
    if (ninjaRunNumber == 11) {
        ninjaRunNumber = 1;
    }
    document.getElementById("ninja").src = "Run (" + ninjaRunNumber + ").png"
}

//moveBackgroundVar
var backgroundMarginLeft = 0;
var backgroundId = 0;

//miveBackground
function runBackground() {
    backgroundMarginLeft = backgroundMarginLeft - 30;
    document.getElementById("background").style.backgroundPositionX = backgroundMarginLeft + "px";
}

//scoreVar
var scoreNumber = 0;
var scoreId = 0;

//score
function score() {
    scoreNumber = scoreNumber + 1;
    document.getElementById("score").innerHTML = scoreNumber;
}


//jumclick

var jumpSoundClip = new Audio("jumpClick.mp3");
jumpSoundClip.loop = true;

//jumpVar
var ninjaJumpNumber = 1;
var ninjaJumpId = 0;
var ninjaMarginTop = 320;
var ninjaMarginLeft = 120;



//jump
function ninjaJump() {

    if (ninjaJumpNumber <= 5) {
        ninjaMarginTop = ninjaMarginTop - 45;

        document.getElementById("ninja").style.marginTop = ninjaMarginTop + "px";
    }


    if (ninjaJumpNumber > 5) {
        ninjaMarginTop = ninjaMarginTop + 45;
        document.getElementById("ninja").style.marginTop = ninjaMarginTop + "px";
    }



    SlideId = -1;
    ninjaJumpNumber = ninjaJumpNumber + 1;
    if (ninjaJumpNumber == 11) {
        ninjaJumpNumber = 1;
        clearInterval(ninjaJumpId);
        jumpSoundClip.pause()
        ninjaJumpId = 0;
        SlideId = 0;
        ninjaRunId = setInterval(ninjaRun, 60);
        runSoundClip.currentTime = 0;
        runSoundClip.play();



        /*
 
         if (backgroundId==0) {
             backgroundId=setInterval(runBackground,100);
         }
         if (scoreId==0) {
             scoreId=setInterval(score,1000);
         }
         if (moveBox1Id==0) {
             moveBox1Id=setInterval(box1Move,80);
         }
         if (moveBox2Id==0) {
             moveBox2Id=setInterval(box2Move,80);
         }
         
         */

    }

    document.getElementById("ninja").src = "Jump (" + ninjaJumpNumber + ").png"


}


//slideSound

var slideSoundClip = new Audio("slideClip.mp3");
slideSoundClip.loop = true;


//SlideVar
var SlideNumber = 1;
var SlideId = 0;
var SlideMarginTop = 320;
var heaigt = 240;




//Slide
function Slide() {




    if (SlideNumber <= 5) {
        heaigt = heaigt - 50;
        ninjaMarginTop = ninjaMarginTop + 10;
        document.getElementById("ninja").style.heaigt = heaigt + "px";
        document.getElementById("ninja").style.marginTop = ninjaMarginTop + "px";

    }


    if (SlideNumber > 5) {
        heaigt = heaigt + 50;
        ninjaMarginTop = ninjaMarginTop - 10;
        document.getElementById("ninja").style.heaigt = heaigt + "px";
        document.getElementById("ninja").style.marginTop = ninjaMarginTop + "px";

    }



    ninjaJumpId = -1;
    SlideNumber = SlideNumber + 1;
    if (SlideNumber == 11) {
        SlideNumber = 1;
        clearInterval(SlideId);

        SlideId = 0;
        ninjaJumpId = 0;
        slideSoundClip.pause();
        ninjaRunId = setInterval(ninjaRun, 60);
        runSoundClip.currentTime = 0;
        runSoundClip.play();

        /*
        if (backgroundId==0) {
            backgroundId=setInterval(runBackground,100);
        }
        if (scoreId==0) {
            scoreId=setInterval(score,1000);
        }
        if (moveBox1Id==0) {
            moveBox1Id=setInterval(box1Move,80);
        }
        if (moveBox2Id==0) {
            moveBox2Id=setInterval(box2Move,80);
        }
        */

    }
    document.getElementById("ninja").src = "Slide (" + SlideNumber + ").png"


}



//box1Var
var box1Margin = -750;

//box1
function Box1() {

    for (var i = 0; i < 50; i++) {
        var box1 = document.createElement("div");
        box1.className = "box1";
        box1.id = "box1" + i;

        if (i <= 30) {
            box1Margin = box1Margin + 2000
        }
        if (i >= 31) {
            box1Margin = box1Margin + 1500
        }
        box1.style.marginLeft = box1Margin + "px";
        document.getElementById("background").appendChild(box1);

    }

}

//moveBox1Var
var moveBox1Id = 0;



//moveBox1
function box1Move() {
    for (var i = 0; i < 50; i++) {
        var box1 = document.getElementById("box1" + i);

        var currentMarginLeft = getComputedStyle(box1).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 30;
        box1.style.marginLeft = newMarginLeft + "px";


        //190 - 40

        //320-50

        if (newMarginLeft >= -180 & newMarginLeft <= 250) {

            if (ninjaMarginTop > 280) {


                clearInterval(ninjaRunId);
                ninjaRunId = -2;
                runSoundClip.pause();

                clearInterval(SlideId);
                SlideId = -2;
                slideSoundClip.pause();

                clearInterval(ninjaJumpId);
                ninjaJumpId = -2;
                jumpSoundClip.pause();

                clearInterval(backgroundId);
                backgroundId = -2;

                clearInterval(scoreId);
                scoreId = -2;

                clearInterval(moveBox1Id);
                moveBox1Id = -2;

                clearInterval(moveBox2Id);
                moveBox2Id = -2;

                deadId = setInterval(ninjaDead, 100);
                deathSoundClip.currentTime = 0;
                deathSoundClip.play();


                jugleeSound.pause();



            }
        }

    }

}


//box2Var
var box2Margin = 2250;

//box2
function Box2() {

    for (var i = 0; i < 50; i++) {
        var box2 = document.createElement("div");
        box2.className = "box2";
        box2.id = "box2" + i;

        if (i < 30) {
            box2Margin = box2Margin + 2000
        }
        if (i >= 31) {
            box2Margin = box2Margin + 1500
        }
        box2.style.marginLeft = box2Margin + "px";
        document.getElementById("background").appendChild(box2);
    }

}

//moveBox2Var
var moveBox2Id = 0;

//moveBox2
function box2Move() {
    for (var i = 0; i < 50; i++) {
        var box2 = document.getElementById("box2" + i);

        var currentMarginLeft = getComputedStyle(box2).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 30;
        box2.style.marginLeft = newMarginLeft + "px";


        //270-70
        if (newMarginLeft >= -20 & newMarginLeft <= 210) {

            if (ninjaMarginTop < 340) {




                clearInterval(ninjaRunId);
                ninjaRunId = -2;
                runSoundClip.pause();

                clearInterval(SlideId);
                SlideId = -2;
                slideSoundClip.pause();

                clearInterval(ninjaJumpId);
                ninjaJumpId = -2;
                jumpSoundClip.pause();

                clearInterval(backgroundId);
                backgroundId = -2;

                clearInterval(scoreId);
                scoreId = -2;

                clearInterval(moveBox1Id);
                moveBox1Id = -2;

                clearInterval(moveBox2Id);
                moveBox2Id = -2;

                deadId = setInterval(ninjaDead, 100);
                deathSoundClip.currentTime = 0;
                deathSoundClip.play();

                jugleeSound.pause();




            }

        }


    }
}




//deadVar
var deadNingaNumber = 1;
var deadId = 0;

//deadClick
var deathSoundClip = new Audio("126296798.mp3");



//dead
function ninjaDead() {
    deadNingaNumber = deadNingaNumber + 1;
    if (deadNingaNumber == 11) {
        deadNingaNumber = 10;
        clearInterval(deadId);
        document.getElementById("ninja").style.marginTop = "320px";
        document.getElementById("score0").innerHTML = scoreNumber;
        document.getElementById("endGame").style.visibility = "visible";

    }

    document.getElementById("ninja").src = "Dead (" + deadNingaNumber + ").png";


}


function relod() {
    location.reload();
}













