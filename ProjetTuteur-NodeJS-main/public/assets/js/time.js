var d = 0

function chrono() {
    //console.log("test")
    document.getElementById("textMin").innerText = d
    d += 1
    setTimeout(chrono,300)
}

chrono()