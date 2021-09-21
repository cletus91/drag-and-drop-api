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
            <div class="draggable" draggable="true">
            <span class="number">${index + 1}</span>
                <p class="person">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;
			listItems.push(listItem);
			draggable.appendChild(listItem);
		});
}
