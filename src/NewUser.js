import React from 'react';

function CreateUser({username,email,onChange,onClick}){
    return(
        <div>
            <input 
            placeholder="이름"
            value={username}
            onChange={onChange}
            name="username"
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