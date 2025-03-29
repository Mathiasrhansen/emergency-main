document.querySelector("#hue").addEventListener("mouseover", hueHighlight);
document.querySelector("#hue").addEventListener("mouseout", hueUnhighlight);
document.querySelector("#hue").addEventListener("click", hueInfo);
document.querySelector("#voks").addEventListener("mouseover", voksHighlight);
document.querySelector("#voks").addEventListener("mouseout", voksUnhighlight);
document.querySelector("#voks").addEventListener("click", voksInfo);
document.querySelector("#trimmer").addEventListener("mouseover", trimmerHighlight);
document.querySelector("#trimmer").addEventListener("mouseout", trimmerUnhighlight);
document.querySelector("#trimmer").addEventListener("click", trimmerInfo);

function hueHighlight() {
    console.log("Hue på");
    document.querySelector("#hue").style.opacity = "0.3";
}

function hueUnhighlight() {
    console.log("Hue af");
    document.querySelector("#hue").style.opacity= "1";
    document.querySelector("#hue2").style.opacity= "0";

}

function hueInfo() {
    console.log("hueInfo");
    document.querySelector( ".info-text > h2").textContent = "Hue!"
    document.querySelector(".info-text > article > p").textContent = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    document.querySelector("#hue2").style.opacity = "1";
    
}

function voksHighlight() {
    console.log("Voks på");
    document.querySelector("#voks").style.opacity = "0.3";
}

function voksUnhighlight() {
    console.log("Voks af");
    document.querySelector("#voks").style.opacity = "1";
    document.querySelector("#strit1").style.opacity = "1";
    document.querySelector("#strit2").style.opacity = "1";
    document.querySelector("#strit3").style.opacity = "1";
    document.querySelector("#strit4").style.opacity = "1";
}

function voksInfo() {
    console.log("voksInfo");
    document.querySelector("#strit1").style.opacity = "0.0";
    document.querySelector("#strit2").style.opacity = "0.0";
    document.querySelector("#strit3").style.opacity = "0.0";
    document.querySelector("#strit4").style.opacity = "0.0";
    document.querySelector( ".info-text > h2").textContent = "Voks!"
    document.querySelector(".info-text > article > p").textContent = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    
}

function trimmerHighlight() {
    console.log("Trimmer på");
    document.querySelector("#trimmer").style.opacity = "0.3";
    
}

function trimmerUnhighlight() {
    console.log("Trimmer af");
    document.querySelector("#trimmer").style.opacity = "1";
    document.querySelector("#hår").style.opacity = "1";
    document.querySelector("#afklip").style.opacity = "0";
}

function trimmerInfo() {
    console.log("trimmerInfo");
    document.querySelector("#hår").style.opacity = "0.0";
    document.querySelector("#afklip").style.opacity = "1";
    document.querySelector( ".info-text > h2").textContent = "Trimmer!"
    document.querySelector(".info-text > article > p").textContent = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    
}