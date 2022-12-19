function initialize(){
    p1 = document.getElementById("pic1");
    p2= document.getElementById("pic2");
    p3 = document.getElementById("pic3");
    p4 = document.getElementById("pic4");
    p5 = document.getElementById("pic5");
    p6 = document.getElementById("pic6");
    p7 = document.getElementById("pic7");
    p8 = document.getElementById("pic8");
    p9 = document.getElementById("pic9");
    p10 = document.getElementById("pic10");
    p11 = document.getElementById("pic11");
    p12 = document.getElementById("pic12");
    p13 = document.getElementById("pic13");
    p14 = document.getElementById("pic14");
    p15 = document.getElementById("pic15");
    p16 = document.getElementById("pic16");
    score = 0;
    flipCounter = 0;
    flipped = "";
    block = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16]
    for (var i = 0 ; i < block.length ; i++)
    {
        //revealed
        block[i].flipped = true;
        if (i >= 8)
        {
            block[i].src = "/Assets/" + (i - 7) + ".jpg";
        }
        else{
            block[i].src = "/Assets/" + (i + 1) + ".jpg";
        }
    }

}

function hideAll(){
    for(var i = 0; i < block.length; i++){
        block[i].src = "/Assets/orange.jpg";
        block[i].flipped = false;
    }
}

function hide(picture){
    picture.src = "Assets/Orange.jpg";
}

function hide2(first,second){
    hide(first);
    hide(second);
}

function randomGenerator(min, max){
    var random = Math.floor((Math.random() * max + min));
    return random;
}

function shuffle(){
    //array represents the images that will be taken
    var array = ["1","2","3","4","5","6","7","8","1","2","3","4","5","6","7","8"];
    for (var i = 0 ; i < 16 ; i++)
    {
        //gets a random index from to take from array
        var random = randomGenerator(0,array.length);
        //assigns the element at the "random" index to block[i]'s image source
        block[i].src = "/Assets/" + array[random] + ".jpg";
        
        //creates a variables to keep track of picture
        block[i].pic = "/Assets/" + array[random] + ".jpg";

        //removes the index and updates the list length.
        array.splice(random,1);
    }

}
//reveals
function flip(card){
    if(card.flipped == false)
    {
        card.src = card.pic;
        flipCounter++;
        score++;
        if(flipCounter == 1)
        {
            flipped = card;
            card.flipped = true;
        }
        else if(flipCounter == 2)
        {
            card.flipped = true;    
            console.log(correct(flipped,card));
            if(!correct(flipped,card)){
                window.setTimeout(hide2(card,flipped),1000);
                card.flipped = false;
                flipped.flipped = false;
            }
            flipCounter = 0;
        }
    }
    else{
        console.log("CARD ALREADY FLIPPED");
    } 
}

function correct(first, second){
    if(first.src == second.src)
    {
        return true;
    }
    else{
        return false;
    }
}

function win(){
    
}