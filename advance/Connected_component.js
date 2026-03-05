function connectedComponents(graph) {
  let visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;

    visited.add(node);

    for (let neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }

  return count;
}

let graph = {
  A: ["B"],
  B: ["A"],
  C: ["D"],
  D: ["C"],
  E: []
};

console.log(connectedComponents(graph));


///output
// 3

// component
// (A-B)
// (C-D)
// (E)


