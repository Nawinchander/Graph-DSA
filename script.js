// Graph using adjacency list
let graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"]
};

console.log(graph);


// expected output
// {
//  A: [ 'B', 'C' ],
//  B: [ 'A', 'D' ],
//  C: [ 'A' ],
//  D: [ 'B' ]
// }


/// adding vertex and edges

let graph1 = {};

function addVertex(vertex) {
  graph[vertex] = [];
}

function addEdge(v1, v2) {
  graph[v1].push(v2);
  graph[v2].push(v1);
}

addVertex("A");
addVertex("B");
addVertex("C");

addEdge("A", "B");
addEdge("A", "C");

console.log(graph1);

/// expected output

// {
//   A: [ 'B', 'C' ],
//   B: [ 'A' ],
//   C: [ 'A' ]
// }


//BFS - breath first search

let graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: []
};

function bfs(start) {
  let queue = [start];
  let visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      queue.push(...graph[node]);
    }
  }
}

bfs("A");

//expected output

// A
// B
// C
// D
// E

// Traversal order
// A → B → C → D → E





