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


function createDom(structure, margin) {
    structure.map(el => {
        return createNodeItem(el, margin)
    });
}

function createNodeItem(el, margin) {
    let margLeft = margin;
    const node = document.createElement('div');
    node.classList.add('not-active');

    let title = document.createElement('span');
    title.innerText = `${el.title || "Folder is empty"}`;

    const iconItem = document.createElement('i');

    if (el.folder) {
        insertNode(node, iconItem, title, margLeft, 'folder', 'icon-folder', 'folder')

        if (!el.children) {
            margLeft += 25;
            createNodeItem(el.children, margLeft)
        } else if (el.folder && el.children) {
            margLeft += 25;
            createDom(el.children, margLeft)
        }
    } else {
        insertNode(node, iconItem, title, margLeft, 'file', 'icon-file', 'insert_drive_file')
    }
}

function insertNode(node, iconItem, title, margLeft, type, iconClass, iconType) {
    node.setAttribute('type', type);
    iconItem.classList.add('material-icons', iconClass);
    iconItem.innerHTML = iconType;
    iconItem.style.marginLeft = `${margLeft}px`;

    rootNode.appendChild(node);
    node.appendChild(iconItem);
    node.appendChild(title);
    node.style.marginLeft = `${margLeft}px`;
}








createDom(structure, 0);