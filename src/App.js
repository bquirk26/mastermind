import { useState } from 'react'
import Guess from './components/Guess'
import { ALL_POSSIBLE_CODES, adversarialPrune, toInts } from './logic/gamelogic'
import Input from './components/Input'

const App = () => {
  const [guessVal, setGuess] = useState('')
  const [previousGuesses, appendGuess] = useState(new Map())
  const [codes, setCodes] = useState(ALL_POSSIBLE_CODES)

  const handleGuess = (event) => {
    let guess = event.target.value
    setGuess(guess)
  }

  const handleDot = (event) => {
    let val = event.target.id
    console.log(val)
  }
  const arr = [1, 2, 3, 4]

  const toIntArray = (s) => {
    let chars = s.split('')
    let ints = chars.map((char) => Number(char))
    return ints
  }

  const makeGuess = (event) => {
    event.preventDefault()
    let a = toInts(guessVal);
    console.log(a);
    let prune = adversarialPrune(toInts(guessVal), codes)
    let hint = prune.hint
    let newMap = new Map(previousGuesses);
    newMap.set(guessVal, hint);
    appendGuess(newMap)
    console.log(hint)
    setCodes(prune.arr)
    setGuess('')

  }

  return (
    <div>
        <h1>Mastermind</h1>
        <table>
          <tbody>
            <tr key = 'a'><td>Guess</td><td>Result</td></tr>
              {[... previousGuesses.keys()].map( (key) =><tr key = {key}><td>{key}</td><td>{previousGuesses.get(key)}</td><td><Guess guess = {toIntArray(key)}></Guess></td></tr>)}
          </tbody>
        </table>

        
        <form onSubmit = {makeGuess}>
          <div>guess: <input value = {guessVal} onChange = {handleGuess}></input></div>
        </form>
        <Input handler = {handleDot}></Input>
    </div>
  ) 
}

export default App