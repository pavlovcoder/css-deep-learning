//Creation a rotation effect of arrow up to down:
var simTooltip = document.getElementsByClassName("simple-tooltip"),
arrow = document.getElementsByClassName("arrow"),
dropList = document.getElementsByClassName("visible-content"),
contentList = document.getElementsByClassName("contentOfList");

simTooltip[0].addEventListener("mouseover",function(){
    arrow[0].classList.toggle('down',true);
    showDropdownList(true);
    showContentOfList(true);
});

simTooltip[0].addEventListener("mouseout",function(){
    arrow[0].classList.toggle('down',false);
    showDropdownList(false);
    showContentOfList(false);
});

function showDropdownList(show){
    if(show !== true){
        dropList[0].classList.toggle('dropHeight',false);
    } else {
        dropList[0].classList.toggle('dropHeight',true);
    }
    console.log('Class name of dropList = ' + dropList[0].className);
}

function showContentOfList(show){
    (show !== true) ? contentList[0].classList.toggle('showContent',false) : contentList[0].classList.toggle('showContent',true);
}

dropList[0].addEventListener("mouseover",function(){
    showDropdownList(true);
    showContentOfList(true);
    arrow[0].classList.toggle('down',true);
});

dropList[0].addEventListener("mouseout",function(){
    showDropdownList(false);
    showContentOfList(false);
    arrow[0].classList.toggle('down',false);
});

//Add new sound-effects of click for different buttons:
/*var soundSource = new Audio('button-click.mp3');
document.getElementsByTagName("LI")[21].addEventListener("mouseover",function(){
    soundSource.play();
    console.log("Audio files: " + soundSource);
});*/

/*var btnClickSound = {
    elements : [20,21,22,23,24],
    soundSource : new Audio('button-click.mp3'),
    playSound : function(){
        var i;
        for(i in this.elements ){
            document.getElementsByTagName("LI")[23].addEventListener("mouseover",function(){
                this.soundSource.play();
            });
        }
    }
}*/

document.getElementsByTagName("LI")[20].addEventListener("mouseover",function(){
    
})


