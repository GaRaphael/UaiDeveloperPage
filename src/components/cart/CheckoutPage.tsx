"use client"; // Adicione esta linha no início do arquivo

import React, { useState } from "react";
import { useCart } from "../../context/cartContext";

const CheckoutPage = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    console.log("Form Data Submitted:", formData);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        {cart.length === 0 ? (
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio.</h2>
            <a href="/" className="text-blue-500 hover:underline">Continuar Comprando</a>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 bg-white p-6 rounded shadow-md mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Itens no Carrinho</h2>
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
                  {item.image && item.image.src ? (
                    <img src={item.image.src} alt={item.image.alt || 'Imagem do item'} className="w-16 h-16 object-cover rounded" />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-400">Sem Imagem</span>
                    </div>
                  )}
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Preço: R${item.price.toFixed(2)}</p>
                    <p className="text-gray-600">Quantidade: {item.quantity}</p>
                    <p className="text-gray-600">Tamanho: {item.size}</p>
                    <p className="text-gray-600">Cor: {item.color}</p>
                  </div>
                </div>
              ))}
              <div className="text-right font-bold text-xl mt-4">
                Total: R${getTotalPrice()}
              </div>
            </div>
            <div className="md:w-1/3 md:ml-6 bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold mb-4">Informações de Pagamento</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">Primeiro Nome</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">Último Nome</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">Estado</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">CEP</label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Confirmar Compra
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CheckoutPage;
