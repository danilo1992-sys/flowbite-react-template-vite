import { create } from 'zustand';

interface AppState {
  pageState: 'upload' | 'loading' | 'download';
  setPageState: (state: 'upload' | 'loading' | 'download') => void;
}

export const useAppStore = create<AppState>((set) => ({
  pageState: 'upload',
  setPageState: (state) => set({ pageState: state }),
}));
