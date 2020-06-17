import React, {useState} from 'react';

function Counrter(){
    const [num, setnum] = useState(0);
    const onIncrease = ()=>{
        setnum(num => num +1);
    };

    const ondecrease = ()=>{
        setnum(num => num-1);
    };

    return(
        <div>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={ondecrease}>-1</button>
        </div>
    );
}

export default Counrter;