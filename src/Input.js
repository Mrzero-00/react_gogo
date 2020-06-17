import React,{useState} from 'react';

function Inputer(){

    const [text,settext] = useState({
        name:"",
        nickname:""
    });

    const {name,nickname} = text;  //객체를 비구조화 할당할 때 사용함

    const onReset= ()=>{
        settext(
            {
                name:"",
                nickname:""
            }
        );
    };
    const onPaint= (e)=>{
        const {name, value} = e.target;

        settext({
            ...text,    // 자바스크립트 스프레드문법을 사용해서 객체를 복사해온다. 이를통해 불변성을 지킬수 있음.
            [name]:value,
        });
        
    };

    return(
        <div style={{
            margin:"20px"
        }}>
            <input name ="name" placeholder="이름을 입력하세요" onChange={onPaint} value={name} />
            <input name ="nickname" placeholder="닉네임을 입력하세요" onChange={onPaint} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <p>이름:{name} 닉네임:{nickname}</p>
        </div>
    );
}

export default Inputer;