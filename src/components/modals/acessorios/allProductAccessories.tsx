"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from './productCardAccessories';
import api from '../../../../api/api';
import ModalProductAccessories from './modalProductAccessories';


const AllProductAccessories: React.FC<any> = () => {
    const [products, setProducts] = useState<any[]>([]);


    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await api.get('/accessories/all');
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
                    <ModalProductAccessories/>
                </div>
                <ProductCard products={products} />
            </div>

        </>
    );
}

export default AllProductAccessories;