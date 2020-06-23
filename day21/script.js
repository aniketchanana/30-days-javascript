const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight')

document.body.append(highlight);
function highlightLink() {
    const linkCords = this.getBoundingClientRect();
    const coord = {
        width : linkCords.width,
        height: linkCords.height,
        top: linkCords.top + window.scrollY,
        left: linkCords.left  + window.scrollX
    }
    highlight.style.width = `${coord.width}px`;
    highlight.style.height = `${coord.height}px`;
    highlight.style.transform = `translate(${coord.left}px,${coord.top}px`;
}
triggers.forEach(function(a) {
    a.addEventListener('mouseenter',highlightLink);
})