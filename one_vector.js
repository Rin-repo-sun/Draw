let A = [1, 0];
let B = [2, 3];
console.log(dot(A,B));

function dot(v0,v1){
    return (v0[0] * v1[0]) + (v0[1] * v1[1]);
}