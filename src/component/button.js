import React from 'react';

const Button = () => {
    const mouse = document.getElementById('button')
    const mouseMove = (evt) => {
        const clicked = mouse.contains(evt.target);
        if (!clicked) {
            // mouse.classList.add('button')
            console.log('clicked');
        }
        else {
            // mouse.classList.remove('button')
            console.log('unclicked');
        }
    }
    return (
        <div>
            <button onMouseOver={mouseMove}>
                Click me!
            </button>
        </div>
    );
}

export default Button;
