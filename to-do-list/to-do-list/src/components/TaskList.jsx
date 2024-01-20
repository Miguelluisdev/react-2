// TaskList.jsx
import Task from './Task';

// eslint-disable-next-line react/prop-types
const TaskList = ({ tasks, onDeleteTask, onToggleDone }) => {
  
  if (tasks.length === 0){
    return "não há tarefas"
  }

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDeleteTask} onToggleDone={onToggleDone} />
      ))}

    </ul>
  );
};

export default TaskList;
