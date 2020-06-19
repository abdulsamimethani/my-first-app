import React from 'react';

function Dinner(props){
    return (
        <div>
           <h1>My name is {props.myself}</h1>
           <h2>I am {props.age}</h2>
           <h3>I cooked {props.dishname} so good</h3>
        </div>
    )
}

export default Dinner;