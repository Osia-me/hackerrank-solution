function rotLeft(a, d) {
    let i = 0;
    while (i < d) {

        let el = a[0];
        a.shift();
        a.push(el);
        i++
    }
    return a;
}

///////////  Shorter option
function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        a.push(a.shift());
    }
    return a;
}

////////// One line without loop
function rotLeft(a, d) {
    a = a.slice(d).concat(a.slice(0, d));
    return a;
}
