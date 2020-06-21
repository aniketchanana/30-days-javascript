const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transScript = Array.from(e.results).map( result => result[0]).map(result => result.transcript).join('');

    p.textContent = transScript;
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

    // you can run for getting weather and all the cool stuff we do
});

recognition.addEventListener('end', () => {
    recognition.start();
})
recognition.start();