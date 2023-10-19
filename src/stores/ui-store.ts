import { create } from 'zustand'

interface UiState {
    workItemImageHeight: number
    setWorkItemImageHeight: (value: number) => void
}

export const useUiStore = create<UiState>()((set) => ({
    workItemImageHeight: 0,
    setWorkItemImageHeight: value => set({ workItemImageHeight: value })
}))