const G = {
    'A': {
        name: 'A',
        edges: ['B', 'C'],
        visited: false,
        steps: 0,
    },
    'B': {
        name: 'B',
        edges: ['A', 'C'],
        visited: false,
        steps: 0,
    },
    'C': {
        name: 'C',
        edges: ['A', 'B'],
        visited: false,
        steps: 0,
    },
    edges: {
        'AB' : 'M',
        'BA' : 'M',
        'AC' : 'M',
        'CA' : 'M',
        'CB' : 'R',
        'BC' : 'R',  
    }
}

const BFSWithSteps = (G) => {
    if (G.size === 0) return;

    let Q = [];
    let v = 'A';
    Q.push(G[v]);

    while (Q.length > 0) {
        let vertex = Q.shift();
        v = vertex.name;
        if (!vertex.visited) {
            console.log(`visiting vertex ${vertex.name}`);
            vertex.visited = true;
            console.log(`vertex is ${vertex.name} has neighbors ${vertex.edges}`);
            vertex.edges.forEach((neighbor) => {
                if (v === neighbor) return;
                let ratingOfEdge = G.edges[`${v}${neighbor}`];
                let edge = `${v}${neighbor}`;
                console.log(`edge ${edge} has rating ${ratingOfEdge}`);
                if (ratingOfEdge === 'R') {
                    console.log(`NOT incrementing steps to get to ${G[neighbor].name}`);
                    Q.push(G[neighbor]);
                } else {
                    let newNumSteps = G[neighbor].steps + 1
                    console.log(`incrementing steps to get to ${G[neighbor].name} to ${newNumSteps}`);
                    G[neighbor].steps = newNumSteps;
                    Q.push(G[neighbor]);
                }
            });
        }
    }
}

BFSWithSteps(G);
console.log(G);
