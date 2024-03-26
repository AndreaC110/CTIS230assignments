myitem = document.getElementById("firsttest");

    myitem.addEventListener("click", onClick);

    function onClick() {  
        myitem.style.color = "light gray";  
    }

    thebutton = document.getElementById("Next Page");  
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {  
    otheritem.style.color = "Purple";  
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);
function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}
<strong>Look at this bold text!</strong>

