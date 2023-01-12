import React, { Component } from 'react';
import { useState } from 'react';
import FilterButton from './FilterButton';
import Form from './Form';
import TaskItem from './TaskItem';

function App (props) {
  const [tasks, setTasks] = useState(props.tasks);
  // HAVE TO DESTRUCT ELS AS ABOVE, BELOW EXAMPLE DOES NOT WORK
  // const tasks = useState(props.tasks.tasks);
  // const setTasks = useState(props.tasks.setTasks);

  function addTask (name) {
    let newID;
    tasks.length ? newID = tasks.length : newID = 0;
    const newTask = {
      id: 'task-' + newID, name, completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const taskCount = `${taskList.length} tasks remaining`;
  // console.log(props);
  // [{},{}]
  // iterate into props.tasks
    // iterate over each obj
  const taskList = tasks.map((task) => (
      <TaskItem 
        id={task.id} 
        name={task.name} 
        completed={task.completed} 
        key={task.id}
      />
    )
  );

  return (
    <div className="todoapp stack-large">
      <h1>Tasks on Deck</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading"> {taskCount} </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      
      </ul>
    </div>
  );
};


export default App;

// class App extends Component {
//   constructor () {
//     super ();
//     this.state = {
//       tasks : [],
//       completed: []
//     };
//   };
//   const [input, setInput] = useState("");
//   const [todoList, setTodoList] = useState([]);
//   const [completedTaskCount, setCompletedTaskCount] = useState(0);

//   const handleClick = () => {
//     const id = todoList.length + 1;
//     setTodoList((prev) => [
//       ...prev,
//       {
//         id: id,
//         task: input,
//         complete: false,
//       },
//     ]);
//     setInput("");
//   };

//   render() {
//     return (
//       <div className='App'>
//         <Container>
//           <div>
//               <h2>Todo List</h2>
//               <Text value={ input } onInput={ e => setInput(e.target.value) }/>
//               <Button onClick={ ()=> handleClick() }>Let's do this!</Button>
//             <Tasks>
//               <TaskCount>
//                 <b>Pending Tasks</b> 
//               </TaskCount>
//               <TaskCount>
//                 <b>Completed Tasks</b>
//               </TaskCount>
//             </Tasks>
//             <div>
//               <ul>
//                 {todoList.map((todo) => {
//                   return (
//                     <LIST
//                       complete={todo.complete}
//                       id={todo.id}
//                       onClick={() => handleComplete(todo.id)}
//                       style={{
//                         listStyle: "none",
//                         textDecoration: todo.complete && "line-through",
//                       }}
//                       >
//                       {todo.task}
//                     </LIST>
//                   );
//                 })}
//               </ul>
//             </div>
//             <Button>Forget it</Button>
//           </div>
//         </Container>
//       </div>
//     )
//   }
// }

