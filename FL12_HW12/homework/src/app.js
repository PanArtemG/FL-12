const mainPage = document.getElementById('mainPage');
const addPage = document.getElementById('addPage');
const modifyPage = document.getElementById('modifyPage');

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

saveNewTermsBtn.addEventListener('click', createdNewTerm);

addTermsBtn.addEventListener('click', () => {
    location.hash = hashList.addHash;
    mainPage.classList.toggle('inactive');
    addPage.classList.toggle('inactive');
});

cancelNewTermBtn.addEventListener('click', () => {
    closedBlock()
});

cancelModifyTermBtn.addEventListener('click', () => {
    closedBlock()
});


function createdNewTerm (){
    console.log('createdNewTerm');
    let name = addNameInput.value;
    let term = addTermInput.value;
    if (name && term) {
        const newTerm = {
            _id: new Date().getTime(),
            status: false,
            name: name,
            term: term,
            date : new Date().getTime()
        };
        BDTerms.push(newTerm)
    }
    console.log(BDTerms);
    const jsonBD = JSON.stringify(BDTerms);
    localStorage.setItem('BDTerms', jsonBD);
    closedBlock()
}
function closedBlock() {
    mainPage.classList.toggle('inactive');
    if (location.hash === hashList.addHash) {
        addPage.classList.toggle('inactive');
    } else {
        modifyPage.classList.toggle('inactive');
    }
    location.hash = hashList.mainHash
}