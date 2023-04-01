import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface Program { 
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface ProgramsState {
  programs: Program[],
  fetchPrograms: () => void
}

export const useProgramsStore = create<ProgramsState, [['zustand/devtools', ProgramsState]]>(
  devtools(
    set => ({
      programs: [],
      fetchPrograms: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')

        set({ programs: await response.json() })
      }
    })
  )
);