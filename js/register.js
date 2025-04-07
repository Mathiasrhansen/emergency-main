/* Ekstra text*/
document.querySelector("#equipment-yes").addEventListener("click", checkYes)
document.querySelector("#equipment-no").addEventListener("click", checkNo)
var checkBool = null;

function checkYes(){
    // console.log("Ja virker");
    checkBool = true;
    // console.log(checkBool);
    
    if (checkBool == true){
        document.querySelector("#extra").className = ""
    }
}

function checkNo(){
    // console.log("Nej virker")
    checkBool = false;
    // console.log(checkBool);
    
    if (checkBool == false){
        document.querySelector("#extra").className = "hidden";
    }
}
// ***************************************************************************
// Summary kode
// ***************************************************************************
document.querySelector("#sum").style.display = "none";
// resetter formen fra starten
document.querySelector("#webform").reset();

// Eventlistnere på knapperne
document.querySelector("#reset_btn").addEventListener("click", reset);
document.querySelector("#submit_btn").addEventListener("click", submitForm);

// Sender value af inputfelterne til Summary
function submitForm() {
  // viser Summary
  document.querySelector("#sum").style.display = "block";

  // forskellige inputfelter
  document.querySelector("#sumName").textContent = document.querySelector("#full-name").value;
  document.querySelector("#sumEmail").textContent = document.querySelector("#email").value;
  document.querySelector("#sumNum").textContent = document.querySelector("#phone-num").value;
  document.querySelector("#sumTip").textContent = document.querySelector("#tip").value;

  if(checkBool == false){
    console.log("Sum nej")
    document.getElementById("sumRadio").innerHTML = "Intet";
  }
  if (checkBool == true){
    console.log("Sum ja")
    document.getElementById("sumRadio").textContent = document.querySelector("#equipment-input").value;
  }

}

// Resetter Formen og skjuler Summary
function reset() {
  document.querySelector("#webform").reset();
  document.querySelector("#sum").style.display = "none";
}