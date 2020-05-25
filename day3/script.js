const inputs = document.querySelectorAll('.controls input');

function handelUpdate() {
    const suffix = this.dataset.sizing || '';
    
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change',handelUpdate));

inputs.forEach(input => input.addEventListener('mousemove',handelUpdate));
