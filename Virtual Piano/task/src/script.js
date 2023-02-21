document.addEventListener("keydown", function(event){
    if (event.code === "KeyA"){
        let audioA = new Audio("sounds/A.mp3");
        audioA.play();
    }
    else if (event.code === "KeyS"){
        let audioS = new Audio("sounds/S.mp3");
        audioS.play();
    }
    else if (event.code === "KeyD"){
        let audioD = new Audio("sounds/D.mp3");
        audioD.play();
    }
    else if (event.code === "KeyF"){
        let audioF = new Audio("sounds/F.mp3");
        audioF.play();
    }
    else if (event.code === "KeyG"){
        let audioG = new Audio("sounds/G.mp3");
        audioG.play();
    }
    else if (event.code === "KeyH"){
        let audioH = new Audio("sounds/H.mp3");
        audioH.play();
    }
    else if (event.code === "KeyJ"){
        let audioJ = new Audio("sounds/J.mp3");
        audioJ.play();
    }
    else if (event.code === "KeyW"){
        let audioW = new Audio("sounds/W.mp3");
        audioW.play();
    }
    else if (event.code === "KeyE"){
        let audioE = new Audio("sounds/E.mp3");
        audioE.play();
    }
    else if (event.code === "KeyT"){
        let audioT = new Audio("sounds/T.mp3");
        audioT.play();
    }
    else if (event.code === "KeyY"){
        let audioY = new Audio("sounds/Y.mp3");
        audioY.play();
    }
    else if (event.code === "KeyU"){
        let audioU = new Audio("sounds/U.mp3");
        audioU.play();
    }
    else {
        console.log("Not a correct piano key");
    }
});