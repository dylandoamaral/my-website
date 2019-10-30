const width = 30;

draw();

window.addEventListener('resize', (event) => {
    draw()
});

export default function draw() {
    let canvas = document.getElementById('liseret');
    canvas.height = document.innerHeight;

    if (!canvas.getContext) return;

    let body = document.body, html = document.documentElement;

    if(window.innerWidth > 900){
    canvas.width = width;
    canvas.height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(0, - width / 2);
    for (let i = 0; i < canvas.height / width + 1; i++) {
        if (i % 2 == 0) {
            ctx.beginPath();
            ctx.moveTo(0, i * width);
            ctx.lineTo(width, (i * width + (i + 1) * width) / 2);
            ctx.lineTo(0, (i + 1) * width);
            ctx.closePath();
            ctx.fillStyle = "#222222";
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.moveTo(width, i * width);
            ctx.lineTo(0, (i * width + (i + 1) * width) / 2);
            ctx.lineTo(width, (i + 1) * width);
            ctx.closePath();
            ctx.fillStyle = "#C6A57A";
            ctx.fill();
        }
    }
}else{
    canvas.width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
    canvas.height = width;
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(- width / 2, 0);
    for (let i = 0; i < canvas.width / width + 1; i++) {
        if (i % 2 == 0) {
            ctx.beginPath();
            ctx.moveTo(i * width, 0);
            ctx.lineTo((i * width + (i + 1) * width) / 2, width);
            ctx.lineTo((i + 1) * width, 0);
            ctx.closePath();
            ctx.fillStyle = "#222222";
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.moveTo(i * width, width);
            ctx.lineTo((i * width + (i + 1) * width) / 2, 0);
            ctx.lineTo((i + 1) * width, width);
            ctx.closePath();
            ctx.fillStyle = "#C6A57A";
            ctx.fill();
        }
    }
}
}