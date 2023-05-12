import {useState,useRef}from "react";
import  TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid";


function App() {

const [todos, setTodos]= useState([{id:1,name:"Todo1",completed:false}]);

const todoNameRef=useRef();

const handleAddTodo=()=>{
  //タスクを追加する
  const name =todoNameRef.current.value;
  setTodos((prevTodos)=>{
    return[...prevTodos,{id:"1",name:name,completed:false}];
  });
    todoNameRef.current.value=null;

};

  return <div>
    <TodoList todos={todos}/>
    <input type="text" ref={todoNameRef}/>
    <button onClick={handleAddTodo}>タスクを追加 </button>
    <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>

    </div>;
}

const Ap = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}

export default App;
