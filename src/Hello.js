import React from 'react';

//컴퍼넌트의 앞글자는 무조건 대문자!, 카멜형식
function Hello(props){
    return <div>
        안녕하세요.{props.name}
    </div>;
}

Hello.defaultProps={
    name:"이름없음",
};

export default Hello;

