import { useState } from 'react'
import Guess from './components/Guess'
import { ALL_POSSIBLE_CODES, adversarialPrune, toInts } from './logic/gamelogic'
import Input from './components/Input'
import Result from './components/Result'

/**
 * TODO:
 * add display for current guess 
 * add on input click
 * add delete
 * response pins
 * alternate gamemode
 * Knuth alg?
 * fix something with eval? Or maybe was cause of update
 * 
 */

const EMPTY_ARR = [0, 0, 0, 0]

const App = () => {
  const [guessVal, setGuess] = useState('')
  const [previousGuesses, appendGuess] = useState(new Map())
  const [codes, setCodes] = useState(ALL_POSSIBLE_CODES)
  const [currentGuess, setCurrent] = useState(EMPTY_ARR)
  const [index, setIndex] = useState(0)

  const handleGuess = (event) => {
    let guess = event.target.value
    setGuess(guess)
  }

  const handleDot = (event) => {
    if (index > 3) {return}
    let val = event.target.id
    let newarr = [...currentGuess]
    newarr[index] = Number(val)
    setIndex(index + 1)
    setCurrent(newarr)
  }

  const deleteDot = () => {
    let x = [...currentGuess]
    x[index - 1] = 0 
    setIndex(index - 1)
    setCurrent(x)
  }

  const reset = () => {
    setCurrent(EMPTY_ARR)
    setIndex(0)
  }

  const toIntArray = (s) => {
    let chars = s.split('')
    let ints = chars.map((char) => Number(char))
    return ints
  }

  const guessToInts = (s) => {
    let a = Number(s.charAt(0))
    let b = Number(s.charAt(2))
    return [a, b]
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
    setIndex(0)
  }

  const make2 = (event) => {
    if (index != 4) {return}
    event.preventDefault()
    let prune = adversarialPrune(currentGuess, codes)
    let hint = prune.hint
    let newMap = new Map(previousGuesses);
    newMap.set(currentGuess, hint);
    appendGuess(newMap)
    console.log(hint)
    setCodes(prune.arr)
    setCurrent(EMPTY_ARR)
    setIndex(0)
  }

  return (
    <div id = "main">
      <h1>Mastermind</h1>
      <div id = "player">
        <table id = "table">
          <tbody id = "guesses">
              {[... previousGuesses.keys()].map( (key) =><tr class = "fullRes"key = {key}><td><Guess guess = {key}></Guess></td>
              <td><Result result = {guessToInts(previousGuesses.get(key))}></Result></td>
              </tr>)}
            <tr><td><Guess guess = {currentGuess}></Guess></td><td><Result result = {[0, 0]}></Result></td></tr>
          </tbody>
        </table>
        <div id = "input">
          <Input handler = {handleDot}></Input>
          <div id = "buttons">
              <div id = "reset-delete"> 
                <button onClick = {deleteDot}>⌫</button>
                <button onClick = {reset}>⟲</button>
              </div>
              <button id = "enter" onClick = {make2}>enter</button>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default App