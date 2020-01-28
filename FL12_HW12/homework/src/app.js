const mainPage = document.getElementById('mainPage');
const addPage = document.getElementById('addPage');
const modifyPage = document.getElementById('modifyPage');
const listTermContainer = document.getElementById('listTermContainer');

const addTermsBtn = document.getElementById('addTermsBtn');
const saveNewTermsBtn = document.getElementById('saveNewTermsBtn');
const saveModifyBtn = document.getElementById('saveModifyBtn');
const cancelNewTermBtn = document.getElementById('cancelNewTermBtn');
const cancelModifyTermBtn = document.getElementById('cancelModifyTermBtn');

const BDTerms = [];

const hashList = {
    mainHash: '#/main',
    addHash: '#/add',
    editHash: '#/modify/'
};

loadListTerms();

addTermsBtn.addEventListener('click', () => {
    location.hash = hashList.addHash;
    mainPage.classList.toggle('inactive');
    addPage.classList.toggle('inactive');
});

saveNewTermsBtn.addEventListener('click', ev => {
    getValueInput(ev)
});

cancelNewTermBtn.addEventListener('click', ev => {
    closedBlockListener(ev)
});

cancelModifyTermBtn.addEventListener('click', ev => {
    closedBlockListener(ev)
});

saveModifyBtn.addEventListener('click', ev => {
    let name = document.getElementById('modifyName').value;
    let terms = document.getElementById('modifyTerms').value;
    saveTerms(ev, name, terms)
});

function loadListTerms() {
    location.hash = hashList.mainHash;
    let BDTermsStorage = localStorage.getItem('BDTerms');

    if (BDTermsStorage !== 'undefined' && BDTermsStorage) {
        BDTermsStorage = JSON.parse(BDTermsStorage);
        BDTermsStorage.forEach(el => {
            BDTerms.push(el)
        });
        createListItem();
    } else {
        listTermContainer.innerHTML = `<h2>LIST TERMS EMPTY</h2>`
    }
}

function createListItem() {
    if (BDTerms.length) {
        listTermContainer.innerHTML = null;
        BDTerms.forEach(el => {
            const itemWrap = document.createElement('div');
            const itemTitle = document.createElement('h3');
            const itemContent = document.createElement('p');
            const itemBtnWrap = document.createElement('div');
            const itemStatusBtn = document.createElement('span');
            const itemModifyBtn = document.createElement('span');
            const itemDeleteBtn = document.createElement('span');

            itemTitle.innerText = `Name : ${el.name}`;
            itemContent.innerText = `Term : ${el.term}`;
            itemWrap.setAttribute('id', `${el._id}`);
            itemWrap.classList.add('term-item');

            itemBtnWrap.classList.add('btn-wrap');

            itemStatusBtn.innerText = 'Status';
            itemModifyBtn.innerText = 'modify';
            itemDeleteBtn.innerText = 'delete';

            itemStatusBtn.setAttribute('status', `${el.status}`);
            itemModifyBtn.setAttribute('modify', 'true');
            itemDeleteBtn.setAttribute('delete', 'true');

            itemStatusBtn.classList.add('btn', 'change-status');
            itemModifyBtn.classList.add('btn');
            itemDeleteBtn.classList.add('btn');

            itemWrap.appendChild(itemTitle);
            itemWrap.appendChild(itemContent);
            itemWrap.appendChild(itemBtnWrap);
            itemBtnWrap.appendChild(itemStatusBtn);
            itemBtnWrap.appendChild(itemModifyBtn);
            itemBtnWrap.appendChild(itemDeleteBtn);

            itemStatusBtn.classList.add(`${el.status ? 'status-true' : null}`);

            listTermContainer.appendChild(itemWrap);

            itemWrap.addEventListener('click', ev => {
                let target = ev.target;
                let status = target.getAttribute('status');
                let modify = target.getAttribute('modify');
                let deleteBtn = target.getAttribute('delete');

                let id = +ev.currentTarget.getAttribute('id');

                if (status) {
                    BDTerms.forEach(el => {
                        if (el._id === id) {
                            el.status = !el.status;
                            itemStatusBtn.classList.toggle('status-true');
                            const jsonBD = JSON.stringify(BDTerms);
                            localStorage.setItem('BDTerms', jsonBD);
                        }
                    });
                } else if (modify) {
                    closedBlockListener(ev)
                } else if (deleteBtn) {
                    BDTerms.forEach((el, index) => {
                        if (el._id === id) {
                            itemWrap.classList.toggle('inactive');
                            deleteTerms(index);
                            const jsonBD = JSON.stringify(BDTerms);
                            localStorage.setItem('BDTerms', jsonBD);
                        }
                    });
                }
            })
        })
    }
}

function getValueInput(ev) {
    let name = document.getElementById('addName').value;
    let terms = document.getElementById('addTerm').value;
    saveTerms(ev, name, terms);
}

function saveTerms(ev, name, terms) {
    if (name && terms) {
        const newTerm = {
            _id: new Date().getTime(),
            status: false,
            name: name,
            term: terms,
            date: new Date().getTime()
        };
        BDTerms.push(newTerm);
        saveStorage(BDTerms, ev)
    }
}

function saveStorage(BDTerms, ev) {
    const jsonBD = JSON.stringify(BDTerms);
    localStorage.setItem('BDTerms', jsonBD);
    resetInputValue();
    closedBlockListener(ev);
    createListItem();
}

function resetInputValue() {
    document.getElementById('addName').value = '';
    document.getElementById('addTerm').value = '';
}

function closedBlockListener(ev) {
    let btn = ev.target;
    let id = btn.getAttribute('id');
    let modify = btn.getAttribute('modify');

    if (id === 'cancelNewTermBtn') {
        addPage.classList.toggle('inactive');
        location.hash = hashList.mainHash;
        resetInputValue();
    } else if (modify) {
        let id = +btn.parentElement.parentElement.getAttribute('id');
        modifyTerms(id);
        modifyPage.classList.toggle('inactive');
        location.hash = `${hashList.editHash}:${id}`;
    } else if (id === 'cancelModifyTermBtn') {
        modifyPage.classList.toggle('inactive');
        location.hash = hashList.mainHash;
    } else if (id === 'saveNewTermsBtn') {
        addPage.classList.toggle('inactive');
        location.hash = hashList.mainHash;
        resetInputValue();
    } else if (id === 'saveModifyBtn') {
        modifyPage.classList.toggle('inactive');
        location.hash = hashList.mainHash;
        resetInputValue();
    }
    mainPage.classList.toggle('inactive');
}

function modifyTerms(id) {
    let modifyName = document.getElementById('modifyName');
    let modifyTerms = document.getElementById('modifyTerms');
    BDTerms.forEach((el, index) => {
        if (el._id === id) {
            modifyName.value = el.name;
            modifyTerms.value = el.term;
            deleteTerms(index)
        }
    })
}

function deleteTerms(index) {
    if (!index) {
        BDTerms.splice(index, ++index);
    } else {
        BDTerms.splice(index, index);
    }
}