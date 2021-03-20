class Sac{
    constructor(size){
        this.sacSize = size;
        this.sac = [];
    }

    getSacSize(){
        return this.sacSize;
    }

    setSacSize(size){
        this.sacSize = size;
    }

    getSacWeight(){
        let totalWeight = 0;
        this.sac.forEach(element => {
            totalWeight+=element.getWeight();
        });
        return totalWeight;
    }

    getSacValue(){
        let totalValue = 0;
        this.sac.forEach(element =>{
            totalValue+=element.getValue();
        });
        return totalValue;
    }

    getSac(){
        return this.sac;
    }

    addInSac(survieObject){
        if (this.getSacWeight()<this.sacSize){
            this.sac.push(survieObject);
        }else{
            window.alert("L'objet choisie est trop lourd");
        }
    }

    addInSacPlayer(survieObject){
        if (this.getSacWeight()<this.sacSize){
            this.sac.push(survieObject);
            document.getElementById("boxPiece").innerHTML += '<button style="border-radius: 50%;">'+survieObject.getName()+'</button>';
            console.log(this.sac);
        }else{
            window.alert("L'objet choisie est trop lourd");
        }
    }

    deleteLastInSac(){
        return this.sac.pop();
    }

    clearSac(){
        this.sac = [];
    }
}