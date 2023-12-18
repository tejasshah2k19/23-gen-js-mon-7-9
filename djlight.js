function bgRed(){
    document.body.bgColor="red";
    setTimeout(bgGreen,1000);
    // bgGreen();
}

function bgGreen(){
    document.body.bgColor="green";
    setTimeout(bgYellow,1000);
   
}

function bgYellow(){
    document.body.bgColor="yellow";
   // bgBlue();
   setTimeout(bgBlue,1000);
}

function bgBlue(){
    document.body.bgColor="blue";
    setTimeout(bgBlack,1000);
}

function bgBlack(){
    document.body.bgColor="black";
    setTimeout(bgRed,1000);
}

