import React, {useState, useReducer, useRef} from 'react';

function reducer(state,action){
    switch(action.type){
        case 'increase' :
            return state +1;
        case 'decrease' :
            return state -1;
        default :
            return state;
            //thorw new Error('Unhandle action');
            
    }
}


function Counrter(){
    const [num, setnum] = useState(0);
    const [number, dispath] = useReducer(reducer,0);


    //유즈 리듀서 훅함수를 활용한 변수 저장방법 
    const onIncrease = ()=>{
        dispath({
            type : "increase"
        });
    }

    const ondecrease = ()=>{
        dispath({
            type : "decrease"
        });
    }

    // 유즈 스테이트를 훅함수를 활용한 변수 저장방법
    // const onIncrease = ()=>{
    //     setnum(num => num +1);
    // };

    // const ondecrease = ()=>{
    //     setnum(num => num-1);
    // };

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={ondecrease}>-1</button>
        </div>
    );
}

export default Counrter;