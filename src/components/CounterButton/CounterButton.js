import React from 'react'
import {createStore, createApi} from 'effector'
import { useStore } from 'effector-react'

export const counterClickStore = createStore(0);

const {increment, decrement} = createApi(counterClickStore, {
    increment: (state, payload = 1) => state + payload > 666 ? 666 : state + payload,
    decrement: state => state - 1,
})

export const Counter = () => {
    const state = useStore(counterClickStore)
    return (
        <div>
      {state}
      <button onClick={() => increment(Math.random() * 1000 ^ 0)}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
};