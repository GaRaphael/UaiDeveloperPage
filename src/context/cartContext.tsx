"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define a estrutura de um item no carrinho
export interface CartItem {
  id: number;
  name: string;
  image: { src: string; alt: string };
  price: number;
  quantity: number;
  color: string;
  size: string;
}

// Define a estrutura do estado do carrinho
interface CartState {
  cart: CartItem[];
}

// Define a estrutura das ações possíveis no carrinho
type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } };

// Função de redução para atualizar o estado do carrinho com base nas ações
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

// Estado inicial do carrinho
const initialCartState: CartState = {
  cart: [],
};

// Cria o contexto do carrinho
const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}>({
  cart: [], // Inicializa com o carrinho vazio
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

// Provedor do contexto do carrinho
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (item: CartItem) => dispatch({ type: 'ADD_TO_CART', payload: item });
  const removeFromCart = (id: number) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  const updateQuantity = (id: number, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });

  return (
    <CartContext.Provider value={{ cart: state.cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar o contexto do carrinho
export const useCart = () => useContext(CartContext);
