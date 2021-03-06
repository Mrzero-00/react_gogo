import React, {useEffect} from 'react';

const UserLoad = React.memo(function UserLoad({user, onRemove, onTrue}){

    useEffect(()=>{
        console.log("컴포넌스 마운트");
        console.log(user);
        return ()=>{
            console.log("컴포넌스 업데이트 이전");
            console.log(user);
        }
    },[user]);  // 만약 deps의 []로 한다면, 처음 마운트할때만 작동하고, 업데이트의 대해서는 관리되지 않음

    const {username, email, id, active} = user;
    return(
        <div>
            <b style={{
                color : active ? "red" : "black",
                cursor : "pointer"
            }}
            onClick={()=>onTrue(id)}>{username}</b><span>({email})</span><button onClick={()=>onRemove(id)}>삭제</button>  
            &nbsp;
        </div>
    );
        });
//onRemove 실행시 함수를 따로 불러야한다.만약 onClick={onRemove(user.id)} 를 하게된다면, 랜더링과 동시에 함수가 호출되면서 다 지워진다.
//객체형태를 사용하기위해서는 객체를 프롭스로 받아와야함. 즉, UsesrLoad(user) 가 아니라 UserLoad({user})임

function Userlist({users, onRemove, onTrue}){
    return(
        <div>
            {
                users.map(user =><UserLoad user={user} key={user.id} onRemove={onRemove} onTrue={onTrue}/>)  
            }
        </div>
    );
}

/*key값이 지정되지 않으면 오류메세지가 나오는데, index를 키값으로 지정하면 오류 메시지만 없어지고 성능상의 효율은 없음. 되도록이면 고유키값을 지정하고 그것을 사용하는것이 성능상으로 좋음.*/

export default React.memo(Userlist);