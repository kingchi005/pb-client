import { create } from 'zustand'




interface Store {
    user: boolean
}



export const useStore = create<Store>((set) => ({
  user: true,
 
}))