let text = document.getElementById('text');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Calculate the scroll position relative to each image's position
    // let hill1Scroll = value - hill1.offsetTop;
    // let hill2Scroll = value - hill2.offsetTop;
    // let hill3Scroll = value - hill3.offsetTop;
    // let hill4Scroll = value - hill4.offsetTop;

    // Apply different effects based on scroll positions
    text.style.marginTop = value * 2.5 + 'px';

    // Eeffects for each image
    if(hill1.style.marginBottom > 0) hill1.style.marginTop = value * -1 + 'px'; // probat nesta sa ovim ifom - ovo kao string vraca
    hill2.style.marginTop = value * 2 + 'px';
    // hill3.style.marginTop = value * -0.7 + 'px';
    // hill4.style.marginTop = value * -1 + 'px';
});