function rnd() {
    let random = Math.random();

    random *= 100;

    return Math.floor(random);
}

console.log(rnd());