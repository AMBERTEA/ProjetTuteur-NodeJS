let maxWeight;

let sacADosSol;
let sacADosPlayer;

let lampe;
let chocolat;
let corde;
let couteau;
let telephone;

let monRandom = Math.floor(Math.random());

let menu = new Container();

var doc = document.getElementById("difficulte").value

if (doc === "Facile") {
    maxWeight = Math.floor(Math.random()*10)+15;

    sacADosSol = new Sac(maxWeight);
    sacADosPlayer = new Sac(maxWeight);

    lampe = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"lampe");
    chocolat = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"chocolat");
    corde = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"corde");
    couteau = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"couteau");
    telephone = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"telephone");

    menu = new Container();

    menu.add(lampe,Math.floor(Math.random()*3)+1);
    menu.add(chocolat,Math.floor(Math.random()*3)+1);
    menu.add(corde,Math.floor(Math.random()*3)+1);
    menu.add(couteau,Math.floor(Math.random()*3)+1);
    menu.add(telephone,Math.floor(Math.random()*3)+1);
} else if (doc === "Moyen") {

} else {

}

function createButton(menu){
    let cont = menu.getContainer()
    for (let key in cont) {
        let item = cont[key];
        let obj = item.object;
        let name = obj.getName();

        const newButton = document.createElement("button");
        const newContent = document.createTextNode(name);

        newButton.appendChild(newContent);
        newButton.setAttribute("id",name);
        newButton.setAttribute("class","btn btn-primary");

        const currentDiv = document.getElementById("button");

        document.body.insertBefore(newButton,currentDiv);

        document.getElementById(name).innerHTML = name+": "+item.nbr+"\nPoids: "+obj.getWeight()+"\nValeur: "+obj.getValue();
        document.getElementById(name).addEventListener('click', function(){
            if (sacADosPlayer.addInSacPlayer(obj) == 0)
                menu.remove(name);
            document.getElementById(name).innerHTML = name+": "+item.nbr+"\nPoids: "+obj.getWeight()+"\nValeur: "+obj.getValue();
            document.getElementById("sizeAndValue").innerHTML = "Poids: "+sacADosPlayer.getSacWeight()+"/"+sacADosPlayer.getSacSize()+"\nValeur: "+sacADosPlayer.getSacValue();
            if(item.nbr<=0){
                document.getElementById(name).disabled = true;
            }
        });
    }
}
document.getElementById("sizeAndValue").innerHTML = "Poids: "+sacADosPlayer.getSacWeight()+"/"+sacADosPlayer.getSacSize()+" Valeur: "+sacADosPlayer.getSacValue();

createButton(menu);

let deleteObject;

resolution(menu,sacADosSol);

function compare(sacADosPlayer,sacADosSol){
    if(sacADosSol.getSacWeight() >= sacADosPlayer.getSacWeight() && sacADosSol.getSacValue() <= sacADosPlayer.getSacValue()){
        window.alert("Bravo");
    }else{
        window.alert("Tu pouvais faire mieux");
        document.getElementById("boxSolution").style.display = "block";
        document.getElementById("solution").innerHTML = "Poids: "+sacADosSol.getSacWeight()+"/"+sacADosSol.getSacSize()+" Valeur: "+sacADosSol.getSacValue();
    }
}

document.getElementById("Valider").addEventListener('click',function(){
    compare(sacADosPlayer,sacADosSol);
    console.log(sacADosPlayer.getSacWeight());
    console.log(sacADosPlayer.getSacValue());
});

document.getElementById("Effacé").addEventListener('click',function(){
    sacADosPlayer.clearSac();
    document.getElementById("boxPiece").innerHTML = '';
    for(let key in menu.getContainer()){
        menu.getContainer()[key].nbr = menu.getContainer()[key].initalNbr;
        console.log(menu[key])
        document.getElementById(menu.getContainer()[key].object.getName()).innerHTML = menu.getContainer()[key].object.getName()+": "+menu.getContainer()[key].nbr+"\nPoids: "+menu.getContainer()[key].object.getWeight()+"\nValeur: "+menu.getContainer()[key].object.getValue();
        document.getElementById(menu.getContainer()[key].object.getName()).disabled = false;
        document.getElementById("sizeAndValue").innerHTML = "Poids: "+sacADosPlayer.getSacWeight()+"/"+sacADosPlayer.getSacSize()+" Valeur: "+sacADosPlayer.getSacValue();
    }
});


console.log(sacADosSol);