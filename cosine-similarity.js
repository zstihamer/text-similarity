function termFreqMap(str) {
    const words = str.split(' ');
    let termFreq = {};
    words.forEach(function (w) {
        termFreq[w] = (termFreq[w] || 0) + 1;
    });
    return termFreq;
}

function addKeysToDict(map, dict) {
    for (let key in map) {
        dict[key] = true;
    }
}

function termFreqMapToVector(map, dict) {
    let termFreqVector = [];
    for (let term in dict) {
        termFreqVector.push(map[term] || 0);
    }
    return termFreqVector;
}

function vecDotProduct(vecA, vecB) {
    let product = 0;
    for (let i = 0; i < vecA.length; i++) {
        product += vecA[i] * vecB[i];
    }
    return product;
}

function vecMagnitude(vec) {
    let sum = 0;
    for (let i = 0; i < vec.length; i++) {
        sum += vec[i] * vec[i];
    }
    return Math.sqrt(sum);
}

function cosineSimilarity(vecA, vecB) {
    return vecDotProduct(vecA, vecB) / (vecMagnitude(vecA) * vecMagnitude(vecB));
}

/**
 * Cosine Similarity
 *
 * Cosine similarity between two sentences can be found as a dot product of their vector representation. There are various ways to represent sentences/paragraphs as vectors.
 * @param strA
 * @param strB
 * @returns {*}
 */

function textCosineSimilarity(strA, strB) {
    let termFreqA = termFreqMap(strA);
    let termFreqB = termFreqMap(strB);

    let dict = {};
    addKeysToDict(termFreqA, dict);
    addKeysToDict(termFreqB, dict);

    let termFreqVecA = termFreqMapToVector(termFreqA, dict);
    let termFreqVecB = termFreqMapToVector(termFreqB, dict);

    return cosineSimilarity(termFreqVecA, termFreqVecB);
}


module.exports = {
    textCosineSimilarity,
}
