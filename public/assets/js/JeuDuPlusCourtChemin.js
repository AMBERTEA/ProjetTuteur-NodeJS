
let graph = new Graph();

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
let L = graph.addNode("L")
let M = graph.addNode("M");
let N = graph.addNode("N");
let O = graph.addNode("O");
let P = graph.addNode("P");
let Q = graph.addNode("Q");
let R = graph.addNode("R");
let S = graph.addNode("S");


let a = []
for (let index = 0; index < 45; index++) {
    a.push(random())
    
}
graph.addEdge(A,B, a[0]);
graph.addEdge(A,D, a[1]);
graph.addEdge(A,E, a[2]);
graph.addEdge(A,F, a[3]);
graph.addEdge(A,H, a[4]);

graph.addEdge(B,C,a[5]);
graph.addEdge(B,A,a[0]);

graph.addEdge(C,D, a[6]);
graph.addEdge(C,I, a[7]);
graph.addEdge(C,B, a[5]);
graph.addEdge(C,J, a[36]);


graph.addEdge(E,H, a[8])
graph.addEdge(E,G, a[9])
graph.addEdge(E,A, a[2]);

graph.addEdge(F,M, a[10])
graph.addEdge(F,A, a[3]);

graph.addEdge(D,I, a[12])
graph.addEdge(D,A, a[1]);
graph.addEdge(D,C, a[6]);

graph.addEdge(I,H, a[14])
graph.addEdge(I,K, a[15])
graph.addEdge(I,J, a[16])
graph.addEdge(I,C, a[7]);
graph.addEdge(I,D, a[12])


graph.addEdge(G,H, a[17])
graph.addEdge(G,M, a[18])
graph.addEdge(G,E, a[9])

graph.addEdge(H,K, a[19])
graph.addEdge(H,L, a[20])
graph.addEdge(H,A, a[4]);
graph.addEdge(H,E, a[8])
graph.addEdge(H,I, a[14])
graph.addEdge(H,G, a[17])

graph.addEdge(M,N, a[21])
graph.addEdge(M,F, a[10])
graph.addEdge(M,G, a[18])

graph.addEdge(N,M, a[21])
graph.addEdge(N,L, a[24])
graph.addEdge(N,O, a[35])
graph.addEdge(N,P, a[37])


graph.addEdge(L,K, a[22])
graph.addEdge(L,O, a[23])
graph.addEdge(L,N, a[24])
graph.addEdge(L,H, a[20])

graph.addEdge(K,Q, a[25])
graph.addEdge(K,O, a[26])
graph.addEdge(K,I, a[15])
graph.addEdge(K,H, a[19])
graph.addEdge(K,L, a[22])

graph.addEdge(J,R, a[27])
graph.addEdge(J,Q, a[28])
graph.addEdge(J,I, a[16])
graph.addEdge(J,C, a[36]);

graph.addEdge(Q,R, a[29])
graph.addEdge(Q,S, a[30])
graph.addEdge(Q,O, a[31])
graph.addEdge(Q,K, a[25])
graph.addEdge(Q,J, a[28])

graph.addEdge(R,S, a[32])
graph.addEdge(R,J, a[27])
graph.addEdge(R,Q, a[29])

graph.addEdge(S,R, a[32])
graph.addEdge(S,O, a[33])
graph.addEdge(S,Q, a[30])

graph.addEdge(O,S, a[33])
graph.addEdge(O,K, a[26])
graph.addEdge(O,P, a[34])
graph.addEdge(O,N, a[35])
graph.addEdge(O,L, a[23])
graph.addEdge(O,Q, a[31])

graph.addEdge(P,S, a[36])
graph.addEdge(P,O, a[34])
graph.addEdge(P,N, a[37])


graph.print();


let c = [
    [69,362],
    [163,172],
    [369,80],
    [349,243],
    [254,444],
    [173,661],
    [410,597],
    [504,412],
    [550,162],
    [688,38],
    [768,274],
    [710,526],
    [591,685],
    [885,653],
    [928,390],
    [1067,585],
    [896,140],
    [1082,60],
    [1122,356]
]

