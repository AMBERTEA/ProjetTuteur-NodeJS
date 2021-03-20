const maxWeight = 20;

let sacADosSol = new Sac(maxWeight);
let sacADosPlayer = new Sac(maxWeight);

let lampe = new survieObject(1,3,"lampe");
let chocolat = new survieObject(1,2,"chocolat");
let corde = new survieObject(5,4,"corde");
let couteau = new survieObject(3,2,"couteau");
let telephone = new survieObject(4,1,"telephone");

let menu = new Container();

menu.add(lampe,10);
menu.add(chocolat,10);
menu.add(corde,10);
menu.add(couteau,10);
menu.add(telephone,5);

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
            sacADosPlayer.addInSacPlayer(obj);
            menu.remove(name);
            document.getElementById(name).innerHTML = name+": "+item.nbr+"\nPoids: "+obj.getWeight()+"\nValeur: "+obj.getValue();
            if(item.nbr<=0){
                document.getElementById(name).disabled = true;
            }
        });
    }
}


createButton(menu);

let deleteObject;

resolution(menu,sacADosSol);

function compare(sacADosPlayer,sacADosSol){
    if(sacADosSol.getSacWeight() >= sacADosPlayer.getSacWeight() && sacADosSol.getSacValue() <= sacADosPlayer.getSacValue()){
        window.alert("Bravo");
    }else{
        window.alert("C'est Faux");
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
    }
});
console.log(sacADosSol);