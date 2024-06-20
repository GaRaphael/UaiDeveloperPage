'use client';

import Link from 'next/link';
import terno from '../../../public/image/terno_classico.jpeg';
import blazer from '../../../public/image/blazer.jpeg';
import colete from '../../../public/image/colete.jpg';
import vestido from '../../../public/image/vestido.jpeg';
import terninho from '../../../public/image/Terninho.jpeg';
import blacktie from '../../../public/image/black_tie.jpeg';
import { Footer, Navbar } from "../../components";

interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
}

const productData: Product[] = [
    {
        id: 1,
        name: 'Terno Clássico',
        image: terno.src,
        price: 'R$ 100,00',
    },
    {
        id: 2,
        name: 'Blazer',
        image: blazer.src,
        price: 'R$ 150,00',
    },
    {
        id: 3,
        name: 'Colete',
        image: colete.src,
        price: 'R$ 150,00',
    },
    {
        id: 4,
        name: 'Vestido',
        image: vestido.src,
        price: 'R$ 150,00',
    },
    {
        id: 5,
        name: 'Terninho',
        image: terninho.src,
        price: 'R$ 150,00',
    },
    {
        id: 6,
        name: 'Black Tie',
        image: blacktie.src,
        price: 'R$ 150,00',
    },
];

const ProductListPage = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Lista de Produtos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData.map(product => (
            <Link key={product.id} href={`/product/${product.id}`} legacyBehavior>
              <a className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-700">{product.price}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    );
  };

export default ProductListPage;