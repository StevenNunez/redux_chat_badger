import { createStore } from 'redux'

function beef(state=""){ 
  return `${state} BEEEF`
}
const store = createStore(beef)
store.subscribe(() => {
  console.log("This is being called in a subscribe")
  console.log("The current state is ", store.getState())
})

let action = {type: "LALALALA"}
store.dispatch(action)
store.dispatch(action)
store.dispatch(action)
store.dispatch(action)
