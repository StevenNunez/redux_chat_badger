import { createStore, combineReducers, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
import React from 'react'  
import { render } from 'react-dom'
import axios from 'axios'

const counter = (state=0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

const lastStatus = (state="No action Taken", action) => {
  switch (action.type) {
    case "INCREMENT":
      return "The last action was Increment"
    case "DECREMENT":
      return "The last action was Decrement"
    default:
      return state
  }
}

const fact = (state="No Fact", action) => {
  switch (action.type) {
    case "NEW_FACT":
      return action.payload
    default:
      return state
  }

}
const rootReducer = combineReducers({ currentNumber: counter, lastStatus, fact,})
const store = createStore(
  rootReducer, 
  applyMiddleware(thunk))

// components/app.js
const App = (props) => {
  return (
    <div>
      <h1>Hack Chat!!</h1>
      <div>
        The current number is {props.currentNumber}
      </div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <div>
        The last action was: {props.lastStatus}
      </div>
      <div>
        Fact about {props.currentNumber}: {props.fact}
        <button onClick={props.getFact}>Get Fact</button>
      </div>
    </div>
  )
}

const increment = () => {
  store.dispatch({type: "INCREMENT"})
}

const decrement = () => {
  store.dispatch({type: "DECREMENT"})
}

const getFact = (number) => {
  store.dispatch((dispatch, getState()) => {
    let { currentNumber } = getState()
    axios.get(`http://numbersapi.com/${currentNumber}/math`).then(({data}) => {
      dispatch({type: "NEW_FACT", payload: data})
    })
  })
}

store.subscribe(() => {
  let { currentNumber, lastStatus, fact } = store.getState()
  render(<App 
    currentNumber={currentNumber} 
    lastStatus={lastStatus}
    fact={fact}
    increment={increment}
    decrement={decrement}
    getFact={getFact}

  />, document.querySelector(".container"))
})

store.dispatch({type: "lksjflksdjflsdkfjsdlkfjsdd"})
