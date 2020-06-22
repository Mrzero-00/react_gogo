import { useReducer, useCallback, usestate } from "react"
 

// //useReducer를 활용한 커스텀훅 만들기
// function reducer(state,action){
//     switch (action.type){
//         case 'Change':
//             return ;
//         case 'Reset' :
//             return ;
//         defalut :
//             state;
//     }
// }

// function useInputs


//useState를 활용한 커스텀훅 만들기
function useInputs(initform){
    const [data, setdata] = usestate(initform);
    
    const change = useCallback(e=>{
        const {name, value} = e.target;
        setdata(data => ({...data,[name]:value}));
    },[]);

    const reset = usecallback(()=>{
        setdata(initform);
    },[initform]);

    return [data,change,reset];

}

export default react.memo(useInputs);