import { createStore } from 'redux'

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

const store = createStore(counter)
/////// Checking our work

store.subscribe(() => {
  console.log(store.getState())
  console.log("State Weeeeeee")
})

store.dispatch({type: "INCREMENT"})
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "DECREMENT"})
store.dispatch({type: "BANANA"})
store.dispatch({type: "DECREMENT"})
