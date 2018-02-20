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

window.onscroll = function() {
    var header = document.getElementsByClassName("sticky-header");
    var uHeader = document.getElementsByClassName("mainmenu");
    var pH = document.getElementsByClassName("float-block");
    var H = document.body.scrollHeight - pH[0].scrollHeight;
    if(document.body.scrollTop > H) {
        header[0].classList.toggle('hide-stick',true);
        uHeader[0].classList.toggle('stick-header',true);
    } else {
        header[0].classList.toogle('hide-stick',false);
        uHeader[0].classList.toggle('stick-header',false);
    }
}

//Creation a mini-script for calculation length of circle:
var lcircle = document.getElementById("lcircle");
var lcircleOut = document.getElementById("lcircle-val");
var lcircleOutput = document.getElementById("lcircle-output");
lcircle.oninput = function() {
    lcircleOut.innerHTML = lcircle.value + '(m)';
    lcircleOutput.innerHTML = 'L = ' + 2 * Math.PI * lcircle.value + '(m)';
}

//For sidebar navigation panel:
var sidePanel = document.getElementsByClassName("side-buttons");
console.log(sidePanel[0].innerHTML);
