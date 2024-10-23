let soundFile;
let soundPlayed = false;
let startTime = 0;
let runTime = 0;
let gameImg, startImg, aptImg;
// let font = 'Calibri'

function preload() {
    soundFile = loadSound("APTtrimmed.mp3");
    gameImg = loadImage("game.png")
    startImg = loadImage("start.png")
    aptImg = loadImage("apt.png")

}

function setup() {
    createCanvas(400, 400);
}

function mousePressed() {
    if (!soundFile.isPlaying()) {
        soundFile.play();
    }
    startTime = millis();
}


function draw() {
    background(0);

    // fill(220);
    // text(mouseX, 10, 10);
    // text(mouseY, 100, 10);
    
    if(startTime) {
        runTime = millis() - startTime;
    }


    if(runTime > 0 && runTime < 1800 ) {
        image(gameImg, 50, 50, 300, 200)
    }

    if(runTime > 900 && runTime < 1800
     ) {
        image(startImg, 33, 100, 350, 250)
    }

    if(runTime > 1800 && runTime < 2400
    ) {
       image(aptImg, 125, 150, 150, 100)
   }

   if(runTime > 2400 && runTime < 3000
   ) {
      image(aptImg, 57, 91, 300, 250)
  }

  if(runTime > 3300 && runTime < 6500
  ) {
     image(aptImg, 11, 15, 100, 50)
 }

 if(runTime > 4000 && runTime < 6500
 ) {
    image(aptImg, 280, 15, 100, 50)
}

if(runTime > 5000 && runTime < 6500
) {
   image(aptImg, 11, 340, 100, 50)
}

if(runTime > 5500 && runTime < 6500
) {
   image(aptImg, 280, 340, 100, 50)
}
 
if(runTime > 6500 && runTime < 7000
) {
   fill(255, 24, 125)
   textSize(40)
   textStyle(BOLD)
   text("UH", 168, 222)
}

if(runTime > 7000 && runTime < 7500
) {
   fill(255, 24, 125)
   textSize(60)
   textStyle(BOLD)
   text("UH HUH", 86, 227)
}

if(runTime > 7500 && runTime < 9000
) {
   fill(255, 24, 125)
   textSize(95)
   textStyle(BOLD)
   text("UH HUH", 17, 227)
}



    print(runTime)
}