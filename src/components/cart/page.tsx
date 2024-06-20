'use client';
import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { CartItem, useCart } from "../../context/cartContext";
import Notification from "../notification/notification"; // Componente de notificação

export function ShoppingCart() {
  const [cartOpen, setCartOpen] = useState(false); // Inicialmente fechado
  const { cart, removeFromCart } = useCart();
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  function handleCartOpen() {
    setCartOpen((cur) => !cur);
  }

  function handleRemoveFromCart(itemId: number) {
    removeFromCart(itemId);
    setNotification({ message: 'Item removido do carrinho', type: 'error' });
  }

  return (
    <>
      {notification && (
        <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />
      )}
      <li className="relative">
        <button onClick={handleCartOpen} className="flex items-center">
          <ShoppingCartIcon className="h-6 w-6 text-black" />
        </button>
        {cartOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-black shadow-lg rounded-lg p-4">
            {cart.length === 0 ? (
              <p>Seu carrinho está vazio.</p>
            ) : (
              <div>
                {cart.map((item: CartItem) => (
                  <div key={item.id} className="flex justify-between items-center mb-2">
                    <img src={item.image.src} alt={item.image.alt} className="w-16 h-12 object-cover rounded" />
                    <div className="ml-2">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm">Preço: R${item.price}</p>
                      <p className="text-sm">Quantidade: {item.quantity}</p>
                      <p className="text-sm">Tamanho: {item.size}</p>
                      <p className="text-sm">Cor: {item.color}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-500 ml-4"
                    >
                      Remover
                    </button>
                  </div>
                ))}
                <button className="w-full bg-blue-500 text-white py-2 rounded">
                  <a href="/checkout">Finalizar Compras</a>
                </button>
              </div>
            )}
          </div>
        )}
      </li>
    </>
  );
}

export default ShoppingCart;
