import './App.css';
import Navbar from './Components/Navbar';
import TodoWrapper from './Components/TodoWrapper';
import { useState } from "react";
import Todo from './Components/Todo';
import Form from './Components/Form';
import Banner from './Components/Banner';
export default function App() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(1);
  const [checked, setChecked] = useState(false);
  function submitHandle(e) {
    e.preventDefault();
    setTasks([{ id: count, text: todo }, ...tasks]);
    setTodo("");
    setCount(count + 1);
    console.log(tasks);
  }
  function inputHandle(e) {
    e.preventDefault();
    setTodo(e.target.value);
  }
  function checkHandle() {
    setChecked(!checked);
  }
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <section className='main'>
        <TodoWrapper>
          <h1>Tell me what is needs to be done?</h1>
          <Form submitHandle={submitHandle} inputHandle={inputHandle} todo={todo} />
          <div className="content">
            {tasks?.map((item) => {
              return <Todo todo={item.text} id={item.id} checkHandle={checkHandle} />
            })}
          </div>
        </TodoWrapper>
      </section>
    </div>
  );
}
