var splashScreen
var playbutton, musicbutton, mutebutton
var gameState = "wait"
var bglevel1, object1, object2, object3, object4, object5
var object1img, object2img, object3img, object4img, object5img
var player
var playerimg
var x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, player,silverimg,goldimg,bronzeimg,gold,silver,bronze
var x1coin, y1coin, x2coin, y2coin, x3coin, y3coin
var bglevel2,treasureanimation
var music 

var score = 0
var score2 = 0
let timer = 0;
let totalDuration = 10;
let minutes, seconds;
let totalDuration2 = 10;
let timer2 = 0;


function preload() {
    splashScreen = loadImage("splash.gif")
    bglevel1 = loadImage("assets/bg1.jpeg")
    playerimg = loadAnimation("assets/boy1.png", "assets/boy2.png", "assets/boy3.png", "assets/boy4.png", "assets/boy5.png", "assets/boy6.png")

    object1img = loadImage("a1.png")
    object2img = loadImage("a2.png")
    object3img = loadImage("a3.png")
    object4img = loadImage("a4.png")
    object5img = loadImage("a5.png")
    bglevel2=loadImage("bg13.jpg")

    

    silverimg=loadImage("assets/1.png")

    goldimg=loadAnimation("assets/2.png")
    bronzeimg=loadAnimation("assets/3.png")

    music=loadSound("assets/fullgamesound.mp3") 
}

function setup() {
    createCanvas(windowWidth, windowHeight)


    x1 = Math.round(random(50, windowWidth))
    y1 = Math.round(random(50, windowHeight))

    x2 = Math.round(random(100, windowWidth - 100))
    y2 = Math.round(random(100, windowHeight - 100))

    x3 = Math.round(random(100, windowWidth - 100))
    y3 = Math.round(random(100, windowHeight - 100))

    x4 = Math.round(random(100, windowWidth - 100))
    y4 = Math.round(random(100, windowHeight - 100))

    x5 = Math.round(random(100, windowWidth - 100))
    y5 = Math.round(random(100, windowHeight - 100))

    // minutes=floor(totalDuration/60)
    seconds = totalDuration % 60




    playbutton = createImg("buttons1-main/play.png")
    playbutton.position(width / 4 + 100, height - (height / 4))
    playbutton.size(180, 150)

    musicbutton = createImg("buttons1-main/sound.png")
    musicbutton.position(width / 2, height - (height / 3.95))
    musicbutton.size(170, 150)
    musicbutton.mousePressed(mute)

    mutebutton = createImg("buttons1-main/mute.png")
    mutebutton.position(width / 2, height - (height / 3.95))
    mutebutton.size(170, 150)
    mutebutton.hide()
    mutebutton.mousePressed(mute)

    player = createSprite(100, height - 100)
    player.addAnimation("all",playerimg)
    player.visible = false
    player.scale = 0.5



    // level 1 collectibles
    // level 1 collectibles
    object1 = createSprite(x1, y1)
    object1.addImage(object1img)
    object1.scale=.5

    object2 = createSprite(x2, y2)
    object2.addImage(object2img)
    object2.scale=.5

    object3 = createSprite(x3, y3)
    object3.addImage(object3img)
    object3.scale=.5

    object4 = createSprite(x4, y4)
    object4.addImage(object4img)
    object4.scale=.5

    object5 = createSprite(x5, y5)
    object5.addImage(object5img)
    object5.scale=.5



    object1.visible = false
    object2.visible = false
    object3.visible = false
    object4.visible = false
    object5.visible = false


    // level 2 random positions
    
    x1coin = Math.round(random(50, windowWidth))
    y1coin = Math.round(random(50, windowHeight))

    x2coin = Math.round(random(100, windowWidth - 100))
    y2coin = Math.round(random(100, windowHeight - 100))

    x3coin = Math.round(random(100, windowWidth - 100))
    y3coin = Math.round(random(100, windowHeight - 100))

    gold=createSprite(x1coin,y1coin)
    gold.addAnimation("gold",goldimg)
    gold.scale=1
    gold.visible=false
  
    bronze=createSprite(x2coin,y2coin)
    bronze.addAnimation("bronze",bronzeimg)
    bronze.scale=1
    bronze.visible=false


    silver=createSprite(x3coin,y3coin)
    silver.addAnimation("silver",silverimg)
    silver.scale=1
    silver.visible=false
    // music.play()

}

