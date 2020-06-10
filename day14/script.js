const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(window.localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: true
    }
    items.push(item);
    populateList(items,itemsList);
    window.localStorage.setItem('items',JSON.stringify(items));
    this.reset();
}
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate,i) => {
        return `
            <li>
                <input type='checkbox' data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                <label for="item${i}">${plate.text}</label>
            </li>
        `
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return ;
    const ele = e.target;
    const index = ele.dataset.index;
    items[index].done = !items[index].done;
    window.localStorage.setItem('items',JSON.stringify(items));
    populateList(items, itemsList);
}
addItems.addEventListener('submit', addItem);

itemsList.addEventListener('click', toggleDone);


populateList(items,itemsList);