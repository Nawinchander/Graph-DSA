function alienOrder(words) {
    let graph = new Map();
    let indegree = new Map();

    // Initialize
    for (let word of words) {
        for (let char of word) {
            graph.set(char, new Set());
            indegree.set(char, 0);
        }
    }

    // Build graph
    for (let i = 0; i < words.length - 1; i++) {
        let w1 = words[i];
        let w2 = words[i + 1];

        if (w1.startsWith(w2) && w1.length > w2.length) {
            return "";
        }

        for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
            if (w1[j] !== w2[j]) {
                if (!graph.get(w1[j]).has(w2[j])) {
                    graph.get(w1[j]).add(w2[j]);
                    indegree.set(w2[j], indegree.get(w2[j]) + 1);
                }
                break;
            }
        }
    }

    // Topo sort (BFS)
    let queue = [];
    for (let [char, deg] of indegree) {
        if (deg === 0) queue.push(char);
    }

    let result = "";

    while (queue.length > 0) {
        let char = queue.shift();
        result += char;

        for (let neighbor of graph.get(char)) {
            indegree.set(neighbor, indegree.get(neighbor) - 1);
            if (indegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    return result.length === indegree.size ? result : "";
}




// Complexity:
// Time: O(V + E)
// Space: O(V + E)




