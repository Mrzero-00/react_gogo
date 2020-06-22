import React,{useState, useRef, useCallback} from 'react';


// 리액트를 활용해서 DOM에 접근하고 싶을때 useRef를 활용함.
// 1. useRef불러옴  2. useRef를 선언해줌  3.접근하고싶은 태그의 ref={선언해준변수}로 지정해줌. 4. 변수명.current 를 활용하여 필요한 작업

function Inputer(){

    const [text,settext] = useState({
        name:"",
        nickname:""
    });

    const {name,nickname} = text;  //객체를 비구조화 할당할 때 사용함

    const nameRef = useRef();

    const onReset= useCallback(()=>{
        settext(
            {
                name:"",
                nickname:""
            }
        );
        nameRef.current.focus();  // 리액트를 활용해서 DOM에 접근하고 싶을때 useRef를 활용함.
    },[nameRef]);
    const onPaint= useCallback((e)=>{
        const {name, value} = e.target;

        settext({
            ...text,    // 자바스크립트 스프레드문법을 사용해서 객체를 복사해온다. 이를통해 불변성을 지킬수 있음.
            [name]:value,
        });
        
    },[text]);

    return(
        <div style={{
            margin:"20px"
        }}>
            <input name ="name" placeholder="이름을 입력하세요" onChange={onPaint} value={name} ref={nameRef} />
            <input name ="nickname" placeholder="닉네임을 입력하세요" onChange={onPaint} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <p>이름:{name} 닉네임:{nickname}</p>
        </div>
    );
}

export default React.memo(Inputer);