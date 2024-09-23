function random(number) {
    return Math.floor(Math.random() * number);
}

function bgchange() {
    const rndcol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndcol;
}

bgchange();