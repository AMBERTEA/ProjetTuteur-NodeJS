function resolution(container, sac){
    /* construction du tableau de résolution */

    let resolutionTab = new Array();

    /* Initialisation du tableau */

    for (let k = 0; k < container.nbrObjectInitial()+1; k++){
        let tab = new Array();
        for (let y = 0; y < sac.getSacSize()+1; y++){
            tab.push(0);
        }
        resolutionTab.push(tab);
    }

    /* Remplisage du tableau */

    for (let k = 1; k < container.nbrObjectInitial()+1; k++){
        for(let y = 1; y < sac.getSacSize()+1; y++){
            if(y-container.getObject(k-1).getWeight() >= 0){
                let val1 = container.getObject(k-1).getValue()+resolutionTab[k-1][y-container.getObject(k-1).getWeight()];
                let val2 = resolutionTab[k-1][y];

                if(val2 > val1){
                    resolutionTab[k][y] = val2;

                }else{
                    resolutionTab[k][y] = val1;

                }
            }
            else{
                resolutionTab[k][y] = resolutionTab[k-1][y];
            }
        }
    }

    console.log(resolutionTab);

    /* Remplissage du sac */

    let size = sac.getSacSize()
    for(let k = container.nbrObjectInitial(); k > 0; k--){
        if(resolutionTab[k-1][size] != resolutionTab[k][size]){
            sac.addInSac(container.getObject(k-1));
            size-=container.getObject(k-1).getWeight();
        }
    }

    console.log("Value: "+sac.getSacValue())
    console.log("Poids: "+sac.getSacWeight())
}

