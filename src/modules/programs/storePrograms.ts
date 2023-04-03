import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface IProgram { 
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface IProgramsState {
  programs: IProgram[],
  fetchPrograms: () => void
}

export const useProgramsStore = create<IProgramsState, [['zustand/devtools', IProgramsState]]>(
  devtools(
    set => ({
      programs: [],
      fetchPrograms: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')

        set({ programs: await response.json() }, false, 'set programs')
      }
    }), { name: 'programsStore' }
  )
);