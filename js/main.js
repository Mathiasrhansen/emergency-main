document.querySelector("#hue").addEventListener("mouseover", highlight);
document.querySelector("#hue").addEventListener("mouseout", unhighlight);
document.querySelector("#hue").addEventListener("click", info);
document.querySelector("#voks").addEventListener("mouseover", highlight);
document.querySelector("#voks").addEventListener("mouseout", unhighlight);
document.querySelector("#voks").addEventListener("click", info);
document.querySelector("#trimmer").addEventListener("mouseover", highlight);
document.querySelector("#trimmer").addEventListener("mouseout", unhighlight);
document.querySelector("#trimmer").addEventListener("click", info);

document.querySelector("#skæg").addEventListener("mouseout", unhighlight)
document.querySelector("#skæg").addEventListener("click", fjol);

function highlight(){
    console.log(this);
    this.style.opacity = "0.3";
}

function unhighlight(){
    console.log(this.id + " af");

    if(this == hue){
        document.querySelector("#hue").style.opacity = "1";
        document.querySelector("#hue2").style.opacity = "0";
        document.getElementById('img-container-1').src="";
        document.getElementById('img-container-2').src="";
        document.getElementById('img-container-3').src="";
        document.getElementById('time').className = "info-box unselected";
        document.getElementById('difficulty').className = "info-box unselected";
        document.getElementById('efficiency').className = "info-box unselected";
        document.querySelector( ".info-text > h2").textContent = "Tip!"
        document.querySelector(".info-text > article > p").textContent = "Klik på et ikon"
    }
    else if(this == voks){
        document.querySelector("#voks").style.opacity = "1";
        document.querySelector("#strit1").style.opacity = "1";
        document.querySelector("#strit2").style.opacity = "1";
        document.querySelector("#strit3").style.opacity = "1";
        document.querySelector("#strit4").style.opacity = "1";
        document.getElementById('img-container-1').src="";
        document.getElementById('img-container-2').src="";
        document.getElementById('img-container-3').src="";
        document.getElementById('time').className = "info-box unselected";
        document.getElementById('difficulty').className = "info-box unselected";
        document.getElementById('efficiency').className = "info-box unselected";
        document.querySelector( ".info-text > h2").textContent = "Tip!"
        document.querySelector(".info-text > article > p").textContent = "Klik på et ikon"
    }
    else if (this == trimmer){
        document.querySelector("#trimmer").style.opacity = "1";
        document.querySelector("#hår").style.opacity = "1";
        document.querySelector("#afklip").style.opacity = "0";
        document.getElementById('img-container-1').src="";
        document.getElementById('img-container-2').src="";
        document.getElementById('img-container-3').src="";
        document.getElementById('time').className = "info-box unselected";
        document.getElementById('difficulty').className = "info-box unselected";
        document.getElementById('efficiency').className = "info-box unselected";
        document.querySelector( ".info-text > h2").textContent = "Tip!"
        document.querySelector(".info-text > article > p").textContent = "Klik på et ikon"
    }
    else if (this == skæg){
        document.querySelector("#skæg").classname = "fadeIn";
    }
}

function info(){
    console.log(this.id);

    if(this == hue){
        document.querySelector( ".info-text > h2").textContent = "Hue!";
        document.getElementById("img-container-1").src="img/star-1.png";
        document.getElementById('time').className = "info-box green";
        document.getElementById('img-container-2').src="img/star-1.png";
        document.getElementById('difficulty').className = "info-box green";
        document.getElementById('img-container-3').src="img/star-5.png";
        document.getElementById('efficiency').className = "info-box red";
        document.querySelector(".info-text > article > p").textContent = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
        document.querySelector("#hue2").style.opacity = "1";
    }
    else if(this == voks){
        document.querySelector("#strit1").style.opacity = "0.0";
        document.querySelector("#strit2").style.opacity = "0.0";
        document.querySelector("#strit3").style.opacity = "0.0";
        document.querySelector("#strit4").style.opacity = "0.0";
        document.getElementById("img-container-1").src="img/star-5.png";
        document.getElementById('time').className = "info-box red";
        document.getElementById('img-container-2').src="img/star-1.png";
        document.getElementById('difficulty').className = "info-box green";
        document.getElementById('img-container-3').src="img/star-4.png";
        document.getElementById('efficiency').className = "info-box yellow";
        document.querySelector( ".info-text > h2").textContent = "Voks!"
        document.querySelector(".info-text > article > p").textContent = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    
    }
    else if(this == trimmer){
        // document.querySelector("#hår").style.opacity = "0.0";
        this.classList.add("wiggle");
        document.querySelector("#hår").classList.add("fadeOut");
        document.querySelector("#afklip").style.opacity = "1";
        document.getElementById("img-container-1").src="img/star-5.png";
        document.getElementById('time').className = "info-box red";
        document.getElementById('img-container-2').src="img/star-1.png";
        document.getElementById('difficulty').className = "info-box green";
        document.getElementById('img-container-3').src="img/star-5.png";
        document.getElementById('efficiency').className = "info-box red";
        document.querySelector( ".info-text > h2").textContent = "Trimmer!"
        document.querySelector(".info-text > article > p").textContent = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
        }
}

