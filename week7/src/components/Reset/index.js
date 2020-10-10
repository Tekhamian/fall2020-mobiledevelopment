import React, {useState} from 'react';
import counter from '../Counter';

const Reset = () => {
    let [counter, changeCounter] = useState(0);
     
    return (
        // <div>
        
        <button onClick = {() => {
            changeCounter(counter - counter);
        }}>Click To Reset!</button>
        // </div>
       
    );
}


export default Reset;



