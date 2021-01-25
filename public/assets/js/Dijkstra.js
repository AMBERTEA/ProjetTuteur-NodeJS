function dijkstra(graph, source, target){
    let Q = [];
    let dist = [];
    let prev = [];
    let sizeOfQ = 0;
    let u = undefined;
    let alt = 0;

    for (let v = 0; v < graph.getOrder(); v++){
        dist.push(Infinity);
        prev.push(undefined);
        Q.push(true);

        sizeOfQ += 1;
    }

    dist[source] = 0;
    let minDist = () => {
        let min = Infinity;
        let node = undefined;
        for (let u = 0; u < Q.length; u++){
            if (Q[u] === true && min > dist[u]){
                min = dist[u];
                node = u;
            }
        }
        return node;
    };

    while (sizeOfQ !== 0){
        u = minDist();

        Q[u] = false;
        sizeOfQ -= 1;

        if (u === target){ return prev;}

        for (let v = 0; v < graph.getOrder(); v++){
            if (Q[v] === true && graph.isEdge(u,v) !== -1){
                alt = dist[u] + graph.getWeight(u,v);
                if (alt < dist[v]){
                    dist[v] = alt;
                    prev[v] = u;
                }
            }
        }
    }
    return -1;
}