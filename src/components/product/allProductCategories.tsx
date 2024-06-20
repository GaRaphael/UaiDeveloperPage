import React from 'react';
import ProductCard from './productCard'
import terno from '../../../public/image/terno_classico.jpeg';
import blazer from '../../../public/image/blazer.jpeg';
import colete from '../../../public/image/colete.jpg';
import vestido from '../../../public/image/vestido.jpeg';
import terninho from '../../../public/image/Terninho.jpeg';
import blacktie from '../../../public/image/black_tie.jpeg';

const products = [
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

export default function AllProductCategories() {
    return (
        <div className="flex justify-center ">
            <ProductCard products={products} />
        </div>
    );
}
