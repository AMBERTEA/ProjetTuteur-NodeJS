function GraphADixNoeud(graph){
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
    graph.addEdge(D,E,7);
    graph.addEdge(D,H,4);
    graph.addEdge(D,I,12);

    graph.addEdge(E,A,3);
    graph.addEdge(E,B,10);
    graph.addEdge(E,C,9);
    graph.addEdge(E,D,7);
    graph.addEdge(E,F,2);
    graph.addEdge(E,H,4);
    graph.addEdge(E,I,3);
    graph.addEdge(E,J,7);

    graph.addEdge(F,C,11);
    graph.addEdge(F,E,2);
    graph.addEdge(F,G,5);
    graph.addEdge(F,I,1);
    graph.addEdge(F,J,7);

    graph.addEdge(G,B,15);
    graph.addEdge(G,C,3);
    graph.addEdge(G,F,5);
    graph.addEdge(G,I,12);
    graph.addEdge(G,J,4);

    graph.addEdge(H,A,1);
    graph.addEdge(H,D,4);
    graph.addEdge(H,E,4);
    graph.addEdge(H,I,8);

    graph.addEdge(I,D,12);
    graph.addEdge(I,E,3);
    graph.addEdge(I,F,1);
    graph.addEdge(I,G,12);
    graph.addEdge(I,H,8);
    graph.addEdge(I,J,1);

    graph.addEdge(J,E,7);
    graph.addEdge(J,F,7);
    graph.addEdge(J,G,4);
    graph.addEdge(J,I,1);

    return graph;
}