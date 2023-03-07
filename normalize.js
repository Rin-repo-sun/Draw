let V = [5, 1];
let W = [-2, 3];

V = normalize(V);
W = normalize(W);

let dotValue = dot(V, W);

let rad = Math.acos(dotValue);

let deg = rad / Math.PI * 180;

console.log(rad);
console.log(deg);

function normalize(v) {
    let len = Math.sqrt(v[0] * v[0] + v[1] * v[1]);
    return [v[0] / len, v[1] / len];
}

function dot(v0, v1) {
    return (v0[0] * v1[0]) + (v0[1] * v1[1]);
}