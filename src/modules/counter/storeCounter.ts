import { create } from "zustand";
import { devtools } from 'zustand/middleware'

export interface ICounterState {
  count: number,
  title: string,
  incrementCounter: () => void,
  decrementCounter: () => void
}

export const useCounterStoreDevtools = create<ICounterState, [["zustand/devtools", ICounterState]]>(
  devtools(
    set => ({
      count: 13,
      title: 'Le Counter',
      incrementCounter: () => set(state => ({ count: state.count + 1 }), false, 'increment'),
      decrementCounter: () => set(state => ({ count: state.count - 1 }), false, 'decrement')
    }), { name: 'counterStore' }
  )
);