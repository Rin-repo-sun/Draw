function rnd() {
    let random = Math.random();

    random *= 1000;

    return Math.floor(random);
}

console.log(rnd());