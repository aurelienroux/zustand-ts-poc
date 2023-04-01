import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type IPhotos = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export type IPhotosState = {
  loading: boolean,
  error: any,
  photos: IPhotos[]
  fetchPhotos: () => void
}

export const usePhotoStore = create<IPhotosState, [["zustand/devtools", IPhotosState]]>(
  devtools(
    set => ({
      loading: false,
      error: null,
      photos: [],
      fetchPhotos: async () => {
        try {
          set({ loading: true })
          const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
          // buggy API Call to test error
          // const response = await fetch('https://jsonplaceholder.typicode.com/nothing')

          set({ photos: await response.json(), loading: false })
        } catch (error: any) {
          set({ loading: false, error: error.message })
        }
      }
    })
  )
);