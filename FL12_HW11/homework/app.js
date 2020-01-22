const structure = [
    {
        'folder': true,
        'title': 'Films',
        'children': [
            {
                'title': 'Iron Man.avi'
            },
            {
                'folder': true,
                'title': 'Fantasy',
                'children': [
                    {
                        'title': 'The Lord of the Rings.avi'
                    },
                    {
                        'folder': true,
                        'title': 'New folder 1',
                        'children': false
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Documents',
        'children': [
            {
                'folder': true,
                'title': 'EPAM Homework answers',
                'children': null
            }
        ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here




function createNodeItem(el, margin) {
    // debugger
    console.log(margin);
    let margLeft = margin;
    const node = document.createElement('div');
    node.classList.add('not-active');

    const title = document.createElement('span');
    title.innerText = `${el.title}`;
    const iconItem = document.createElement('i');


    if (el.folder) {

        node.setAttribute('type', 'folder');
        iconItem.classList.add('material-icons', 'icon-folder');
        iconItem.innerHTML = 'folder';

        rootNode.appendChild(node);
        node.appendChild(iconItem);
        node.appendChild(title);


        if (el.children) {
            margLeft = margLeft + 10;
            createDom(el.children, margLeft)
        }
    } else {
        node.setAttribute('type', 'file');
        iconItem.classList.add('material-icons', 'icon-file');
        iconItem.innerHTML = 'folder';
        iconItem.style.marginLeft = `${margin}`;

        rootNode.appendChild(node)
        node.appendChild(iconItem)
        node.appendChild(title)
    }
}

function createDom(structure, margin) {
    structure.map(el => {
        return createNodeItem(el, margin)
    });
}

createDom(structure, margin = 0);

// function createChildForFolder(child) {
//     const folder = document.createElement('div');
//     folder.classList.add('folder', `${el.title}`, 'not-active');
//
//     const title = document.createElement('span')
//     title.innerText = `${el.title}`;
//
//     const iconFolder = document.createElement('i');
//     iconFolder.classList.add('material-icons', 'icon-folder');
//     iconFolder.innerHTML = 'folder';
//
//     rootNode.appendChild(folder)
//     folder.appendChild(iconFolder)
//     folder.appendChild(title)
// }