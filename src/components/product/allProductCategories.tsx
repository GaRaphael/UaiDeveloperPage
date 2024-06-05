"use client";
import React, { useEffect, useState } from 'react';
// import ProductCard, { ColorList, SizeList } from './productCard';
import ProductCard from './productCard';
import api from '../../../api/api';
import showNotification from '../extras/showNotification';
import ModalProductCategories from '../modals/categories/modalProductCategories';


const AllProductCategories: React.FC<any> = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await api.get('/suit/all');
                const data = response.data;
                setProducts(data);
            } catch (error) {
                showNotification('Atenção', 'Erro ao buscar dados', 'danger');
            }
        };

        getProducts();
    }, []);

    console.log(products);

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '150px'}}>
                <div style={{ margin: '50px'}}>
                    <ModalProductCategories />
                </div>
                <ProductCard products={products} />
            </div>

        </>
    );
}

export default AllProductCategories;