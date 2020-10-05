// Always let the "import React..." be the first line in any Component
import React from 'react';

const Example = () => {

    // Variables & Template Literals for return statement
    let greet = `Hi, my name is `; 
    let firstName = `Robert`;
    let intro = <div>{greet}{firstName}</div>;

    return (
        <p>
        {/* <div>This is a Test!</div> */}
        <div>{intro}</div>
        </p>
    )
};


export default Example;