import { create } from 'zustand'

interface NavBarStore {
  navBarState: boolean
  onHandleNavBar: (by: boolean) => void
}

export const useNavBarStore = create<NavBarStore>()((set) => ({
  navBarState:false,
  onHandleNavBar: (by) => set((state) => ({ navBarState: by })),
}))
