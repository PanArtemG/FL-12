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

const wrap = document.createElement('div');
wrap.classList.add('wrap');

function createDom(structure, margin) {
    structure.map(el => {
        return createNodeItem(el, margin)
    });
}

function createNodeItem(el, margin) {
    let marginStep = 25;
    let margLeft = margin;
    const node = document.createElement('div');
    const iconItem = document.createElement('i');
    const title = document.createElement('span');

    title.innerText = `${el ? el.title : 'Folder is empty'}`;

    if (el && el.folder) {
        insertNode(el, node, iconItem, title, margLeft, 'folder', 'icon-folder', 'folder')
        if (!el.children) {
            margLeft += marginStep;
            createNodeItem(el.children, margLeft)
        } else if (el.children) {
            margLeft += marginStep;
            createDom(el.children, margLeft)
        }
    } else {
        insertNode(el, node, iconItem, title, margLeft, 'file', 'icon-file', 'insert_drive_file')
    }
}

function insertNode(el, node, iconItem, title, margLeft, type, iconClass, iconType) {
    iconItem.innerHTML = iconType;
    iconItem.style.marginLeft = `${margLeft}px`;
    iconItem.classList.add('material-icons', iconClass);

    node.setAttribute('type', type);
    node.style.marginLeft = `${margLeft}px`;
    node.appendChild(iconItem);
    node.appendChild(title);

    const wrap = document.createElement('div');
    wrap.classList.add('wrap');
    const check = -1
    if (structure.indexOf(el) !== check) {
        rootNode.appendChild(node);
        node.classList.add('active');
        node.classList.add('folder');
        node.classList.add('closed');
        node.classList.remove('not-active');
    } else {
        rootNode.lastChild.appendChild(wrap);
        wrap.appendChild(node);
        wrap.classList.add('not-active')
    }
}


createDom(structure, 0);

rootNode.addEventListener('click', (ev) => {
    const target = ev.target;
    const close = target.closest('div');
    console.log(close);
    if (close.getAttribute('class') === 'active folder closed') {
        close.classList.remove('closed');
        close.classList.add('open');
        close.childNodes.forEach(el => {
            el.classList.add('active');
            el.classList.remove('not-active')
        })
    } else if (close.getAttribute('class') === 'active folder open') {
        close.classList.remove('open');
        close.classList.add('closed');
        close.childNodes.forEach((el, index) => {
            if (index > 1) {
                el.classList.add('not-active');
                el.classList.remove('active')
            }
        })
    }
});

rootNode.addEventListener('mouseover', (ev) => {
    const target = ev.target;
    const close = target.closest('div');
    if (target !== rootNode) {
 close.style.border = '1px solid red' 
}
});

rootNode.addEventListener('mouseout', (ev) => {
    const target = ev.target;
    const close = target.closest('div');
    close.style.border = '1px solid transparent'
});