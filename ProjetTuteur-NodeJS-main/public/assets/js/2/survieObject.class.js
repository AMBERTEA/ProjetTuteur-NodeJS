class survieObject{

    constructor(value, weight, name) {
        this.value = value;
        this.weight = weight;
        this.name = name;
    }

    getValue(){
        return this.value;
    }

    getWeight(){
        return this.weight;
    }

    getName(){
        return this.name;
    }

    setValue(value){
        this.value = value;
    }

    setWeight(weight){
        this.weight = weight;
    }

    setName(name){
        this.name = name;
    }
}