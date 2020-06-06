const inputs = document.querySelectorAll("input[type='checkbox']");
let lastChecked ;

inputs.forEach( (input) => {
    input.addEventListener('click',handelCheck);
})

function handelCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        inputs.forEach( checkbox => {
            if ((checkbox === this || checkbox === lastChecked) && this !== lastChecked) {
                inBetween = !inBetween;
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        })
    }
    if (this.checked) {
        lastChecked = this;
    }
}