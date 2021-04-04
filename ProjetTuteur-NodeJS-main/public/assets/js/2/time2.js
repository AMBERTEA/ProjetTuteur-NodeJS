var d = 0

function chrono() {
    // console.log("test")
     if(document.getElementById("buttonValidate").style.display !== "none"){
         return
     }
     if(document.getElementById("boxSolution").hidden === false){
         for (let i in menu.getContainer()){
             document.getElementById(i+"Ligne").style.display = "none"
             document.getElementById("menuResto").style.display = "none"

             document.getElementById("leRecu").style.margin = "auto"
             document.getElementById("Efface").style.display = "none"


         }
         return
     }
    console.log(1)
    document.getElementById("textMin").innerText = d
    d += 1
    setTimeout(chrono,300)
}

chrono()