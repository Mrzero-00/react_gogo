import React,{useState} from 'react';

function Inputer(){

    const [text,settext] = useState("");

    const onReset= ()=>{
        settext("");

    };

    const onPaint= (e)=>{
        settext(e.target.value);
    };

    return(
        <div style={{
            margin:"20px"
        }}>
            <input placeholder="이름을 입력하세요" onChange={onPaint} value={text} />
            <input placeholder="닉네임을 입력하세요" onChange={onPaint} value={text} />
            <button onClick={onReset}>초기화</button>
            <p>값:{text}</p>
        </div>
    );
}

export default Inputer;