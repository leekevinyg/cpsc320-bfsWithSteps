const G = {
    'A': {
        name: 'A',
        edges: ['B', 'D'],
        visited: false,
        stepsSoFar: 0,
    },
    'B': {
        name: 'B',
        edges: ['A', 'C'],
        visited: false,
        stepsSoFar: 0,
    },
    'C': {
        name: 'C',
        edges: ['B', 'E'],
        visited: false,
        stepsSoFar: 0,
    },
    'D': {
        name: 'D',
        edges: ['A', 'E'],
        visited: false,
        stepsSoFar: 0,
    },
    'E': {
        name: 'E',
        edges: ['D', 'C'],
        visited: false,
        stepsSoFar: 0,
    },
    edges: {
        'AB': 'X',
        'BA': 'R',
        'AD': 'M',
        'DA': 'M',
        'DE': 'M',
        'ED': 'M',
        'DC': 'R',
        'CD': 'R',
        'BC': 'R',
        'CB': 'R',
    }
}

const BFSWithSteps = (G) => {
    if (G.size === 0) return;

    let Q = [];
    let v = 'E';
    Q.push(G[v]);

    while (Q.length > 0) {
        let vertex = Q.shift();
        v = vertex.name;
        if (!vertex.visited) {
            console.log(`visiting vertex ${vertex.name}`);
            vertex.visited = true;
            vertex.steps = vertex.stepsSoFar;
            console.log(`vertex ${vertex.name} steps incremented to ${vertex.steps}`);
            console.log(`vertex is ${vertex.name} has neighbors ${vertex.edges}`);
            vertex.edges.forEach((neighbor) => {
                if (v === neighbor) return;
                let ratingOfEdge = G.edges[`${v}${neighbor}`];
                let edge = `${v}${neighbor}`;
                console.log(`edge ${edge} has rating ${ratingOfEdge}`);
                if (ratingOfEdge === 'R') {
                    Q.push(G[neighbor]);
                } else {
                    let newNumSteps = G[neighbor].stepsSoFar + 1
                    G[neighbor].stepsSoFar = newNumSteps;
                    Q.push(G[neighbor]);
                }
            });
        }
    }
}

BFSWithSteps(G);
console.log(G);