// function hueUnhighlight() {
//     console.log("Hue af");
//     document.querySelector("#hue").style.opacity = "1";
//     document.querySelector("#hue2").style.opacity = "0";
//     document.getElementById('img-container-1').src="";
//     document.getElementById('img-container-2').src="";
//     document.getElementById('img-container-3').src="";
//     document.getElementById('time').className = "info-box unselected";
//     document.getElementById('difficulty').className = "info-box unselected";
//     document.getElementById('efficiency').className = "info-box unselected";
//     document.querySelector( ".info-text > h2").textContent = "Tip!"
//     document.querySelector(".info-text > article > p").textContent = "Klik på et ikon"

// }

// function hueInfo() {
//     console.log("hueInfo");
//     document.querySelector( ".info-text > h2").textContent = "Hue!";
//     document.getElementById("img-container-1").src="img/star-1.png";
//     document.getElementById('time').className = "info-box green";
//     document.getElementById('img-container-2').src="img/star-1.png";
//     document.getElementById('difficulty').className = "info-box green";
//     document.getElementById('img-container-3').src="img/star-5.png";
//     document.getElementById('efficiency').className = "info-box red";
//     document.querySelector(".info-text > article > p").textContent = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
//     document.querySelector("#hue2").style.opacity = "1";
    
// }

// function voksUnhighlight() {
//     console.log("Voks af");
//     document.querySelector("#voks").style.opacity = "1";
//     document.querySelector("#strit1").style.opacity = "1";
//     document.querySelector("#strit2").style.opacity = "1";
//     document.querySelector("#strit3").style.opacity = "1";
//     document.querySelector("#strit4").style.opacity = "1";
//     document.getElementById('img-container-1').src="";
//     document.getElementById('img-container-2').src="";
//     document.getElementById('img-container-3').src="";
//     document.getElementById('time').className = "info-box unselected";
//     document.getElementById('difficulty').className = "info-box unselected";
//     document.getElementById('efficiency').className = "info-box unselected";
//     document.querySelector( ".info-text > h2").textContent = "Tip!"
//     document.querySelector(".info-text > article > p").textContent = "Klik på et ikon"
// }

// function voksInfo() {
//     console.log("voksInfo");
//     document.querySelector("#strit1").style.opacity = "0.0";
//     document.querySelector("#strit2").style.opacity = "0.0";
//     document.querySelector("#strit3").style.opacity = "0.0";
//     document.querySelector("#strit4").style.opacity = "0.0";
//     document.getElementById("img-container-1").src="img/star-5.png";
//     document.getElementById('time').className = "info-box red";
//     document.getElementById('img-container-2').src="img/star-1.png";
//     document.getElementById('difficulty').className = "info-box green";
//     document.getElementById('img-container-3').src="img/star-4.png";
//     document.getElementById('efficiency').className = "info-box yellow";
//     document.querySelector( ".info-text > h2").textContent = "Voks!"
//     document.querySelector(".info-text > article > p").textContent = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    
// }

// function trimmerUnhighlight() {
//     console.log("Trimmer af");
//     document.querySelector("#trimmer").style.opacity = "1";
//     document.querySelector("#hår").style.opacity = "1";
//     document.querySelector("#afklip").style.opacity = "0";
//     document.getElementById('img-container-1').src="";
//     document.getElementById('img-container-2').src="";
//     document.getElementById('img-container-3').src="";
//     document.getElementById('time').className = "info-box unselected";
//     document.getElementById('difficulty').className = "info-box unselected";
//     document.getElementById('efficiency').className = "info-box unselected";
//     document.querySelector( ".info-text > h2").textContent = "Tip!"
//     document.querySelector(".info-text > article > p").textContent = "Klik på et ikon"
// }

// function trimmerInfo() {
//     console.log("trimmerInfo");
//     document.querySelector("#hår").style.opacity = "0.0";
//     document.querySelector("#afklip").style.opacity = "1";
//     document.getElementById("img-container-1").src="img/star-5.png";
//     document.getElementById('time').className = "info-box red";
//     document.getElementById('img-container-2').src="img/star-1.png";
//     document.getElementById('difficulty').className = "info-box green";
//     document.getElementById('img-container-3').src="img/star-5.png";
//     document.getElementById('efficiency').className = "info-box red";
//     document.querySelector( ".info-text > h2").textContent = "Trimmer!"
//     document.querySelector(".info-text > article > p").textContent = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    
// }

function fjol() {
    this.classList.add("fadeOut");
    document.querySelector( ".info-text > h2").textContent = "Skæg!";
    document.querySelector( ".info-text > article > p").textContent = "Fuck jeg har grimt skæg";
}