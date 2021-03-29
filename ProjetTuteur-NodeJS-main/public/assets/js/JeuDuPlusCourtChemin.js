var doc = document.getElementById("difficulte").value
let graph = new Graph();
var c;

if(doc === "Facile") {
    let A = graph.addNode("A");
    let B = graph.addNode("B");
    let C = graph.addNode("C");

    let D = graph.addNode("D");
    let E = graph.addNode("E");
    let F = graph.addNode("F");

    let G = graph.addNode("G");
    let H = graph.addNode("H");
    let I = graph.addNode("I");

    let J = graph.addNode("J");
    let K = graph.addNode("K");

    let a = []

    for (let index = 0; index < 20; index++) {
        a.push(Math.floor(Math.random()*8)+2)
    }

    graph.addEdge(A,B, a[0]);
    graph.addEdge(B,A, a[0]);

    graph.addEdge(A,E, a[1]);
    graph.addEdge(E,A, a[1]);

    graph.addEdge(A,H, a[2]);
    graph.addEdge(H,A, a[2]);

    graph.addEdge(C,B, a[3]);
    graph.addEdge(B,C, a[3]);

    graph.addEdge(E,C, a[4]);
    graph.addEdge(C,E, a[4]);

    graph.addEdge(F,E, a[5]);
    graph.addEdge(E,F, a[5]);

    graph.addEdge(I,E, a[14]);
    graph.addEdge(E,I, a[14]);

    graph.addEdge(F,G, a[6]);
    graph.addEdge(G,F, a[6]);

    graph.addEdge(C,D, a[7]);
    graph.addEdge(D,C, a[7]);

    graph.addEdge(D,F, a[8]);
    graph.addEdge(F,D, a[8]);

    graph.addEdge(F,J, a[9]);
    graph.addEdge(J,F, a[9]);

    graph.addEdge(D,K, a[15]);
    graph.addEdge(K,D, a[15]);

    graph.addEdge(G,K, a[16]);
    graph.addEdge(K,G, a[16]);

    graph.addEdge(H,I, a[10]);
    graph.addEdge(I,H, a[10]);

    graph.addEdge(J,K, a[17]);
    graph.addEdge(K,J, a[17]);

    graph.addEdge(J,I, a[13]);
    graph.addEdge(I,J, a[13]);

    graph.print();

    c = [
        [69,392],

        [300,85],
        [600,85],
        [900,85],

        [300,392],
        [600,392],
        [900,392],

        [300,683],
        [600,683],
        [900,683],

        [1200,392]
    ]

} else if (doc === "Moyen") {
    let A = graph.addNode("A");
    let B = graph.addNode("B");
    let C = graph.addNode("C");
    let D = graph.addNode("D");
    let E = graph.addNode("E");
    let F = graph.addNode("F");
    let G = graph.addNode("G");
    let H = graph.addNode("H");
    let I = graph.addNode("I");
    let J = graph.addNode("J");
    let K = graph.addNode("K");
    let L = graph.addNode("L");
    let M = graph.addNode("M");
    let N = graph.addNode("N");
    let O = graph.addNode("O");
    let P = graph.addNode("P");
    let Q = graph.addNode("Q");
    let R = graph.addNode("R");
    let S = graph.addNode("S");

    let a = []

    for (let index = 0; index < 45; index++) {
        a.push(Math.floor(Math.random()*15)+5)
    }

    graph.addEdge(A,B, a[0]);
    graph.addEdge(A,D, a[1]);
    graph.addEdge(A,E, a[2]);
    graph.addEdge(A,F, a[3]);
    graph.addEdge(A,H, a[4]);

    graph.addEdge(B,C, a[5]);
    graph.addEdge(B,A, a[0]);

    graph.addEdge(C,D, a[6]);
    graph.addEdge(C,I, a[7]);
    graph.addEdge(C,B, a[5]);
    graph.addEdge(C,J, a[36]);

    graph.addEdge(E,F, a[8]);
    graph.addEdge(E,G, a[9]);
    graph.addEdge(E,A, a[2]);
    graph.addEdge(E,H, a[40]);

    graph.addEdge(F,M, a[10]);
    graph.addEdge(F,A, a[3]);
    graph.addEdge(F,E, a[8]);

    graph.addEdge(D,I, a[12]);
    graph.addEdge(D,A, a[1]);
    graph.addEdge(D,C, a[6]);
    graph.addEdge(D,H, a[41]);

    graph.addEdge(I,H, a[14]);
    graph.addEdge(I,S, a[15]);
    graph.addEdge(I,J, a[16]);
    graph.addEdge(I,C, a[7]);
    graph.addEdge(I,D, a[12]);

    graph.addEdge(G,H, a[17]);
    graph.addEdge(G,M, a[18]);
    graph.addEdge(G,E, a[9]);
    graph.addEdge(G,L, a[38]);

    graph.addEdge(H,S, a[19]);
    graph.addEdge(H,L, a[20]);
    graph.addEdge(H,A, a[4]);
    graph.addEdge(H,I, a[14]);
    graph.addEdge(H,G, a[17]);
    graph.addEdge(H,E, a[40]);
    graph.addEdge(H,D, a[41]);

    graph.addEdge(M,N, a[21]);
    graph.addEdge(M,F, a[10]);
    graph.addEdge(M,G, a[18]);
    graph.addEdge(M,L, a[39]);

    graph.addEdge(N,M, a[21]);
    graph.addEdge(N,L, a[24]);
    graph.addEdge(N,O, a[35]);
    graph.addEdge(N,P, a[37]);

    graph.addEdge(L,M, a[39]);
    graph.addEdge(L,S, a[22]);
    graph.addEdge(L,O, a[23]);
    graph.addEdge(L,N, a[24]);
    graph.addEdge(L,H, a[20]);
    graph.addEdge(L,G, a[38]);

    graph.addEdge(S,Q, a[25]);
    graph.addEdge(S,O, a[26]);
    graph.addEdge(S,I, a[15]);
    graph.addEdge(S,H, a[19]);
    graph.addEdge(S,L, a[22]);

    graph.addEdge(J,R, a[27]);
    graph.addEdge(J,Q, a[28]);
    graph.addEdge(J,I, a[16]);
    graph.addEdge(J,C, a[36]);

    graph.addEdge(Q,R, a[29]);
    graph.addEdge(Q,K, a[30]);
    graph.addEdge(Q,O, a[31]);
    graph.addEdge(Q,S, a[25]);
    graph.addEdge(Q,J, a[28]);

    graph.addEdge(R,K, a[32]);
    graph.addEdge(R,J, a[27]);
    graph.addEdge(R,Q, a[29]);

    graph.addEdge(K,R, a[32]);
    graph.addEdge(K,O, a[33]);
    graph.addEdge(K,Q, a[30]);

    graph.addEdge(O,K, a[33]);
    graph.addEdge(O,S, a[26]);
    graph.addEdge(O,P, a[34]);
    graph.addEdge(O,N, a[35]);
    graph.addEdge(O,L, a[23]);
    graph.addEdge(O,Q, a[31]);

    graph.addEdge(P,K, a[44]);
    graph.addEdge(K,P, a[44]);
    graph.addEdge(P,O, a[34]);
    graph.addEdge(P,N, a[37]);

    graph.print();

    c = [
        [69,392],
        [163,202],
        [369,110],
        [349,273],
        [254,512],
        [173,691],
        [410,627],
        [468,442],
        [550,192],
        [688,68],
        [1122,386],
        [710,556],
        [591,715],
        [885,683],
        [928,420],
        [1067,625],
        [896,170],
        [1082,90],
        [768,304]
    ]
} else {
    let A = graph.addNode("A");
    let B = graph.addNode("B");
    let C = graph.addNode("C");
    let D = graph.addNode("D");
    let E = graph.addNode("E");
    let F = graph.addNode("F");
    let G = graph.addNode("G");
    let H = graph.addNode("H");
    let I = graph.addNode("I");
    let J = graph.addNode("J");
    let K = graph.addNode("K");
    let L = graph.addNode("L");
    let M = graph.addNode("M");
    let N = graph.addNode("N");
    let O = graph.addNode("O");
    let P = graph.addNode("P");
    let Q = graph.addNode("Q");
    let R = graph.addNode("R");
    let S = graph.addNode("S");
    let T = graph.addNode("T");
    let U = graph.addNode("U");
    let V = graph.addNode("V");
    let W = graph.addNode("W");
    let X = graph.addNode("X");
    let Y = graph.addNode("Y");
    let Z = graph.addNode("Z");

    let AA = graph.addNode("AA");
    let AB = graph.addNode("AB");
    let AC = graph.addNode("AC");
    let AD = graph.addNode("AD");
    let AE = graph.addNode("AE");
    let AF = graph.addNode("AF");
    let AG = graph.addNode("AG");
    let AH = graph.addNode("AH");
    let AI = graph.addNode("AI");

    let a = []

    for (let index = 0; index < 100; index++) {
        a.push(Math.floor(Math.random()*80)+20)
    }
    graph.addEdge(L,B, a[0]);
    graph.addEdge(B,L, a[0]);
    graph.addEdge(B,C, a[1]);
    graph.addEdge(C,B, a[1]);

    graph.addEdge(U,Z, a[68]);
    graph.addEdge(Z,U, a[68]);
    graph.addEdge(AA,AB, a[70]);
    graph.addEdge(AB,AA, a[70]);


    graph.addEdge(C,D, a[2]);
    graph.addEdge(D,C, a[2]);
    graph.addEdge(D,E, a[3]);
    graph.addEdge(E,D, a[3]);

    graph.addEdge(E,F, a[4]);
    graph.addEdge(F,E, a[4]);
    graph.addEdge(A,L, a[5]);
    graph.addEdge(L,A, a[5]);


    graph.addEdge(B,G, a[6]);
    graph.addEdge(G,B, a[6]);
    graph.addEdge(L,G, a[7]);
    graph.addEdge(G,L, a[7]);

    graph.addEdge(B,H, a[8]);
    graph.addEdge(H,B, a[8]);
    graph.addEdge(G,H, a[9]);
    graph.addEdge(H,G, a[9]);

    graph.addEdge(H,C, a[10]);
    graph.addEdge(C,H, a[10]);
    graph.addEdge(A,G, a[11]);
    graph.addEdge(G,A, a[11]);


    graph.addEdge(G,M, a[12]);
    graph.addEdge(M,G, a[12]);
    graph.addEdge(A,S, a[13]);
    graph.addEdge(S,A, a[13]);

    graph.addEdge(A,AC, a[14]);
    graph.addEdge(AC,A, a[14]);
    graph.addEdge(AC,S, a[15]);
    graph.addEdge(S,AC, a[15]);

    graph.addEdge(M,S, a[16]);
    graph.addEdge(S,M, a[16]);
    graph.addEdge(M,N, a[17]);
    graph.addEdge(N,M, a[17]);


    graph.addEdge(N,O, a[18]);
    graph.addEdge(O,N, a[18]);
    graph.addEdge(H,O, a[19]);
    graph.addEdge(O,H, a[19]);

    graph.addEdge(M,T, a[20]);
    graph.addEdge(T,M, a[20]);
    graph.addEdge(O,T, a[21]);
    graph.addEdge(T,O, a[21]);

    graph.addEdge(S,T, a[22]);
    graph.addEdge(T,S, a[22]);
    graph.addEdge(S,AD, a[23]);
    graph.addEdge(AD,S, a[23]);


    graph.addEdge(AC,AD, a[24]);
    graph.addEdge(AD,AC, a[24]);
    graph.addEdge(AC,S, a[25]);
    graph.addEdge(S,AC, a[25]);

    graph.addEdge(T,AD, a[26]);
    graph.addEdge(AD,T, a[26]);
    graph.addEdge(O,U, a[27]);
    graph.addEdge(U,O, a[27]);

    graph.addEdge(T,U, a[28]);
    graph.addEdge(U,T, a[28]);
    graph.addEdge(AD,AE, a[29]);
    graph.addEdge(AE,AD, a[29]);


    graph.addEdge(AE,AF, a[30]);
    graph.addEdge(AF,AE, a[30]);
    graph.addEdge(AF,AG, a[31]);
    graph.addEdge(AG,AF, a[31]);

    graph.addEdge(AG,AH, a[32]);
    graph.addEdge(AH,AG, a[32]);
    graph.addEdge(AH,AI, a[33]);
    graph.addEdge(AI,AH, a[33]);

    graph.addEdge(AH,AB, a[34]);
    graph.addEdge(AB,AH, a[34]);
    graph.addEdge(AI,K, a[35]);
    graph.addEdge(K,AI, a[35]);


    graph.addEdge(R,K, a[36]);
    graph.addEdge(K,R, a[36]);
    graph.addEdge(AB,K, a[37]);
    graph.addEdge(K,AB, a[37]);

    graph.addEdge(F,R, a[38]);
    graph.addEdge(R,F, a[38]);
    graph.addEdge(F,X, a[39]);
    graph.addEdge(X,F, a[39]);

    graph.addEdge(E,X, a[40]);
    graph.addEdge(X,E, a[40]);
    graph.addEdge(D,J, a[41]);
    graph.addEdge(J,D, a[41]);


    graph.addEdge(J,X, a[42]);
    graph.addEdge(X,J, a[42]);
    graph.addEdge(C,I, a[43]);
    graph.addEdge(I,C, a[43]);

    graph.addEdge(I,P, a[44]);
    graph.addEdge(P,I, a[44]);
    graph.addEdge(I,J, a[45]);
    graph.addEdge(J,I, a[45]);

    graph.addEdge(J,P, a[46]);
    graph.addEdge(P,J, a[46]);
    graph.addEdge(J,Q, a[47]);
    graph.addEdge(Q,J, a[47]);


    graph.addEdge(Q,X, a[48]);
    graph.addEdge(X,Q, a[48]);
    graph.addEdge(P,Q, a[49]);
    graph.addEdge(Q,P, a[49]);

    graph.addEdge(P,V, a[50]);
    graph.addEdge(V,P, a[50]);
    graph.addEdge(V,Q, a[51]);
    graph.addEdge(Q,V, a[51]);

    graph.addEdge(Q,W, a[52]);
    graph.addEdge(W,Q, a[52]);
    graph.addEdge(V,W, a[53]);
    graph.addEdge(W,V, a[53]);


    graph.addEdge(W,R, a[54]);
    graph.addEdge(R,W, a[54]);
    graph.addEdge(X,R, a[55]);
    graph.addEdge(R,X, a[55]);

    graph.addEdge(W,AB, a[56]);
    graph.addEdge(AB,W, a[56]);
    graph.addEdge(V,AA, a[57]);
    graph.addEdge(AA,V, a[57]);

    graph.addEdge(AA,AH, a[58]);
    graph.addEdge(AH,AA, a[58]);
    graph.addEdge(AF,AA, a[68]);
    graph.addEdge(AA,AF, a[68]);


    graph.addEdge(Z,AA, a[59]);
    graph.addEdge(AA,Z, a[59]);
    graph.addEdge(Z,V, a[60]);
    graph.addEdge(V,Z, a[60]);

    graph.addEdge(O,I, a[61]);
    graph.addEdge(I,O, a[61]);
    graph.addEdge(T,Y, a[62]);
    graph.addEdge(Y,T, a[62]);

    graph.addEdge(Y,Z, a[63]);
    graph.addEdge(Z,Y, a[63]);
    graph.addEdge(Y,AF, a[64]);
    graph.addEdge(AF,Y, a[64]);


    graph.addEdge(AF,Z, a[65]);
    graph.addEdge(Z,AF, a[65]);
    graph.addEdge(U,V, a[66]);
    graph.addEdge(V,U, a[66]);

    graph.addEdge(O,V, a[67]);
    graph.addEdge(V,O, a[67]);

    graph.print();

    c = [
        [63, 387],
        [303, 64],
        [460, 110],

        [613, 47],
        [858, 64],
        [1087, 97],

        [173, 230],
        [334, 213],
        [584, 190],

        [738, 162],
        [1159, 384],
        [90, 95],

        [205, 416],
        [334, 376],
        [474, 322],

        [667, 306],
        [849, 286],
        [1101, 276],

        [171, 559],
        [334, 565],
        [575, 439],

        [772, 412],
        [961, 400],
        [983, 195],

        [498, 575],
        [678, 533],
        [871, 559],

        [1036, 539],
        [63, 650],
        [251, 705],

        [411, 705],
        [629, 676],
        [787, 717],

        [977, 676],
        [1159, 621]
    ]
}

