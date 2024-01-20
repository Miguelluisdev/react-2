// Task.jsx
// eslint-disable-next-line react/prop-types
const Task = ({ task, onDelete , onToggleDone }) => {
  return (
    <li>
      <span onClick={onToggleDone} style={{textDecoration: task.done ? "line-through" : "none"}}   >{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Remover</button>
    </li>
  );
};

export default Task;
