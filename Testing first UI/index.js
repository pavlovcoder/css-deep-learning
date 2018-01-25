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

var chatIcon = document.getElementsByClassName("material-icons chat-icon");
var helpMessage = document.getElementsByClassName("help-message");
document.getElementsByClassName("chat-help")[0].onmouseover = function(){
  chatIcon[0].innerHTML = "chat";
  chatIcon[0].style.transition = ".5s ease-out";
  helpMessage[0].classList.toggle('hideWidth',true);
}

document.getElementsByClassName("chat-help")[0].onmouseout = function(){
  chatIcon[0].innerHTML = "help";
  chatIcon[0].style.transition = ".5 ease-out";
  helpMessage[0].classList.toggle('hideWidth',false);
}
