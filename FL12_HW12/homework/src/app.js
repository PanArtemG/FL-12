const mainPage = document.getElementById('mainPage');
const addPage = document.getElementById('addPage');
const modifyPage = document.getElementById('modifyPage');
const listTermContainer = document.getElementById('listTermContainer');


const addNameInput = document.getElementById('addName');
const addTermInput = document.getElementById('addTerm');

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

console.log(location.hash);

loadListTerms();


addTermsBtn.addEventListener('click', () => {
    location.hash = hashList.addHash;
    mainPage.classList.toggle('inactive');
    addPage.classList.toggle('inactive');
});

saveNewTermsBtn.addEventListener('click', ev => {
    createdNewTerm(ev)
});

cancelNewTermBtn.addEventListener('click', (ev) => {
    closedBlock(ev)
});

cancelModifyTermBtn.addEventListener('click', (ev) => {
    closedBlock(ev)
});

// saveModifyBtn.addEventListener('click', () => {
//
// })


function loadListTerms() {
    // debugger
    let BDTermsStorage = localStorage.getItem('BDTerms');
    console.log(!!BDTermsStorage);
    if (BDTermsStorage !== 'undefined') {
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

            itemTitle.innerText = `Name : ${el.name}`;
            itemContent.innerText = `Term : ${el.term}`;
            itemWrap.setAttribute('id', `${el._id}`);
            itemWrap.classList.add('term-item');

            itemBtnWrap.classList.add('btn-wrap');

            itemStatusBtn.innerText = 'Change Status';
            itemModifyBtn.innerText = 'modify';

            itemStatusBtn.setAttribute('status', `${el.status}`);
            itemModifyBtn.setAttribute('modify', 'true');

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
                let status = target.getAttribute('status');
                let modify = target.getAttribute('modify');

                if (status) {
                    let id = +ev.currentTarget.getAttribute('id');
                    BDTerms.forEach(el => {
                        if (el._id === id) {
                            el.status = !el.status;
                            itemWrap.classList.toggle('status-true');
                            const jsonBD = JSON.stringify(BDTerms);
                            localStorage.setItem('BDTerms', jsonBD);
                        }
                    });
                } else if (modify) {
                    closedBlock(ev)
                }
            })
        })
    }
}

function createdNewTerm(ev) {
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
        BDTerms.push(newTerm);
        saveStorage(BDTerms, ev)
    }
}

function saveStorage(BDTerms, ev) {
    const jsonBD = JSON.stringify(BDTerms);
    localStorage.setItem('BDTerms', jsonBD);
    resetInputValue();
    closedBlock(ev);
    createListItem();
}

function resetInputValue() {
    addNameInput.value = '';
    addTermInput.value = '';
}

function closedBlock(ev) {
    let btn = ev.target;
    let id = btn.getAttribute('id');
    let modify = btn.getAttribute('modify');

    if (id === 'cancelNewTermBtn') {
        addPage.classList.toggle('inactive');
        location.hash = hashList.mainHash;
        resetInputValue();
    } else if (modify) {
        let id = +btn.parentElement.parentElement.getAttribute('id');
        modifyData(id);
        modifyPage.classList.toggle('inactive');
        location.hash = hashList.editHash;
    } else if (id === 'cancelModifyTermBtn') {
        modifyPage.classList.toggle('inactive');
        location.hash = hashList.mainHash;
    } else if (id === 'saveNewTermsBtn') {
        addPage.classList.toggle('inactive');
        location.hash = hashList.mainHash;
        resetInputValue();
    }
    mainPage.classList.toggle('inactive');
}

function modifyData(id) {
    let modifyName = document.getElementById('modifyName');
    let modifyTerm = document.getElementById('modifyTerm');
    BDTerms.forEach(el => {
        if (el._id === id) {
            modifyName.value = el.name;
            modifyTerm.value = el.term;
        }
    })
}

