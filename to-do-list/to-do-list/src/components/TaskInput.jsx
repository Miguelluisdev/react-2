import { useState } from "react"


// eslint-disable-next-line react/prop-types
const TaskInput = ({onAddTask}) => {
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    if (input.trim()){
      onAddTask(input)
      setInput(input)

    }
  }
  return (
    <form onSubmit={handleSubmit} >
      <input
       type="text"
       value={input}
        placeholder="Adicione uma nova tarefa"
        onChange={(e)=> setInput(e.target.value)}
       />
      <button type="submit"   >Enviar Tarefa</button>
    </form>
  )
}

export default TaskInput