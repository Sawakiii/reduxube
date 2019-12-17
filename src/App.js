import React from 'react';
import Counter from "./Counter"

//ストアを作成するやつの使用。
import { createStore } from "redux";

//storeを他のコンポーネントに渡すために必要。
import { Provider } from "react-redux";


// ストアの初期設定になるリデューサの設定
function reducer(state, action) {
  return state
}

//最初のストアを定義
const INITIAL_STATE = {
  count: 0
}

// ストアを作成する。りでゅーさと初期のステートを作成する。
const store = createStore(reducer, INITIAL_STATE)

const App = () => {
  return (
    // プロバイダを使用してstoreを渡す
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}


export default App;
