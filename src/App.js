import React, {useState, useRef, useMemo, useCallback, useReducer} from 'react';
import Userlist from './Userlist';
import CreateUser from './NewUser';

function counterActiveUser(users){
  console.log("액티브 유저 카운터중..");
  return users.filter(user => user.active == true).length;
}

function reduce(state,action){
  switch(action.type){
    case "change":
      return{
        ...state,
        initform:{
          ...state.initform,
          [action.name] : action.value
        }
      };

    case "create":
      return{
        ...state,
        initform:initdata.initform,
        users: state.users.concat(action.users)
      }

    case "remove":
      return{
        ...state,
        users : state.users.filter(user => user.id !== action.id)
      }

    case "toggle":
      return{
        ...state,
        users : state.users.map(user => 
        user.id ===action.id 
        ? {...user,active:!user.active} : user)
      }
    default :
      throw new Error("unhandle action");
  }
}


const initdata = {
  initform:{
    username:'',
    email:''
  },
  users:[
    {
      id: 1,
      username : "손상일",
      email: "mrzero885@gmail.com",
      active: true
  },
  {
      id: 2,
      username : "우아하",
      email: "mrdsdsa@gmail.com",
      active: false
  },
  {
      id: 3,
      username : "손하나",
      email: "mrzedasdas@gmail.com",
      active: false
}
  ]
};

function App() {

  const [state,dispatch] = useReducer(reduce,initdata);
  const {users} = state;
  const {username, email} = state.initform;
  let nextuserid = useRef(4);

  const onChange = useCallback( e=> {
    const {name, value} = e.target;
    dispatch({
      type:"change",
      name,
      value
    })
  },[]);

  const onClick = useCallback(()=>{
    dispatch({
      type:"create",
      users:{
        id : nextuserid.current,
        username,
        email
      }
    });
    nextuserid.current += 1;
  },[username, email]);

  const onRemove = useCallback((e)=>{
    dispatch({
      type:"remove",
      id: e
    });    
  },[]);

  const onTrue = useCallback((e)=>{
    dispatch({
      type: "toggle",
      id : e
    });
  },[]);
 

const activeuserCount = useMemo(()=>counterActiveUser(users),[users]); //useMemo(함수 , deps) 로 이루어짐!.



  return (
    <div>
      <CreateUser username={username} email={email} onChange={onChange} onClick={onClick}/>
      <Userlist users={users} onRemove={onRemove} onTrue ={onTrue}/>
      <div>활성화 유저수 :{activeuserCount}</div>
    </div>

  );
}

export default App;
