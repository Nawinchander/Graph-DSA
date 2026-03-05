function dijkstra(graph, start) {
  let distances = {};
  let visited = new Set();

  for (let node in graph) {
    distances[node] = Infinity;
  }

  distances[start] = 0;

  while (true) {
    let closest = null;

    for (let node in distances) {
      if (!visited.has(node) && (closest === null || distances[node] < distances[closest])) {
        closest = node;
      }
    }

    if (closest === null) break;

    visited.add(closest);

    for (let neighbor in graph[closest]) {
      let newDistance = distances[closest] + graph[closest][neighbor];

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
      }
    }
  }

  return distances;
}

let graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 }
};

console.log(dijkstra(graph, "A"));

//output
// { A: 0, B: 4, C: 2, D: 5 }

