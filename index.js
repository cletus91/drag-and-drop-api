const draggable = document.getElementById('draggable-list');
const check = document.getElementById('btn-check');

const richestPeople = [
	'Elon Musk',
	'Bill Gates',
	'Mark Zuckerberg',
	'Larry Ellison',
	'Larry Page',
	'Sergey Brin',
	'Warren Buffet',
	'Francoise Bettencourt',
	'Mukesh Ambani',
	'Bernard Arnault',
];

const listItems = [];
let dragStartIndex;

createList();

function createList() {
	[...richestPeople]
		.map((a) => ({ value: a, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map((a) => a.value)
		.forEach((person, index) => {
			const listItem = document.createElement('li');
			listItem.setAttribute('data-index', index);
			listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="person">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;
			listItems.push(listItem);
			draggable.appendChild(listItem);
		});

	addEventListeners();
}

function dragStart() {
	dragStartIndex = +this.closest('li').getAttribute('data-index');
	console.log(dragStartIndex);
}
function dragOver(e) {
	e.preventDefault();
}
function dragDrop() {
	this.classList.remove('over');
	const dragEndIndex = +this.getAttribute('data-index');
	console.log(dragEndIndex);
	swapItems(dragStartIndex, dragEndIndex);
}
function dragEnter() {
	this.classList.add('over');
}
function dragLeave() {
	this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
	const itemOne = listItems[fromIndex].querySelector('.draggable');
	const itemTwo = listItems[toIndex].querySelector('.draggable');
	// console.log(itemOne, itemTwo);
	listItems[fromIndex].appendChild(itemTwo);
	listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
	const draggables = document.querySelectorAll('.draggable');
	const dragListItems = document.querySelectorAll('.draggable-list li');

	draggables.forEach((draggable) => {
		draggable.addEventListener('dragstart', dragStart);
	});

	dragListItems.forEach((item) => {
		item.addEventListener('dragover', dragOver);
		item.addEventListener('drop', dragDrop);
		item.addEventListener('dragenter', dragEnter);
		item.addEventListener('dragleave', dragLeave);
	});
}
