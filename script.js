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

    insideSlider.style.left = `${x - startx}px`
    
    checkboundary()
})

function checkboundary(){
    let outer = slider.getBoundingClientRect(); 
    let inner = insideSlider.getBoundingClientRect();

    console.log(inner.width, outer.width, inner.width - outer.width)

    if(parseInt(insideSlider.style.left) > 0) { // left boundary
        insideSlider.style.left = '0px';
    }else if(inner.right < 0) { //right boundary  
        insideSlider.style.left = `-${inner.width}px`
    }

}

checkboundary()