for (let i = 0; i < c.length; i++) {
    c[i][0] = ((c[i][0]/1280) * (window.screen.width)) /1.5
    c[i][1] = ((c[i][1]/800) * (window.screen.height)) /1.5
}



let drawGraph = new DrawGraph("myCanvas");


let playerPath = [];
let intervalId = null;

drawGraph.setCanvasSize(window.screen.width /1.5,window.screen.height /1.5);   // Set the size of the canvas
drawGraph.loadCanvasBackground("/assets/pictures/game/fondPCC.jpg");
drawGraph.loadGraph(graph, c);


function random(){
    return Math.floor(Math.random()*(15 - 2 + 1))+1
}


function getActualSec(date){
    var hour = date.getHours()
    var min = date.getMinutes()
    var seconde = date.getSeconds()
    var tot = hour*3600 + min*60 + seconde
    return tot
}

function calcTemp(date){
    let date2 = new Date()
    var tot = (date2.getHours()*3600 + date2.getMinutes()*60 + date2.getSeconds()) - date
    return tot

}

async function validationFinale(playerPath, source, target,date) {
    var res = valider(playerPath, source, target)
    var timepassed = calcTemp(getActualSec(date))
    if (res === 1) {
        document.getElementById("isWin").value = "Perdu"
        document.getElementById("buttonValidate").disabled =true
    } else {
        document.getElementById("isWin").value = timepassed
        document.getElementById("buttonValidate").disabled =false


    }
}

function AllSolution(G) {
    let source = null;
    let target = null;
    let nbClick = 0;

    drawGraph.initEvent((n) => {
        if (n !== -1) {
            if (source === null) {
                if (intervalId != null) clearInterval(intervalId);

                for (let node = 0; node < drawGraph.nodes.length; node++) {
                    drawGraph.setNodeColor(node, 255, 255, 255);
                }
                for (let u = 0; u < drawGraph.edges.length; u++){
                    for (let v = 0; v < drawGraph.edges.length; v++){
                        drawGraph.setEdgeColor(u, v, 255, 255, 255);
                    }
                }
                source = n;
                drawGraph.setNodeColor(source, 255, 0, 0);
                nbClick += 1;
            } else {
                target = n;
                drawGraph.setNodeColor(target, 0, 255, 0);
                nbClick += 1;
            }

            if (source != null && target != null) {
                solution(G,source,target);
                if (nbClick > 1) {
                    source = null;
                    target = null;
                    nbClick = 0;
                }
            }
            drawGraph.draw();
        }
    }, true);
    drawGraph.draw();
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

function saveGameInProgress(G, source, target, playerPath){

    let first = source;
    drawGraph.initEvent((n) => {
        if (playerPath.length === 0) playerPath.push(source);
        if (first !== target){
            if (n !== -1){

                this.astronot.style.position = "absolute"
                this.astronot.style.zIndex = 1
                this.astronot.style.top = Math.floor(drawGraph.nodes[n].y).toString()+"px"
                this.astronot.style.left = Math.floor(drawGraph.nodes[n].x).toString()+"px"
                console.log("coordonée")
                console.log()
                console.log(Math.floor(drawGraph.nodes[n].x).toString())




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
        return 0
    } else {
        window.alert("Tu as perdu");
        drawSolution(pathDijkstra);
        return 1
        // Ce que tu devrais faire : drawSolution(pathDijkstra)
    }
}


function valider(pathPlayer, source, target){
    console.log("Test sur target : "+target)
    let pathDijkstra = dijkstraPath(source, target);

    if (pathPlayer.length !== 0) {
        //console.log(pathPlayer.pop())
        //console.log("console log de target valider : "+target)
        if (pathPlayer.pop() === target) {
            pathPlayer.push(target);
            return compareToDijkstra(pathPlayer, pathDijkstra, source, target);
        }
    } else window.alert("Tu n'as pas donné de solution,\n" +
        "si tu veux la solution ferme moi et click sur le boutton solution");
}