import React from 'react';
import Counter from "./Counter";
import Name from "./Name";

//ストアを作成するやつの使用。
import { createStore, combineReducers } from "redux";

//storeを他のコンポーネントに渡すために必要。
import { Provider } from "react-redux";


// ストアの初期設定になるリデューサの設定
function counterReducer(state = {count : 0}, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + 1
      }
    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

const nameReducer = (state = {name :""}, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }

}

const rootReducer = combineReducers({
  counterReducer,
  nameReducer
})


//最初のストアを定義
const INITIAL_STATE = {
  // count: 0
}

// ストアを作成する。りでゅーさと初期のステートを作成する。
const store = createStore(rootReducer, INITIAL_STATE)

const App = () => {
  return (
    // プロバイダを使用してstoreを渡す
    <Provider store={store}>
      <Counter />
      <Name></Name>
    </Provider>
  )
}


export default App;
