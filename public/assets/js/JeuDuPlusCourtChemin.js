function placePseudo() {
    var Pseudo = document.getElementById("idPseudo");

    var PseudoText = Pseudo.value;
    //on a en haut notre pseudo
    //on veut l'ajouter maintnant à la balise PlacePseudo
    var placeDuPseudo = document.getElementById("PlacePSeudo");
    placeDuPseudo.innerHTML = "";
    placeDuPseudo.innerHTML = "Votre pseudo est :" + PseudoText;
}

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

graph.addEdge(A,B,5);
graph.addEdge(A,D,2);
graph.addEdge(A,E,3);
graph.addEdge(A,F,20);
graph.addEdge(A,H,1);

graph.addEdge(B,A,5);
graph.addEdge(B,C,6);
graph.addEdge(B,E,10);
graph.addEdge(B,G,15);

graph.addEdge(C,B,6);
graph.addEdge(C,E,9);
graph.addEdge(C,F,11);
graph.addEdge(C,G,3);

graph.addEdge(D,A,2);
graph.addEdge(D,I,12);

graph.addEdge(E,A,3);
graph.addEdge(E,B,10);
graph.addEdge(E,C,9);
graph.addEdge(E,F,2);
graph.addEdge(E,H,4);
graph.addEdge(E,I,3);
graph.addEdge(E,J,7);

graph.addEdge(F,A,20);
graph.addEdge(F,C,11);
graph.addEdge(F,E,2);
graph.addEdge(F,I,1);
graph.addEdge(F,J,7);

graph.addEdge(G,B,15);
graph.addEdge(G,C,3);
graph.addEdge(G,I,12);
graph.addEdge(G,J,4);

graph.addEdge(H,A,1);
graph.addEdge(H,E,4);
graph.addEdge(H,I,8);

graph.addEdge(I,D,12);
graph.addEdge(I,E,3);
graph.addEdge(I,F,1);
graph.addEdge(I,G,12);
graph.addEdge(I,H,8);

graph.addEdge(J,E,7);
graph.addEdge(J,F,7);
graph.addEdge(J,G,4);

graph.print();

let c = [[160,50], [443,50], [642,50], [26,250], [215,250], [531,250], [815,250], [160,450], [443,450], [642,450]];

let drawGraph = new DrawGraph("myCanvas");

let playerPath = [];
let intervalId = null;

drawGraph.setCanvasSize(1000, 500);   // Set the size of the canvas
drawGraph.loadGraph(graph, c);


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

async function validationFinale(playerPath, source, target) {
    var res = valider(playerPath, source, target)
    var timepassed = calcTemp(getActualSec(date))
    if (res === 1) {
        document.getElementById("isWin").value = "Perdu "
    } else {
        document.getElementById("isWin").value = timepassed
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
        change = 0
    } else {
        change = 1
        window.alert("Tu as perdu");
        drawSolution(pathDijkstra);
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