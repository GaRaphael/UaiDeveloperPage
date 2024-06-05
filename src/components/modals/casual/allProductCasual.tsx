"use client";
import React, { useEffect, useState } from 'react';
import api from '../../../../api/api';
import ModalProductPant from '../calca/modalProductFeminia';
import ProductCardCasual from './productCardCasual';


const AllProductCategories: React.FC<any> = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await api.get('/suit/all');
                const data = response.data;
                setProducts(data);
            } catch (error) {
                console.error(error);
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
                <ProductCardCasual products={products} />
            </div>

        </>
    );
}

export default AllProductCategories;