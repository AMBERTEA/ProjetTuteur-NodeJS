var d = 0

function chrono() {
    //console.log("test")
    if(document.getElementById("buttonValidate").hidden === false){
        return
    }

    console.log(1)
    document.getElementById("textMin").innerText = d
    d += 1
    setTimeout(chrono,300)
}

chrono()