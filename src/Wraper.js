import React from 'react';


//div가 아닌 다른 태그로 감싸고 잇을때 내용을 나타내기위해서는 칠드런사용
function Wraper({children}){
    const style = {
        border: `1px solid pink`,
        color: 'red',
        padding: '32px'
    };

    console.log(children);

    return(
    <div style={style}>
        {children}
    </div>
    );

}

export default Wraper;
