import React, { useState} from 'react';
import Reset from '../Reset';


const Counter = () => {

    // Stateful Variable for return statement
    let [counter, changeCounter] = useState(0);

    return (
        <div>
            <p>Count Amount  : {counter}</p>

            <button onClick = {() => {
                changeCounter(counter + 1);
            }}>Click To Add!</button>
            
            {' '}

            {/* <Reset  /> */}

            <button onClick = {() => {
                changeCounter(counter-counter);
            }}>Click To Reset!</button>
            
        </div>
    );
}


export default Counter;