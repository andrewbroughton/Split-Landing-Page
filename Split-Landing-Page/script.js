
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// code improvement -----------------------------------------------
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));

left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));

right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

// ------------------------------------------------------------------



// original working version -----------------------------------------

// left.addEventListener('mouseleave', () => {
//     container.classList.remove('hover-left');
// })

// right.addEventListener('mouseenter', () => {
//     container.classList.add('hover-right');
// })

// right.addEventListener('mouseleave', () => {
//     container.classList.remove('hover-right');
// })
// ---------------------------------------------




// first attempt -------------------------------

// left.addEventListener('mouseenter', () => {
//     document.querySelector('div.container').classList.add('hover-left');
    
// })

// left.addEventListener('mouseleave', event => {
//     document.querySelector('.left').classList.remove('hover-left');
// })

// right.addEventListener('mouseover', event => {
//     document.querySelector('div.container').classList.add('hover-left');
// })