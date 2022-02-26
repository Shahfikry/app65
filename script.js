let slider = document.querySelector('.container2');
let insideSlider = document.querySelector('.wrapper');
let pressed =false;
let startx;
let x;



slider.addEventListener('mousedown', (e) =>{
    pressed=true;
    startx = e.offsetX - insideSlider.offsetLeft;
    slider.style.cursor = 'grabbing';
    
});

slider.addEventListener('mouseenter', ()=>{
    slider.style.cursor ='grab'
});

slider.addEventListener('mouseup', ()=>{
    slider.style.cursor = 'grab';
});

window.addEventListener('mouseup', ()=>{
    pressed = false
});

slider.addEventListener('mousemove', (e) =>{
    if(!pressed) return;
    e.preventDefault ();

    x = e.offsetX

    insideSlider.style.left = `${x - startx}px`;

    
})





