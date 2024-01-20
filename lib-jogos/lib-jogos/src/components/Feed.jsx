import styles from "../components/Feed.module.css"
import { useState } from "react"

export default function Feed(){
  const [comments, setComments] = useState([])
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newComent = {
      id: Math.floor(Math.random() * 1000 ),
      author: author,
      content: content,
      createDt: new Date()
    }
    setComments(state => [newComent, ...state])
    setAuthor("")
    setContent("")
  }

  return (


    <div id={styles.app}>
      <h2>seção de comentarios</h2>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input 
        type="text" 
        id="author" 
        required 
        value={author}
        onChange={(e)=> setAuthor(e.target.value)}
        />
        <label htmlFor="content">Comentario</label>
        <textarea 
        id="content"
         cols="30"
          rows="6"
          value={content}
          onChange={(e)=> setContent(e.target.value)}
          ></textarea>
        <button>Enviar comentario</button>
      </form>

      <hr />
      
      <section id="coments">
        {comments.length > 0
        ? (
          comments.map((coment) => (
            <div key={coment.id} >
              <h3>{coment.author}</h3>
              <span>em {coment.createDt.toLocaleString()}</span>
              <p>{coment.content}</p>
            </div>
          )))
          : (
            <p>pseja o primeiro a comentar</p>
          )
        
        }
      </section>
    </div>

  )
}