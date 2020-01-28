const mainPage = document.getElementById('mainPage');
const addPage = document.getElementById('addPage');
const modifyPage = document.getElementById('modifyPage');
const listTermContainer = document.getElementById('listTermContainer');


const addNameInput = document.getElementById('addName');
const addTermInput = document.getElementById('addTerm');

const addTermsBtn = document.getElementById('addTermsBtn');
const saveNewTermsBtn = document.getElementById('saveNewTermsBtn');
const cancelNewTermBtn = document.getElementById('cancelNewTermBtn');
const cancelModifyTermBtn = document.getElementById('cancelModifyTermBtn');

const BDTerms = [];

const hashList = {
    mainHash: '#/main',
    addHash: '#/add',
    editHash: '#/modify/'
};

console.log(location.hash);

loadListTerms();

function createListItem() {
    if (BDTerms.length) {
        listTermContainer.innerHTML = null;
        BDTerms.map(el => {
            const itemWrap = document.createElement('div');
            const itemTitle = document.createElement('h3');
            const itemContent = document.createElement('p');
            const itemBtnWrap = document.createElement('div');
            const itemStatusBtn = document.createElement('span');
            const itemModifyBtn = document.createElement('span');

            itemTitle.innerText = `Name : ${el.name}`;
            itemContent.innerText = `Term : ${el.term}`;
            itemWrap.setAttribute('id', `${el._id}`);
            itemWrap.classList.add('term-item');

            itemBtnWrap.classList.add('btn-wrap');

            itemStatusBtn.innerText = 'Change Status';
            itemModifyBtn.innerText = 'modify';

            itemStatusBtn.setAttribute('status', `${el.status}`);

            itemStatusBtn.classList.add('btn', 'change-status');
            itemModifyBtn.classList.add('btn');

            itemWrap.appendChild(itemTitle);
            itemWrap.appendChild(itemContent);
            itemWrap.appendChild(itemBtnWrap);
            itemBtnWrap.appendChild(itemStatusBtn);
            itemBtnWrap.appendChild(itemModifyBtn);

            itemWrap.classList.add(`${el.status ? 'status-true' : null}`);

            listTermContainer.appendChild(itemWrap);

            itemWrap.addEventListener('click', (ev) => {
                let target = ev.target;
                let status = target.getAttribute("status");
                if (status) {
                    let id = +ev.currentTarget.getAttribute('id');
                    BDTerms.map(el => {
                        if (el._id === id) {
                            el.status = !el.status;
                            itemWrap.classList.toggle('status-true');

                            const jsonBD = JSON.stringify(BDTerms);
                            localStorage.setItem('BDTerms', jsonBD);
                        }
                    });
                }
            })
        })
    } else {
        listTermContainer.innerHTML = `<h2>LIST TERMS EMPTY</h2>`
    }
}

addTermsBtn.addEventListener('click', () => {
    location.hash = hashList.addHash;
    mainPage.classList.toggle('inactive');
    addPage.classList.toggle('inactive');
});

saveNewTermsBtn.addEventListener('click', createdNewTerm);

cancelNewTermBtn.addEventListener('click', () => {
    closedBlock()
});

cancelModifyTermBtn.addEventListener('click', () => {
    closedBlock()
});


function loadListTerms() {
    let BDTermsStorage = localStorage.getItem('BDTerms');
    if (BDTermsStorage) {
        BDTermsStorage = JSON.parse(BDTermsStorage);
        BDTermsStorage.map(el => {
            BDTerms.push(el)
        });
    }
    createListItem();
}

function createdNewTerm() {
    let name = addNameInput.value;
    let term = addTermInput.value;
    if (name && term) {
        const newTerm = {
            _id: new Date().getTime(),
            status: false,
            name: name,
            term: term,
            date: new Date().getTime()
        };
        BDTerms.push(newTerm)
    }
    const jsonBD = JSON.stringify(BDTerms);
    localStorage.setItem('BDTerms', jsonBD);
    resetInputValue();
    closedBlock();
    createListItem();
}

function resetInputValue() {
    addNameInput.value = '';
    addTermInput.value = '';
}

function closedBlock() {
    mainPage.classList.toggle('inactive');
    if (location.hash === hashList.addHash) {
        addPage.classList.toggle('inactive');
    } else {
        modifyPage.classList.toggle('inactive');
    }
    location.hash = hashList.mainHash;
    resetInputValue()
}