function draw() {

    player.x = mouseX
    player.y = mouseY

    if (gameState == "wait") {
        background(splashScreen)
    }


    playbutton.mousePressed(() => {
        about()
    })


    if (gameState == "level1") {
        background(bglevel1)
        playbutton.hide()
        mutebutton.hide()
        musicbutton.hide()
        enterlevel1()
    }
    if (gameState == "level1start") {
        background(bglevel1)
        object1.visible = true
        object2.visible = true
        object3.visible = true
        object4.visible = true
        object5.visible = true
        player.visible = true


        //     for(var i=1;i<6;i++){
        //     object = "object"+i
        // console.log(object)}
        // collecttreasurelevel1(object1,player)
        if (object1.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            object1.remove();
            score += 1

        }
        if (object2.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            object2.remove();
            score += 1
        }
        if (object3.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            object3.remove();
            score += 1
        }
        if (object4.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            object4.remove();
            score += 1
        }
        if (object5.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            object5.remove();
            score += 1
        }


        if (score >= 30) {
            player.visible = false
            score = 0
            timer = 0;
            totalDuration = 10;
            minutes, seconds;
            

            level1complete()

        }
    }


    if (gameState == "level2start") {
        background(0)
        image(bglevel2,0,0,width,height)
      
        object1.visible = false
        object2.visible = false
        object3.visible = false
        object4.visible = false
        object5.visible = false
        player.visible = true

        gold.visible=true
        silver.visible=true
        bronze.visible=true



     
        // collecttreasurelevel1(object1,player)
        // if (object1.overlapPoint(mouseX, mouseY)) {
        //     mouseX += 15
        //     mouseY += 15
        //     object1.remove();
        //     score += 1

        // }
        if (gold.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            gold.remove();
            score2 += 10
        }
        if (silver.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            silver.remove();
            score2 += 10
        }
        if (bronze.overlapPoint(mouseX, mouseY)) {
            mouseX += 15
            mouseY += 15
            bronze.remove();
            score2 += 10
        }

        if (score2 >= 50) {
            player.visible = false
            score = 0
            timer = 0;
            totalDuration = 10;
            minutes, seconds;
           win()

        }
        // if (object5.overlapPoint(mouseX, mouseY)) {
        //     mouseX += 15
        //     mouseY += 15
        //     object5.remove();
        //     score += 1
        // }



    }

    drawSprites()


    if (gameState === "level1start") {
        fill("red")
        // fontWeight(2)
        stroke("black")
        strokeWeight(4)
        textSize(30)
        text("Score: " + score, width - 200, 50)



        text(nf(seconds, 2), 200, 50)

        if (frameCount % 60 == 0 && timer < totalDuration) {
            timer++
            // minutes=floor(totalDuration-timer/60)
            seconds = floor(totalDuration - timer % 60)
        }
    }

    if (gameState === "level2start") {
        fill("red")
        // fontWeight(2)
        stroke("black")
        strokeWeight(4)
        textSize(30)
        text("Score: " + score2, width - 200, 50)



        text(nf(seconds, 2), 200, 50)

        if (frameCount % 60 == 0 && timer2 < totalDuration2) {
            timer2++
            // minutes=floor(totalDuration-timer/60)
            seconds = floor(totalDuration2 - timer2 % 60)
        }
    }

}


function about() {
    swal({
        title: "HOW TO PLAY THE GAME !!!",
        text: "Complete the tasks as instructed.. \n in various hint messages",
        imageUrl: "buttons1-main/play.png",
        imageSize: "200x200",
        confirmButtonText: "LET THE QUEST BEGIN!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "level1"
        }
    )


}


function enterlevel1() {
    swal({
        title: "Find the Door to Wonders !!!",
        text: "For the Door to appear , collect 5 magical Items!!",
        imageUrl: "unlock.gif",
        imageSize: "200x200",
        confirmButtonText: "ADVENTURE BEGINS!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "level1start"
        }
    )
}

function collecttreasurelevel1(o1) {
    d = dist(o1.x, o1.y, o2.x, o2.y)
    console.log(d)
    if (d <= 50) {
        o1.visible = false
        o1.remove()
        score += 1
    }

}

function level1complete() {
    swal({
        title: "Here You Come Closer !!!",
        text: "Enter and become a Certified PIRATE!!",
        imageUrl: "assets/5.png",
        imageSize: "200x200",
        confirmButtonText: "DOOR TO WONDERS!!",
        confirmButtonColor: "green"
    },
        function () {
            gameState = "level2start"
        }
    )
}


function win() {
    swal({
        title: "Kudos !!",
        text: "YOU ARE A CERTIFIED PIRATE NOW!!",
        imageUrl: "assets/pirate.png",
        imageSize: "500x300",
        confirmButtonText: "HAVE FUN !!",
        confirmButtonColor: "green"
    },
        function () {
           location.reload()
        }
    )
}


function mute() {
    if (music.isPlaying()) {
        music.stop();
        mutebutton.show();
        musicbutton.hide();
        console.log("mute")
    }
    else {
        musicbutton.show()
        mutebutton.hide();
        music.play();
        console.log("unmute")
    }
}