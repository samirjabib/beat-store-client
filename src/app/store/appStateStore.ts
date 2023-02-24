import { create } from "zustand";

interface NavBarStore {
  navBarState: boolean;
  onHandleNavBar: (by: boolean) => void;
}

export const useNavBarStore = create<NavBarStore>()((set) => ({
  navBarState: false,
  onHandleNavBar: (boolean) => set((state) => ({ navBarState: boolean })),
}));
