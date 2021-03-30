var d = 0

function chrono() {
    //console.log("test")
    document.getElementById("textMin").innerText = d
    d += 1
    setTimeout(chrono,300)
}

function getActualSec(date){
    var hour = date.getHours();
    var min = date.getMinutes();
    var seconde = date.getSeconds();
    var tot = hour*3600 + min*60 + seconde;
    return tot;
}

function calcTemp(date){
    let date2 = new Date();
    var tot = (date2.getHours()*3600 + date2.getMinutes()*60 + date2.getSeconds()) - date;
    return tot;
}

chrono()