for (let i = 0; i < c.length; i++) {
    c[i][0] = ((c[i][0]/1280) * (window.screen.width)) /1.5;
    c[i][1] = ((c[i][1]/800) * (window.screen.height)) /1.5;
}

let drawGraph = new DrawGraph("myCanvas");

let playerPath = [];
let intervalId = null;


drawGraph.setCanvasSize(window.screen.width /1.5,window.screen.height /1.5);   // Set the size of the canvas
drawGraph.loadCanvasBackground("/assets/pictures/plusCourtChemin/fondPCC.jpg");
drawGraph.loadGraph(graph, c);

function random(){
    return Math.floor(Math.random()*(15 - 2 + 1))+2;
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

async function validationFinale(playerPath, source, target,date) {
    var res = valider(playerPath, source, target);
    var timepassed = calcTemp(getActualSec(date));
    if (res === 1) {
        document.getElementById("isWin").value = "Perdu";
        document.getElementById("buttonValidate").disabled =true;
    } else {
        document.getElementById("isWin").value = timepassed;
        document.getElementById("buttonValidate").disabled =false;
    }
}

function dijkstraPath(source, target){
    let reversePath = dijkstra(graph, source, target);
    //console.log(dijkstra(graph, source, target))
    if (reversePath === -1) return -1;

    let path = [];
    let index = target;

    while (index !== undefined) {
        path.push(index);
        index = reversePath[index];
    }

    path = path.reverse();
    console.log(path);
    return path;
}

function drawSolution(pathDijkstra){
    console.log(pathDijkstra[0]);
    console.log(pathDijkstra[pathDijkstra.length-1]);
    drawGraph.setNodeColor(pathDijkstra[0],0,255,0);
    drawGraph.setNodeColor(pathDijkstra[pathDijkstra.length-1],0,255,0);

    let path = pathDijkstra;

    let i = 0;
    intervalId = setInterval(() => {
        i++;

        drawGraph.setEdgeColor(path[i - 1], path[i], 0, 255, 0);

        if (i === path.length - 1) {
            drawGraph.draw();
            clearInterval(intervalId);
        } else {
            drawGraph.setNodeColor(path[i], 0, 255, 0);
            drawGraph.draw();
        }
    }, 1000);
}

function drawSaveGameInProgress(G, source, target){
    drawGraph.setNodeColor(source,255,0,0);
    drawGraph.setNodeColor(target,0,255,0);

    drawGraph.initEvent((n) => {
        if (source !== target){
            if (n !== -1){
                if (G.isEdge(source,n)){
                    drawGraph.setNodeColor(n,255,0,0);
                    drawGraph.setEdgeColor(source,n,255,0,0);
                    source = n;
                }
            }
            drawGraph.draw();
        }
    });
    drawGraph.draw();
}

function recommencer(playerPath){
    playerPath = [];
    playerPath.push(drawGraph.nodes[A]);

    console.log(playerPath);

    console.log(source)
    this.astronot.style.position = "absolute";
    this.astronot.style.zIndex = 1;
    this.astronot.style.top = Math.floor(drawGraph.nodes[source].y).toString()+"px";
    this.astronot.style.left = Math.floor(drawGraph.nodes[source].x).toString()+"px";
}

function saveGameInProgress(G, source, target, playerPath){
    let first = source;
    drawGraph.initEvent((n) => {
        if (playerPath.length === 0) playerPath.push(source);
        if (first !== target){
            if (n !== -1){

                this.astronot.style.position = "absolute";
                this.astronot.style.zIndex = 1;
                this.astronot.style.top = Math.floor(drawGraph.nodes[n].y+100).toString()+"px";
                this.astronot.style.left = Math.floor(drawGraph.nodes[n].x).toString()+"px";
                console.log("coordonée");
                console.log();
                console.log(Math.floor(drawGraph.nodes[n].x).toString());

                if (G.isEdge(first,n)){
                   //console.log(playerPath);
                   playerPath.push(n);
                   //console.log(playerPath);
                   first = n;
                }
            }
        }
    });
}

function compareToDijkstra(pathPlayer, pathDijkstra) {
    let isPlayerPathGood = true;
    if (pathPlayer.length !== pathDijkstra.length) isPlayerPathGood = false;

    let i = 0;
    while (i < pathDijkstra.length && isPlayerPathGood) {
        if (pathPlayer[i] !== pathDijkstra[i]) {
            isPlayerPathGood = false;
        }
        i++;
    }
    console.log(pathPlayer);
    var change;
    if (isPlayerPathGood) {
        window.alert("Tu as gagné!");
        return 0;
    } else {
        window.alert("Tu as perdu");
        drawSolution(pathDijkstra);
        return 1;
        // Ce que tu devrais faire : drawSolution(pathDijkstra)
    }
}


function valider(pathPlayer, source, target){
    console.log("Test sur target : "+target);
    let pathDijkstra = dijkstraPath(source, target);

    if (pathPlayer.length !== 0) {
        //console.log(pathPlayer.pop());
        //console.log("console log de target valider : "+target);
        if (pathPlayer.pop() === target) {
            pathPlayer.push(target);
            return compareToDijkstra(pathPlayer, pathDijkstra, source, target);
        }
    } else window.alert("Tu n'as pas donné de solution,\n" +
        "si tu veux la solution ferme moi et click sur le boutton solution");
}