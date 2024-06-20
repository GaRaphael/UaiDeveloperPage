'use client';
import React, { useState, useEffect } from 'react';
import { useCart, CartItem } from '../../context/cartContext';
import Notification from '../notification/notification';  // Ajuste o caminho conforme necessário

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface Props {
  products: Product[];
}

const ProductCard: React.FC<Props> = ({ products }) => {
  const { addToCart } = useCart();

  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: { color: string, size: string, quantity: number } }>({});
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleAddToCart = (product: Product) => {
    const options = selectedOptions[product.id];
    if (!options || !options.color || !options.size) {
      alert('Por favor, selecione a cor e o tamanho.');
      return;
    }
    const uniqueKey = `${product.id}-${options.color}-${options.size}`;
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      image: { src: product.image, alt: product.name },
      price: parseFloat(product.price.replace('R$', '').replace(',', '.')),
      quantity: options.quantity,
      color: options.color,
      size: options.size,
      uniqueKey, // Atribuindo a chave única
    };
    addToCart(cartItem);
    setNotification({ message: 'Item adicionado ao carrinho com sucesso!', type: 'success' });
  };

  const handleOptionChange = (productId: number, option: 'color' | 'size' | 'quantity', value: string | number) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [productId]: {
        ...prevOptions[productId],
        [option]: value,
      },
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
      {notification && (
        <Notification message={notification.message} type={notification.type} onClose={() => setNotification(null)} />
      )}
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <div className="mt-4">
              <label htmlFor={`color-${product.id}`} className="block text-sm font-medium text-gray-700">Cor</label>
              <select
                id={`color-${product.id}`}
                name="color"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={(e) => handleOptionChange(product.id, 'color', e.target.value)}
              >
                <option value="">Selecione a cor</option>
                <option value="Preto">Preto</option>
                <option value="Branco">Branco</option>
                <option value="Vermelho">Vermelho</option>
                <option value="Azul">Azul</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor={`size-${product.id}`} className="block text-sm font-medium text-gray-700">Tamanho</label>
              <select
                id={`size-${product.id}`}
                name="size"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={(e) => handleOptionChange(product.id, 'size', e.target.value)}
              >
                <option value="">Selecione o tamanho</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor={`quantity-${product.id}`} className="block text-sm font-medium text-gray-700">Quantidade</label>
              <input
                type="number"
                id={`quantity-${product.id}`}
                name="quantity"
                value={selectedOptions[product.id]?.quantity || 1}
                onChange={(e) => handleOptionChange(product.id, 'quantity', parseInt(e.target.value))}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                min="1"
              />
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="block bg-blue-500 text-white text-center px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors duration-300"
            >
              Comprar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
