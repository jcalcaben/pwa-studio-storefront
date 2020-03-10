//import React, { useState } from 'react';
import React from 'react';

// Import the Peregrine hook for locking the scroll feature
//import { useScrollLock } from '@magento/peregrine';

// Import this component's talon
import useScrollToggle from './useScrollToggle';

// Import the style sheet as a CSS module
import defaultClasses from './scrollToggle.css';
/*
// ScrollToggle component definition
const ScrollToggle = () => {
    // The Peregine hook does not maintain the scroll state, so
    // this component will maintain it
    const [locked, setLocked] = useState(false);

    // Set the scroll lock to the value of locked every time the
    // component renders
    useScrollLock(locked);

    // Determine which class to use based on the current locked state
    const classes = locked
        ? defaultClasses.rootActive
        : defaultClasses.rootInactive;

    // Define the handler for click events on this component
    const clickHandler = () => {
        // Toggle the value of the locked state
        // This causes the component to re-render causing it to 
        // call the Peregrine hook with the new state
        setLocked(!locked);
    };

    return (
        <button onClick={clickHandler} className={classes}>
            Scroll lock
        </button>
    );
};
*/

const ScrollToggle = () => {
    const { locked, clickHandler } = useScrollToggle();

    // Determine which class to use based on the current locked state
    const classes = locked
        ? defaultClasses.rootActive
        : defaultClasses.rootInactive;

    return (
        <button onClick={clickHandler} className={classes}>
            Scroll lock
        </button>
    );
};


export default ScrollToggle;
