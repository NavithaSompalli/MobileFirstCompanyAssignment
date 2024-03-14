// Home.js
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {IoClose} from 'react-icons/io5'
import './index.css'

const Home = () => {
  const [jokes, setJokes] = useState([])
  const [newJoke, setNewJoke] = useState(true)
  const [jokeText, setNewJokeValue] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    fetch(
      'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10',
    )
      .then(response => response.json())
      .then(data => setJokes(data.jokes))
  }, [])

  const onClickFetch = () => {
    setNewJoke(prevState => !prevState)
  }

  const onChangeJoke = event => {
    setNewJokeValue(event.target.value)
  }

  const onChangeCategory = event => {
    setCategory(event.target.value)
  }

  const onSubmitJoke = event => {
    event.preventDefault()
    const newJokeObject = {
      id: jokes.length + 1,
      joke: jokeText,
      category,
    }
    setJokes(prevJokes => [...prevJokes, newJokeObject])
    setNewJoke(true)
    setNewJokeValue('')
    setCategory('')
  }

  return (
    <div className="container">
      <h2 className="login">Jokes</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Joke</th>
              <th>Categories </th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={joke.id}>
                <td>{index + 1}</td>
                <td>{joke.joke}</td>
                <td>{joke.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="logout-btn-container">
        <button type="button" className="fetch-btn" onClick={onClickFetch}>
          Fetch Jokes
        </button>
        <Link to="/">
          <button type="button" className="logout-btn">
            Logout
          </button>
        </Link>
      </div>
      <div className={newJoke ? 'display-none' : 'joke-drop-container'}>
        <button
          type="button"
          className="close-btn"
          onClick={onClickFetch}
          aria-label="Close"
        >
          <IoClose />
        </button>
        <form onSubmit={onSubmitJoke} className="jokes-form-container">
          <h1 htmlFor="joke">Enter your Joke</h1>
          <br />
          <input
            type="text"
            id="joke"
            className="form-control"
            placeholder="Enter your Joke"
            onChange={onChangeJoke}
            value={jokeText}
          />
          <input
            type="text"
            id="joke"
            className="form-control"
            placeholder="Enter your Joke Category is"
            onChange={onChangeCategory}
            value={category}
          />

          <br />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home
