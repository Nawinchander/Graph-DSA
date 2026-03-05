function hasCycle(graph) {
  let visited = new Set();
  let stack = new Set();

  function dfs(node) {
    if (stack.has(node)) return true;
    if (visited.has(node)) return false;

    visited.add(node);
    stack.add(node);

    for (let neighbor of graph[node]) {
      if (dfs(neighbor)) return true;
    }

    stack.delete(node);
    return false;
  }

  for (let node in graph) {
    if (dfs(node)) return true;
  }

  return false;
}

let graph = {
  A: ["B"],
  B: ["C"],
  C: ["D"],
  D: ["B"] // cycle
};

console.log(hasCycle(graph));


/// output
/// true