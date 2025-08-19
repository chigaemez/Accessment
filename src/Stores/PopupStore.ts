import { create } from "zustand";
import type { PopupState } from "../Data/Type";

export const usePopupStore = create<PopupState>((set) => ({
  isOpen: false,
  openPopup: () => set({ isOpen: true }),
  closePopup: () => set({ isOpen: false }),
  togglePopup: () => set((state) => ({ isOpen: !state.isOpen })),
}));