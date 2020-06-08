let pressed = [];
const secretCode = 'webos';
window.addEventListener('keypress', e => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(secretCode.length - 1, pressed.length - secretCode.length)
    if(pressed.join('').includes(secretCode)) {
        cornify_add();
    }
})