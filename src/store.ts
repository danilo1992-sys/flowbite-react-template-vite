import { create } from "zustand";

interface State {
  pageState: 'upload' | 'loading' | 'download';
  setState: (state: 'upload' | 'loading' | 'download') => void
}

export const useState = create<State>((set) => ({
  pageState: 'upload',
  setState: (state) => set({ pageState: state })
}));
