const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

let initialState = {
  currentValue: 0
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case INCREMENT:
      return{...state, currentValue: state.currentValue + action.payload}
    case DECREMENT:
      return{...state, currentValue: state.currentValue - action.payload}
    default:
      return state
  }
}

export function increment(num){
  return {
    type: INCREMENT,
    payload: num
  }
}

export function decrement(num){
  return {
    type: DECREMENT,
    payload: num
  }
}