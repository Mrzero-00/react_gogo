import React, {useState, useRef, useMemo, useCallback} from 'react';
import Userlist from './Userlist';
import CreateUser from './NewUser';

function counterActiveUser(users){
  console.log("액티브 유저 카운터중..");
  return users.filter(user => user.active == true).length;
}

function App() {

  const [newuser, setnewuser] = useState({
    name: "",
    email: ""
  });

  const {name, email} = newuser;

  const [users, setusers] = useState(
  [
    {
        id: 1,
        name : "손상일",
        email: "mrzero885@gmail.com",
        active: true
    },
    {
        id: 2,
        name : "우아하",
        email: "mrdsdsa@gmail.com",
        active: false
    },
    {
        id: 3,
        name : "손하나",
        email: "mrzedasdas@gmail.com",
        active: false
  }
]);


let newusernumber = useRef(4);
 

const onChange = useCallback((e)=>{
  const {name, value} = e.target;
  setnewuser({
    ...newuser,
    id:newusernumber.current,  //current중요!
    [name]:value
  });
}, [newuser]);
  

const onClick = useCallback(()=>{
  // setusers([...users,newuser]);    //배열추가하는 방법은 두가지중 하나 선택하여 사용하면됨.
  setusers(users=>users.concat(newuser));
  setnewuser({
    name:'',
    email:'',
    active: false
  });
  newusernumber.current +=1; //current중요!
},[newuser]);

const onRemove = useCallback((id)=>{
  setusers(users=>users.filter(n=> n.id !== id));
},[]);

const onTrue = useCallback((id)=>{
  setusers(users=>users.map( 
  n => n.id == id 
  ? {...n , active: !n.active} 
  : n
  ));
  
},[]);

const activeuserCount = useMemo(()=>counterActiveUser(users),[users]); //useMemo(함수 , deps) 로 이루어짐!.



  return (
    <div>
      <CreateUser name={name} email={email} onChange={onChange} onClick={onClick}/>
      <Userlist users={users} onRemove={onRemove} onTrue={onTrue}/>
      <div>활성화 유저수 : {activeuserCount}</div>
    </div>

  );
}

export default App;
