import { useState } from 'react';
import Feed from './components/feed';
import './App.css';

function App() {
  const [games, setGames] = useState(()=> {
    const storedGames = localStorage.getItem("game-list")
    if (!storedGames) return []
    const gameArray = JSON.parse(storedGames)
    return gameArray
  });
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const addGame = (title, cover) => {
    const id = Math.floor(Math.random() * 10000);
    const game = { id, title, cover };

    setGames((state) =>{ 
    const newState = [...state, game]
    localStorage.setItem("game-list" , JSON.stringify(newState))
    return newState

    });

  };


  const removeGame = (id) => {
    setGames(state => {

   const newState = state.filter(game => game.id !== id)
      localStorage.setItem("game-list", JSON.stringify(newState))
      return newState
      })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame(title, cover); // Passando title e cover para addGame
    setCover("");
    setTitle("");
  };

  return (
    <div className='app'>
      <h1>Biblioteca de jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Titulo:</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='cover'>Capa:</label>
          <input
            type='text'
            name='cover'
            id='cover'
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            placeholder='url da imagem'
          />
        </div>
        <button type='submit'>Adicionar à biblioteca</button>
      </form>
      <div className='games'>
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt='' />
            <h2>{game.title}</h2>
            <button onClick={() => removeGame(game.id)} >Remover</button>
          </div>
        ))}
      </div>
      < Feed/>
    </div>
  );
}

export default App;
