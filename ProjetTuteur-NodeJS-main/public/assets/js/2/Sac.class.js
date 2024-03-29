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

           document.getElementById("boxSolution").innerHTML += '<button id="boutonSol" >'+survieObject.getName()+'</button>';
        }else{
            swal("attention","L'objet choisie est trop lourd","warning")
        }
    }

    addInSacPlayer(survieObject){
        if (this.getSacWeight()+survieObject.getWeight() <= this.sacSize){
            this.sac.push(survieObject);
            //document.getElementById("boxPiece").innerHTML += '<button style="border-radius: 50%;">'+survieObject.getName()+'</button>';
            console.log(this.sac);
            return 0;
        }else{
            swal("Attention","L'objet choisie est trop lourd","warning")
            return -1;
        }
    }

    deleteLastInSac(){
        return this.sac.pop();
    }

    clearSac(){
        this.sac = [];
    }
}