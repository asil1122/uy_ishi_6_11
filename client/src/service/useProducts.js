import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProducts = create(
    persist(
        (set) => ({
            data: [],
            addProduct: (newData) =>
                set((state) => ({ data: [...state.data, newData] })),
        }),
        { name: "products" }
    )
);
