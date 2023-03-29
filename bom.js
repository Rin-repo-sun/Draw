let V = [5, -3, 4, -6];

let L = Math.sqrt(V[0] * V[0] + V[1] * V[1] + V[2] * V[2] + V[3] * V[3]);

V[0] /= L;
V[1] /= L;
V[2] /= L;
V[3] /= L;

console.log(V);