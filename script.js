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
    
    block = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16]
    for (var i = 0 ; i < block.length ; i++)
    {
        block[i].flipped = false;
        if (i >= 8)
        {
            block[i].src = "/Assets/" + (i - 7) + ".jpg";
        }
        else{
            block[i].src = "/Assets/" + (i + 1) + ".jpg";
        }
    }

}

function change(picture){
    searchPic = new Image(100,100);
    searchPic.src = "";
    document[picture].src = "";
}
/*
    for ( var i = 0 ; i < block.length ; i++)
    {
        block[i].src = "background.jpg";
        
    }
    */
function randomGenerator(){
    var random = Math.floor((Math.random() * 8 + 1));
    return random;
}
function shuffle(){
    var array = ["1","2","3","4","5","6","7","8","1","2","3","4","5","6","7","8"];
    console.log("--------------------");
    for (var i = 0 ; i < 15 ; i++)
    {
        var random = randomGenerator();
        while(array.splice[random,1] == -1){
            random = randomGenerator();
        }
        block[i].src = "/Assets/" + random + ".jpg";
        array.splice[random,1];
        console.log(random);
    }

}