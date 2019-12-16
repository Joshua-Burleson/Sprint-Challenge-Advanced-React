import { useState } from 'react';

export const useGreenText = bool => {
    const [textColor, setColor] = useState(bool);

    const newColor = bool => {
        setColor(bool);
        document.body.classList.remove(bool ? 'whiteText' : 'greenText')
        document.body.classList.add(bool ? 'greenText' : 'whiteText');
    };

    return [textColor, newColor];

}



export const usePlayerStorage = (key, initialVal) => {
    //On initialization check if key exists in local storage. If not, set it.
    if(!localStorage.getItem(key)) localStorage.setItem(key, JSON.stringify(initialVal));

    //Get the previous value of the key (or our newly set one).
    const previousVal = JSON.parse(localStorage.getItem(key));

    //This will become our storedValue state;
    let [storedValue, setStoredValue] = useState(previousVal && previousVal.length >= 1 ? previousVal : initialVal);

    //This will become our custom setter
    const newValue = val => {
        //Don't trust users, check the current localStorage value instead of just our current state
        const currentPlayers = JSON.parse(localStorage.getItem(key));
        //Don't add repeats to players value in local storage
        if(currentPlayers && currentPlayers.find(player => player.name === val.name)) return;
        //Set our storedValue state to include our newVal
        setStoredValue([...storedValue, val]);
        //Set our localStorage player value to be equal to our state
        localStorage.setItem(key, JSON.stringify(storedValue))
    };

    return [storedValue, newValue];
};