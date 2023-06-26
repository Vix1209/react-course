import React from 'react';

const Darkmode = () => {
    let darkmodeOn = true
    const darkmode = 'dark Mode is on'
    const lightMode = 'light Mode is on'
  
    const mode = () => {
        darkmodeOn =  !darkmodeOn;

        if (darkmodeOn === true) {
            console.log(lightMode);

        }
        else{
            console.log(darkmode);
        }
    }
    return (
        <div>
            {darkmodeOn ? darkmode : lightMode}
            <button onClick={mode}>
                change
            </button>
        </div>
    );
}

export default Darkmode;
