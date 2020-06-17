import React from 'react';

function UserLoad({user}){
    return(
        <div>
            <b>{user.name}</b><span>({user.email})</span>
        </div>
    );
}
//객체형태를 사용하기위해서는 객체를 프롭스로 받아와야함. 즉, UsesrLoad(user) 가 아니라 UserLoad({user})임

function Userlist(){
    const users =[
        {
            id: 1,
            name : "손상일",
            email: "mrzero885@gmail.com"
        },
        {
            id: 2,
            name : "우아하",
            email: "mrdsdsa@gmail.com"
        },
        {
            id: 3,
            name : "손하나",
            email: "mrzedasdas@gmail.com"
        }
    ];
    return(
        <div>
            {
                users.map(user =><UserLoad user={user} key={user.id} />)
            }
        </div>
    );
}

export default Userlist;