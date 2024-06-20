"use client"; // Certifique-se de que essa linha está presente

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

// Define a estrutura de um item no carrinho
export interface CartItem {
  id: number;
  name: string;
  image: { src: string; alt: string };
  price: number;
  quantity: number;
  color: string;
  size: string;
  uniqueKey: string; //
}

// Define a estrutura do estado do carrinho
interface CartState {
  cart: CartItem[];
}

// Define a estrutura das ações possíveis no carrinho
type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'LOAD_CART'; payload: CartItem[] };

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
    case 'LOAD_CART':
      return { ...state, cart: action.payload };
    default:
      return state;
  }
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
  const [state, dispatch] = useReducer(cartReducer, {
    cart: typeof window !== "undefined" && localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : [],
  });

  // Salva o carrinho no localStorage sempre que ele é atualizado
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

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
