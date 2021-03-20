class Container{
    constructor(){
        this.container = [];
    }

    add(survieObject, n) {
        this.container[survieObject.getName()] = {
            object: survieObject,
            nbr: n,
            initalNbr: n
        }
    }

    remove(survieObjectName){
        this.container[survieObjectName].nbr--;
    }

    getContainer(){
        return this.container;
    }

    nbrObjectInitial(){
        let nbrTotal = 0;
        for(let key in this.container){
            nbrTotal+=this.container[key].initalNbr;
        }
        return nbrTotal;
    }

    getObject(index) {
        if (index < 0 || index > this.nbrObjectInitial()) return -1;

        let obj = null;
        let acc = 0;

        for (let key in this.container) {
            acc += this.container[key].initalNbr;
            if (index < acc) {
                obj = this.container[key].object;
                break;
            }
        }

        return obj;
    }
}