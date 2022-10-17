import { useState } from 'react'
import { ALL_POSSIBLE_CODES, adversarialPrune, toInts } from './logic/gamelogic'

const App = () => {
  const [guessVal, setGuess] = useState('')
  const [previousGuesses, appendGuess] = useState([])
  const [codes, setCodes] = useState(ALL_POSSIBLE_CODES)

  const handleGuess = (event) => {
    let guess = event.target.value
    setGuess(guess)
  }


  const makeGuess = (event) => {
    event.preventDefault()
    appendGuess(previousGuesses.concat(guessVal))
    let a = toInts(guessVal);
    console.log(a);
    let prune = adversarialPrune(toInts(guessVal), codes)
    let hint = prune.hint
    console.log(hint)
    setCodes(prune.arr)
    setGuess('')

  }

  return (
    <div>
        <h1>Mastermind</h1>
        <table>
          <tbody>
            <tr><td>Guess</td><td>Result</td></tr>
              {previousGuesses.map((guess) =><tr><td>{guess}</td> <td>DDII</td></tr>)}
          </tbody>
        </table>

        
        <form onSubmit = {makeGuess}>
          <div>guess: <input value = {guessVal} onChange = {handleGuess}></input></div>
        </form>
    </div>
  ) 
}

export default App