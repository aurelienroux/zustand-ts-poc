import { create } from "zustand";
import { devtools } from 'zustand/middleware'

export interface CounterState {
  count: number,
  title: string,
  incrementCounter: () => void,
  decrementCounter: () => void
}

export const useCounterStoreDevtools = create<CounterState, [["zustand/devtools", CounterState]]>(
  devtools(
    set => ({
      count: 13,
      title: 'Le Counter',
      incrementCounter: () => set(state => ({ count: state.count + 1 })),
      decrementCounter: () => set(state => ({ count: state.count - 1 }))
    })
  )
);