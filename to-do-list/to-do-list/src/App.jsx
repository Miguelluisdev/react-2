// App.jsx
import { useState , useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);


useEffect(()=>{

    localStorage.setItem("tasks" , JSON.stringify(tasks));

  }, [tasks]);


  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);
    localStorage.setItem("tasks", JSON.stringify(tasks))
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    localStorage.removeItem("tasks")
  };

  const toggleTaskDone = (taskId) => {
    setTasks(
      tasks.map(
        (task) => task.id === taskId ? {...task , done: !task.done } : task
      ))
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={removeTask} onToggleDone={toggleTaskDone} />
    </>
  );
}

export default App;
