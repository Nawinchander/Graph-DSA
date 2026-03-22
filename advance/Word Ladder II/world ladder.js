function findLadders(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    let result = [];
    let layer = {};
    layer[beginWord] = [[beginWord]];

    while (Object.keys(layer).length > 0) {
        let newLayer = {};

        for (let word in layer) {
            if (word === endWord) {
                return layer[word];
            }

            for (let i = 0; i < word.length; i++) {
                for (let c = 97; c <= 122; c++) {
                    let newWord =
                        word.slice(0, i) +
                        String.fromCharCode(c) +
                        word.slice(i + 1);

                    if (wordSet.has(newWord)) {
                        if (!newLayer[newWord]) newLayer[newWord] = [];
                        newLayer[newWord].push(
                            ...layer[word].map(path => [...path, newWord])
                        );
                    }
                }
            }
        }

        for (let w in newLayer) {
            wordSet.delete(w); // remove visited
        }

        layer = newLayer;
    }

    return result;
}


// Complexity:
// Time: O(N * M * 26) (N = words, M = length)
// Space: Huge (paths stored)



