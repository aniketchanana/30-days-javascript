const keys = document.querySelectorAll('.key');
keys.forEach( key => {
    key.addEventListener('transitionend',removeTransition);
})
function removeTransition(e) {
    if(e.propertyName !== 'transform') return ;
    this.classList.remove('playing');
}
function playSound() {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; //so that when we hit it again and again it reqind time back to 0
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown',playSound);