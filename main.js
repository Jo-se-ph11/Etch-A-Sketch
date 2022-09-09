const buttons = document.querySelector('.buttons');
const container = document.querySelector('.container');
const input_btn = document.createElement('button');
const rgb_btn = document.createElement('button');
const black_btn = document.createElement('button');
const grey_btn = document.createElement('button');
const resize_btn = document.createElement('button');

function create_box(row, col) {
    
    for(let i = 0; i < (row * col); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid white';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
    
}
create_box(16, 16);

function color_grey() {
    const boxes = container.querySelectorAll('.box');
    grey_btn.textContent  = 'Grey';
    grey_btn.addEventListener('click', ()=> {
        boxes.forEach(box => {
            box.addEventListener('mouseover', ()=> {
                const random_grey = Math.floor(Math.random() * 255);
                box.style.backgroundColor = `rgb(${random_grey}, ${random_grey}, ${random_grey})`;
            })
        })
    })
    buttons.appendChild(grey_btn).classList.add('btn');
}
color_grey();

function color_random() {
    const boxes = container.querySelectorAll('.box');
    rgb_btn.textContent = 'Rainbow';
    rgb_btn.addEventListener('click', ()=> {
        boxes.forEach(box => {
            box.addEventListener('mouseover', ()=> {
                const rainbow = Math.floor(Math.random() * (16 ** 6 - 1)).toString(16);
                const rainbow_color = '#' + rainbow;
                box.style.backgroundColor = rainbow_color;
            })
        });
    })
    buttons.appendChild(rgb_btn).classList.add('btn');
}
color_random()

function color_black() {
    const boxes = container.querySelectorAll('.box');
    black_btn.textContent = 'black';
    black_btn.addEventListener('click', ()=> {
        boxes.forEach(box => box.addEventListener('mouseover', ()=> {
            box.style.backgroundColor = 'black'
        }));
    });
    buttons.appendChild(black_btn).classList.add('btn');
}
color_black();

function reset_grid() {
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.remove());
}

function resize_grid() {
    const boxes = container.querySelectorAll('.box');
    resize_btn.textContent = 'Create Grid';
    resize_btn.addEventListener('click', ()=> {
        const user = prompt("Enter a number to make your grid:")
        if(user === null || user === -1) {
            reset_grid();
            create_box(16, 16);
            color_black();
            color_random();
            color_grey();
        } else {
            reset_grid();
            create_box(user, user);
            color_black();
            color_random();
            color_grey();
        }
    })
    buttons.appendChild(resize_btn).classList.add('btn');
}
resize_grid();














