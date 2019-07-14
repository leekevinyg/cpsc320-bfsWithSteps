const G = {
    'A': {
        rating: "M",
        costToUpgrade: 0,
        edges: ['B', 'C', 'D'],
        visited: false,
        steps: 0,
    },
    'B': {
        rating: "M",
        costToUpgrade: 0,
        edges: ['A', 'C', 'D'],
        visited: false,
        steps: 0,
    },
    'C': {
        rating: "M",
        costToUpgrade: 0,
        edges: ['B', 'A', 'D'],
        visited: false,
        steps: 0,
    },
    'D': {
        rating: "M",
        costToUpgrade: 0,
        edges: ['A', 'B', 'C'],
        visited: false,
        steps: 0,
    }
}

const BFSWithSteps = (G) => {
    if (G.size === 0) return;

    let Q = [];
    let v = 'A';
    Q.push(G[v]);

    while (Q.length > 0) {
        let vertex = Q.shift();
        if (!vertex.visited) {
            vertex.visited = true;
            vertex.edges.forEach((neighbor) => {
                if (G[neighbor].rating === 'R') {
                    Q.push(G[neighbor]);
                } else {
                    G[neighbor].steps = G[neighbor].steps + 1;
                    Q.push(G[neighbor]);
                }
            });
        }
    }
}

BFSWithSteps(G);
console.log(G);
