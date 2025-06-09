// store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export interface Product {
  id: number;
  description: string;
  title: string;
  price: number;
  discountPrice?: number;
  image: string;
  quantity?: number;
  itemCount: number; // Optional, used for products with multiple items
  variantId?: number; // Optional variant ID for products with variants
  variants?: {  
    id: number;
    optionValues: { id: number; value: string; optionName: string }[];
    price: number;
    stock?: number;
    media?: { url: string }[];
  }[];
}

export interface CartItem {
  itemId: number;
  variantId?: number; // Optional variant ID for products with variants 
}

export interface CartState {
  items: Product[];
}

export const initialState: CartState = {
  items: [],
};

export const productCartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      console.log("Adding to cart:", action.payload);
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.variantId === action.payload.variantId
      );
      
      let maximumItemCount = action.payload.variants?.find(
        (variant) => variant.id === action.payload.variantId
      )?.stock ?? 5;
       // Default to 5 if no stock is defined
      let currentMaximumItemCount = maximumItemCount - (existing?.itemCount || 0);
      
      console.log("Current maximum item count cart:", currentMaximumItemCount);
      let countTobeAdded = 0;
      if (action.payload.itemCount <= currentMaximumItemCount){
        console.log("Item count is within the maximum limit.");
         countTobeAdded = action.payload.itemCount;
      }else {
        toast.error("Item count exceeds maximum limit.");
        return
      }

      if (countTobeAdded >= 0) {
        if (existing) {
          existing.itemCount = (existing.itemCount ?? 0) + countTobeAdded;
        } else {
          state.items.push({
            ...action.payload,
            itemCount: countTobeAdded ?? 1,
          });
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.itemId || item.variantId !== action.payload.variantId);
    },
    clearCart: (state) => {
      state.items = [];
    },
    incrementQuantity: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.itemId && item.variantId === action.payload.variantId);
      if (item) {
        //check the current stock of the product
        if (item.variants && item.variants.length > 0) {
          const variant = item.variants.find((variant) => variant.id === action.payload.variantId);
          if (variant && variant.stock && item.itemCount && item.itemCount >= variant.stock) {
            return; // Do not increment if stock is insufficient
          }
        }
        item.itemCount = (item.itemCount || 1) + 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.itemId && item.variantId === action.payload.variantId);
      if (item && item.itemCount && item.itemCount > 1) {
        item.itemCount -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.itemId && item.variantId !== action.payload.variantId);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = productCartSlice.actions;
