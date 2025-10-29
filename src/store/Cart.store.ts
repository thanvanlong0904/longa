import { create } from "zustand";
import type { Cart, Product } from "../types/Product.type";
import { persist, createJSONStorage } from "zustand/middleware";

type CartState = {
  items: Cart[];
  add: (product: Product, qty?: number) => void;
  setQty1: (id: number, qty: number) => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

       add: (p, qty = 1) => {
        const items = get().items;
        const found = items.find((i) => i.id === p.id);
        const safeQty = Math.max(1, Number(qty) || 1);
        if (found) {
          set({
            items: items.map((i) =>
              i.id === p.id ? { ...i, qty: i.qty + safeQty } : i
            ),
          });
        } else {
          set({
            items: [...items, { ...p, qty: safeQty }], // luôn là number
          });
        }
      },
       setQty1: (id, qty) => {
        // Lấy danh sách giỏ hàng hiện tại
        const cs = get().items;

        // Tìm sản phẩm theo id
        const ex = cs.find((i) => i.id === id);
        if (!ex) return; // nếu không tồn tại, thoát sớm

        // Kiểm tra điều kiện số lượng
        if (qty <= 0 || qty > ex.stock) return;

        // Cập nhật lại giỏ hàng
        set({
          items : cs.map((i) => (i.id === id ? { ...i, qty } : i)),
        });
      },
    }),
    {
      name: "my-store",
    }
  )
);
