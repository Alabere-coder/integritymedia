import { create } from "zustand"

interface AppLoadedState {
  hasLoaded: boolean
  markLoaded: () => void
}

export const useAppLoaded = create<AppLoadedState>((set) => ({
  hasLoaded: false,
  markLoaded: () => set({ hasLoaded: true }),
}))