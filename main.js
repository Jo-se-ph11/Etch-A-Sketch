

const create_box = (number_per_row ) =>{
    
    const container = document.getElementById('container');
    const total = (number_per_row * number_per_row) + number_per_row;
    const mod = number_per_row + 1;

    for(let i = 1; i < total; i++) {

        const div = document.createElement('div');

        if(i % mod === 0) {
            div.style.cssText = 'border: 0; height: 0; width: 100%';
        } else {
            div.style.cssText = 'border: 1px solid black; height: 25px; width: 25px';
        }
        container.append(div);
    }
}

const input_btn = document.querySelector('#input-btn')
const color = document.querySelector('#color');
const reset = document.querySelector('#reset');

input_btn.addEventListener('click', create_box);

color.addEventListener('click', function() {
    
    const randomColor = Math.floor(Math.random()*(16 ** 6 -1)).toString(16);
    const my_color = "#" + randomColor;
    console.log(my_color);
   
});

reset.addEventListener('click', function() {
    console.log('Joy is happy');
    
});







