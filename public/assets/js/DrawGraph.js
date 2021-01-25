class DrawGraph {
    canvas = null;
    canvasCtx = null;

    canvasWidth = 0;
    canvasHeight = 0;

    canvasBg = false;
    canvasBgloaded = false;
    canvasBackground = null;

    nodes = [];
    nodesRadius = [];
    nodesColors = [];

    edges = [];

    DEFAULT_NODES_RADIUS = 20;
    DEFAULT_EDGES_WIDTH = 2;
    DEFAULT_FILL_COLOR = {r: 255, g: 255, b: 255};


    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);

        if (this.canvas.getContext) {
            this.canvasCtx = this.canvas.getContext('2d', {alpha: false});
            this.canvasCtx.globalCompositeOperation = "destination-over";
        } else
            throw new Error("Canvas are not supported by your browser. Nothing can be done.");
    }

    /**
     * __Private function, don't call it.__
     *
     * @param {Number} x
     * @param {Number} y
     */
    hitRegion(x, y) {
        let tempRadius = this.DEFAULT_NODES_RADIUS;
        let tempX = -1;
        let tempY = -1;

        for (let n = 0; n < this.nodes.length; ++n) {
            tempRadius = this.nodesRadius[n];
            tempX = this.nodes[n].x;
            tempY = this.nodes[n].y;

            if (x <= tempX + tempRadius && x >= tempX - tempRadius) {
                if (y <= tempY + tempRadius && y >= tempY - tempRadius) {
                    return n;
                }
            }
        }

        return -1;
    }

    /**
     * Function used to setup the event handler.
     * It call @p f with in parameter, the node clicked or -1 if there is no node on the click.
     *
     * Put @p debug to false to hide console output.
     *
     * @param {function} f
     * @param {boolean} debug
     */
    initEvent(f = null, debug = true) {
        this.canvas.addEventListener("click", (e) => {
            let x = e.pageX - this.canvas.offsetLeft;
            let y = e.pageY - this.canvas.offsetTop;
            let hitPoint = this.hitRegion(x, y);

            if (hitPoint != -1) {
                if (f != null)
                    f(hitPoint);
                if (debug)
                    console.log("Hit on node " + this.nodes[hitPoint].name + " at (" + x + "," + y + ").");

            } else {
                if (f != null)
                    f(hitPoint);
                if (debug)
                    console.log("Hit at (" + x + ", " + y + ").");
            }
        });
    }

    /**
     * Define the size of the canvas.
     *
     * @param {Number} width
     * @param {Number} height
     */
    setCanvasSize(width, height) {
        if (width < 1 || height < 1)
            throw new Error("The size of the canvas must be at least 1x1.");

        this.canvasWidth = width;
        this.canvasHeight = height;

        this.canvas.setAttribute("width", width);
        this.canvas.setAttribute("height", height);
    }

    /**
     * Add a background image to the canvas.
     *
     * @param {String} imageURI
     */
    loadCanvasBackground(imageURI) {
        if (imageURI == "")
            throw new Error("You must provide a valid URI for the image.");

        this.canvasBackground = true;

        let bg = new Image();
        bg.src = imageURI;
        this.canvasBackground = bg;
    }

    /**
     * __Private function, don't call it.__
     *
     * Add a node to the internal list of nodes.
     *
     * @param {Number} x x position of the node on the canvas.
     * @param {Number} y y position of the node on the canvas.
     * @param {String} name
     *
     * @returns -1 if the node is already in the nodes list else return the index of the added node.
     */
    addNode(x, y, name) {
        let n = 0;

        while (n != this.nodes.length) {
            if (this.nodes[n].name == name)
                return -1;

            ++n;
        }

        this.nodes.push({
            x: x,
            y: y,
            name: name
        });
        this.nodesRadius.push(this.DEFAULT_NODES_RADIUS);
        this.nodesColors.push({r: this.DEFAULT_FILL_COLOR.r, g: this.DEFAULT_FILL_COLOR.g, b: this.DEFAULT_FILL_COLOR.b});

        return this.nodes.length - 1;
    }

    /**
     * Tool method to convert degree in radian.
     *
     * @param {Number} degree An angle in degree.
     */
    toRadian(degree) {
        return degree * (Math.PI / 180);
    }

    /**
     * __Private function, don't call it.__
     *
     * Draw a node on the canvas.
     *
     * @param {Number} n Index of the node to draw.
     */
    drawNode(n) {
        if (n < 0 || n > this.nodes.length)
            throw new Error("Node must be valid in the graph.");

        let x = this.nodes[n].x;
        let y = this.nodes[n].y;

        let radius = this.nodesRadius[n];
        let color = this.nodesColors[n];

        let startAngle = 0;
        let endAngle = this.toRadian(360);

        this.canvasCtx.beginPath();

        this.canvasCtx.arc(x, y, radius, startAngle, endAngle, true);

        this.canvasCtx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
        this.canvasCtx.fill();

        this.canvasCtx.closePath();
    }

    /**
     * __Private function, don't call it.__
     *
     * Function to draw an edge of the graph.
     *
     * @param {Number} u
     * @param {Number} v
     */
    drawEdge(u, v) {
        if ((u < 0 || u > this.nodes.length) || (v < 0 || v > this.nodes.length))
            throw new Error("Nodes must be valid in the graph.");

        let width = this.edges[u][v].width;
        let color = this.edges[u][v].color;

        let x1 = this.nodes[u].x;
        let y1 = this.nodes[u].y;

        let x2 = this.nodes[v].x;
        let y2 = this.nodes[v].y;

        this.canvasCtx.beginPath();

        this.canvasCtx.moveTo(x1, y1);
        this.canvasCtx.lineTo(x2, y2);

        this.canvasCtx.lineWidth = width;
        this.canvasCtx.strokeStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
        this.canvasCtx.stroke();

        this.canvasCtx.closePath();
    }


    /**
     * Define a new @p radius for the given @p n nodes.
     *
     * @param {Number} n Index of the node.
     * @param {Number} radius Value of the new radius.
     */
    setNodeRadius(n, radius) {
        if (n < 0 || n > this.nodes.length)
            throw new Error("Node must be valid in the graph.");
        if (radius < 1)
            throw new Error("Radius must be superior to 1.");

        this.nodesRadius[n] = radius;
    }

    /**
     * Define a new color for the given @p node. Must be a rgb valid color.
     *
     * @param {Number} n Index of the node.
     * @param {Number} r Red decimal value.
     * @param {Number} g Green decimal value.
     * @param {Number} b Blue decimal value.
     */
    setNodeColor(n, r, g, b) {
        //console.log(n);
        if (n < 0 || n > this.nodes.length)
            throw new Error("Node must be valid in the graph.");
        if ((r < 0 || r > 255) || (g < 0 || g > 255) || (b < 0 || b > 255))
            throw new Error("The color is not valid. Value must be between 0 and 255.");

        this.nodesColors[n].r = r;
        this.nodesColors[n].g = g;
        this.nodesColors[n].b = b;
    }

    /**
     * Define a new width for a given edge.
     *
     * @param {Number} u
     * @param {Number} v
     * @param {Number} width
     */
    setEdgeWidth(u, v, width) {
        if ((u < 0 || u > this.nodes.length) || (v < 0 || v > this.nodes.length))
            throw new Error("Nodes must be valid in the graph.");
        if (width < 1)
            throw new Error("Width must be superior to 1.");

        if (this.edges[u][v] != null)
            this.edges[u][v].width = width;
        if (this.edges[v][u] != null)
            this.edges[v][u].width = width;
        if (this.edges[u][v] == null && this.edges[v][u] == null)
            console.warn("setEdgeWidth(): The edge (" + u + ", " + v + ") is not in the graph.");
    }

    /**
     * Define a new color for a given edge.
     *
     * @param {Number} u
     * @param {Number} v
     * @param {Number} r
     * @param {Number} g
     * @param {Number} b
     */
    setEdgeColor(u, v, r, g, b) {
        if ((u < 0 || u > this.nodes.length) || (v < 0 || v > this.nodes.length))
            throw new Error("Nodes must be valid in the graph.");
        if ((r < 0 || r > 255) || (g < 0 || g > 255) || (b < 0 || b > 255))
            throw new Error("The color is not valid. Value must be between 0 and 255.");

        if (this.edges[u][v] != null) {
            this.edges[u][v].color.r = r;
            this.edges[u][v].color.g = g;
            this.edges[u][v].color.b = b;
        }

        if (this.edges[v][u] != null) {
            this.edges[v][u].color.r = r;
            this.edges[v][u].color.g = g;
            this.edges[v][u].color.b = b;
        }

        if (this.edges[u][v] == null && this.edges[v][u] == null)
            console.warn("setEdgeColor(): The edge (" + u + ", " + v + ") is not in the graph.");
    }

    /**
     * Load the graph data.
     *
     * @param {Graph} G A graph from Graph.
     * @param {Number[][]} coordinates
     */
    loadGraph(G, coordinates) {
        if (G.getOrder() != coordinates.length)
            throw new Error("The graph G and the coordinates array must have the same number of nodes.");

        let n = 0;

        while (n < coordinates.length) {
            if (this.addNode(coordinates[n][0], coordinates[n][1], G.getNodeName(n)) == -1)
                throw new Error("Each node must have a unique identifier.");

            ++n;
        }

        for (let u = 0; u < G.getOrder(); ++u) {
            this.edges.push([]);
            for (let v = 0; v < G.getOrder(); ++v) {
                if (G.isEdge(u, v) != -1) {
                    this.edges[u].push({
                        width: this.DEFAULT_EDGES_WIDTH,
                        color: {
                            r: this.DEFAULT_FILL_COLOR.r,
                            g: this.DEFAULT_FILL_COLOR.g,
                            b: this.DEFAULT_FILL_COLOR.b
                        }
                    });
                } else {
                    this.edges[u].push(null);
                }
            }
        }
    }

    /**
     * Main method for drawing. Use it when you want to draw the canvas.
     *
     * @param {boolean} showNodes
     * @param {boolean} showEdges
     * @param {boolean} showBackground
     */
    draw(showNodes = true, showEdges = true, showBackground = true) {
        let drawNodes = () => {
            for (let n = 0; n < this.nodes.length; ++n) {
                this.drawNode(n);
            }
        };

        let drawEdges = () => {
            for (let u = 0; u < this.nodes.length; ++u) {
                for (let v = 0; v < this.nodes.length; ++v) {
                    if (this.edges[u][v] != null)
                        this.drawEdge(u, v);
                }
            }
        };

        if (showBackground && this.canvasBackground && !this.canvasBgloaded) {
            this.canvasCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.canvasBackground.onload = () => {
                this.canvasCtx.drawImage(this.canvasBackground, 0, 0);

                if (showEdges)
                    drawEdges();
                if (showNodes)
                    drawNodes();
            };
            this.canvasBgloaded = true;
        } else {
            this.canvasCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

            if (showBackground && this.canvasBackground)
                this.canvasCtx.drawImage(this.canvasBackground, 0, 0);

            if (showEdges)
                drawEdges();
            if (showNodes)
                drawNodes();
        }
    }
}