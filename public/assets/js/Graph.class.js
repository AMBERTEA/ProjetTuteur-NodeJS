class Graph {
    constructor() {
        this.numEdges = 0;

        this.nodes = [];
        this.edges = [];
    }

    getOrder() {
        return this.nodes.length;
    }

    getSize() {
        return this.numEdges;
    }

    getNodeName(node) {
        if (node >= 0 && node < this.getOrder()) {
            return this.nodes[node];
        }

        return -1;
    }

    addNode(nodeName){
        if(this.nodes.includes(nodeName)) return -1;
        this.nodes.push(nodeName);

        for (let i = 0; i < this.edges.length; ++i) {
            this.edges[i].push(Infinity);
        }

        this.edges.push([]);
        for (let i = 0; i < this.edges.length; ++i) {
            if (i === this.edges.length - 1) {
                this.edges[this.edges.length - 1].push(0);
            } else {
                this.edges[this.edges.length - 1].push(Infinity);
            }
        }

        return this.nodes.length-1;
    }

    nodeExist(node){
        return (node >= 0 && node < this.nodes.length);
    }

    addEdge(from,to,weight){
        if(this.nodeExist(from) && this.nodeExist(to) && weight > 0){
            this.edges[from][to] = weight;
            this.numEdges++;
            return 0;
        }
        return -1;
    }

    isEdge(from,to){
        if (this.nodeExist(from) && this.nodeExist(to)){
            if (this.edges[from][to] !== 0 && this.edges[from][to] !== Infinity){
                return this.edges[from][to];
            }
        }

        return -1;
    }

    getWeight(from,to) {
        let weight = this.isEdge(from,to);

        return (weight != -1) ? weight : Infinity;
    }

    print() {
        for (let from = 0; from < this.nodes.length; ++from) {
            let temp = "";
            for (let to = 0; to < this.nodes.length; ++to) {
                temp += (this.edges[from][to] === Infinity) ? "∞" : this.edges[from][to];
                temp += "\t";
            }
            console.log(temp);
        }
    }
}