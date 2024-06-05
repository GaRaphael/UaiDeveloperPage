"use client";
import React, { useEffect, useState } from 'react';
// import ProductCard, { ColorList, SizeList } from './productCard';
import api from '../../../../api/api';
import ModalProductPant from './modalProductFeminia';
import ProductCardPant from '../acessorios/productCardAccessories';


const AllProductPant: React.FC<any> = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await api.get('/pant/all');
                const data = response.data;
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };

        getProducts();
    }, []);

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '150px' }}>
                <div style={{ margin: '50px' }}>
                    <ModalProductPant />
                </div>
                <ProductCardPant products={products} />
            </div>

        </>
    );
}

export default AllProductPant;