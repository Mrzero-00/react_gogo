import React, {useState, useRef} from 'react';
import Userlist from './Userlist';
import CreateUser from './NewUser';


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
 

const onChange = (e)=>{
  const {name, value} = e.target;
  setnewuser({
    ...newuser,
    id:newusernumber.current,  //current중요!
    [name]:value
  });
  
};

const onClick = ()=>{
  // setusers([...users,newuser]);    //배열추가하는 방법은 두가지중 하나 선택하여 사용하면됨.
  setusers(users.concat(newuser));
  setnewuser({
    name:'',
    email:'',
    active: false
  });
  newusernumber.current +=1; //current중요!
};

const onRemove = (id)=>{
  setusers(users.filter(n=> n.id !== id));
};

const onTrue = (id)=>{
  setusers(users.map( 
  n => n.id == id 
  ? {...n , active: !n.active} 
  : n
  ));
  
};



  return (
    <div>
      <CreateUser name={name} email={email} onChange={onChange} onClick={onClick}/>
      <Userlist users={users} onRemove={onRemove} onTrue={onTrue}/>
    </div>

  );
}

export default App;
