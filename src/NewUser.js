import React from 'react';

function CreateUser({name,email,onChange,onClick}){
    return(
        <div>
            <input 
            placeholder="이름"
            value={name}
            onChange={onChange}
            name="name"
            />
            <input 
            placeholder="이메일"
            value={email}
            onChange={onChange}
            name="email"
            />
            <button onClick={onClick}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);