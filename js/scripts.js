const menuToggleButton = document.getElementById('menu-toggle-button');
const container = document.getElementById( 'site-navigation' );
const button = container.getElementsByTagName( 'button' )[0];
const menu = container.getElementsByTagName( 'ul' )[0];

menuToggleButton.addEventListener('click', () => {
    if ( -1 !== container.className.indexOf( 'toggled' ) ) {
        container.className = container.className.replace( ' toggled', '' );
        button.setAttribute( 'aria-expanded', 'false' );
        menu.setAttribute( 'aria-expanded', 'false' );
    } else {
        container.className += ' toggled';
        button.setAttribute( 'aria-expanded', 'true' );
        menu.setAttribute( 'aria-expanded', 'true' );
    }
});



const mybutton = document.getElementById("toTopBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (!mybutton) return;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton && mybutton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

const body = document.querySelector('body');
const frame = document.querySelector('body > iframe.frame-1878');

if (frame) {
    body.style.margin = '0';

}