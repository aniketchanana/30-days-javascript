const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
hero.addEventListener('mousemove', shadow);
const walk = 500;
function shadow(e) {
    const { offsetWidth: width,  offsetHeight: height} = hero;
    let {offsetX : x, offsetY: y} = e;

    if (this !== e.target) {
        // this is our .hero element and e.target is the element on which is mouse is hovering over
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }
    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (y / height * walk) - (walk / 2);

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1 }px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${xWalk}px ${yWalk * -1}px 0 rgba(0,0,255,0.7),
        ${xWalk * -1}px ${yWalk * -1}px 0 rgba(255,0,255,0.7)
    `
}