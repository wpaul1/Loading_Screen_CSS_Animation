let loadingScreen = document.getElementById("loadingScreen");
let loaded = false;
let btn = document.getElementById("btn");
let loadedTxt = document.getElementById("loaded");


function onLoading(){
    // if(loaded === false){
    loadingScreen.classList.remove("hide");
    // loaded = true;
    btn.classList.add("hide");

    setTimeout(onLoaded, 8000)
    
    // }else{
        // alert("Page is already loading");
    // }
}

function onLoaded(){
    // loadingScreen.classList.add("hide");
    // loaded = false;
    window.location = "loaded.html";

}