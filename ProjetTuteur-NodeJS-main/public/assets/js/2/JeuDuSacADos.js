let maxWeight;


let date = new Date();

let sacADosSol;
let sacADosPlayer;

let pateCarbo;
let pateBolo;
let frite;
let sousoupe;
let steak;
let saladeMixte;
let saladeCrevette;
let porc;
let mouton;

let menu = new Container();

var doc = document.getElementById("difficulte").value

if (doc === "Facile") {
    maxWeight = Math.floor(Math.random()*10)+15;

    sacADosSol = new Sac(maxWeight);
    sacADosPlayer = new Sac(maxWeight);

    pateCarbo = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"pateCarbo");
    pateBolo = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"pateBolo");
    frite = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"frite");
    sousoupe = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"sousoupe");
    steak = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"steak");
    saladeMixte = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"saladeMixte");
    saladeCrevette = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"saladeCrevette");
    porc = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"porc");
    mouton = new survieObject(Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1,"mouton");

    menu = new Container();

    menu.add(pateCarbo,Math.floor(Math.random()*3)+1);
    menu.add(pateBolo,Math.floor(Math.random()*3)+1);
    menu.add(frite,Math.floor(Math.random()*3)+1);
    menu.add(sousoupe,Math.floor(Math.random()*3)+1);
    menu.add(steak,Math.floor(Math.random()*3)+1);
    menu.add(saladeMixte,Math.floor(Math.random()*3)+1);
    menu.add(saladeCrevette,Math.floor(Math.random()*3)+1);
    menu.add(porc,Math.floor(Math.random()*3)+1);
    menu.add(mouton,Math.floor(Math.random()*3)+1);

    menu.length = 5
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
        newButton.setAttribute("class"," hide btn btn-primary");

        const currentDiv = document.getElementById(name);

        document.body.insertBefore(newButton,currentDiv);

        // document.getElementById(name).innerHTML = name+": "+item.nbr+"\nPoids: "+obj.getWeight()+"\nValeur: "+obj.getValue();
        document.getElementById(name).innerHTML = "Ajouter";
        document.getElementById(name).addEventListener('click', function(){
            if (sacADosPlayer.addInSacPlayer(obj) === 0)
                menu.remove(name);
            // document.getElementById(name).innerHTML = name+": "+item.nbr+"\nPoids: "+obj.getWeight()+"\nValeur: "+obj.getValue();
            document.getElementById(name).innerHTML = "Ajouter";
            document.getElementById("sizeAndValue").innerHTML = "Poids: "+sacADosPlayer.getSacWeight()+"/"+sacADosPlayer.getSacSize()+"\nValeur: "+sacADosPlayer.getSacValue();
            if(item.nbr<=0){
                document.getElementById(name).disabled = true;
            }
        });
    }
}



createButton(menu);

resolution(menu,sacADosSol);

function compare(sacADosPlayer,sacADosSol){
    if(sacADosSol.getSacWeight() >= sacADosPlayer.getSacWeight() && sacADosSol.getSacValue() <= sacADosPlayer.getSacValue()){
        //dans le cas ou nous avons gagné
        document.getElementById("isWin").value = parseInt(document.getElementById("textMin").innerText);
        document.getElementById("buttonValidate").style.display = "inline"
        window.alert("Bravo");
    }else{
        window.alert("Tu pouvais faire mieux");
        document.getElementById("boxSolution").hidden = false
        document.getElementById("solution").innerHTML = "Poids: "+sacADosSol.getSacWeight()+"/"+sacADosSol.getSacSize()+" Valeur: "+sacADosSol.getSacValue();
    }
}

document.getElementById("Valider").addEventListener('click',function(){
    compare(sacADosPlayer,sacADosSol);
    console.log(sacADosPlayer.getSacWeight());
    console.log(sacADosPlayer.getSacValue());
});


console.log(sacADosSol);