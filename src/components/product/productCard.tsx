"use client";

import { Inter } from 'next/font/google';
import ModalProductCategories from '../modals/categories/modalProductCategories';

interface Product {
    model: string;
    image: any;
    price: string;
    size: string;
    color: string;
    composition: string;
    description: string;
}

interface Props {
    products: Product[];
}

// const ColorList: React.FC<any> = ({ products }) => {

//     return (
//         <div>
//             <hr style={{
//                 border: '1px solid #454545',
//                 width: '350px',
//                 marginTop: '70px',
//             }} />

//             <h2 style={{
//                 marginTop: '10px',
//                 fontSize: '23px',
//                 fontWeight: '400',
//                 textAlign: 'start',
//                 fontFamily: 'Inter',
//                 marginBottom: '30px',
//             }}>
//                 Cor
//             </h2>

//             <div style={{
//                 display: 'flex',
//                 flexWrap: 'wrap',
//             }}>
//                 {products?.map((color: any, index: any) => (
//                     <div key={index}
//                         style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             marginBottom: '10px',
//                             marginRight: '10px',
//                         }}>
//                         <div style={{
//                             width: '40px',
//                             height: '40px',
//                             borderRadius: '50%',
//                             backgroundColor: color,
//                             border: '1px solid #D1D1D1'
//                         }}>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// const SizeList: React.FC<any> = ({ product }) => {
//     return (
//         <div>
//             <hr style={{
//                 border: '1px solid #454545',
//                 width: '350px',
//                 marginTop: '50px',
//                 marginBottom: '10px'
//             }} />

//             <h2 style={{
//                 marginTop: '10px',
//                 fontSize: '23px',
//                 fontWeight: '400',
//                 textAlign: 'start',
//                 fontFamily: 'Inter',
//                 marginBottom: '30px'
//             }}>
//                 Tamanho
//             </h2>

//             <div style={{
//                 display: 'flex'
//             }}>
//                 {product?.map((size: any, index: any) => (
//                     <div key={index}
//                         style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             borderRadius: '25%',
//                             margin: '5px',
//                             width: '50px',
//                             height: '50px',
//                             border: '1px solid gray',
//                             textAlign: 'center',
//                         }}>
//                         {size}
//                     </div>
//                 ))}
//             </div>

//             <hr style={{
//                 border: '1px solid #454545',
//                 width: '350px',
//                 marginTop: '50px',
//                 marginBottom: '10px'
//             }} />

//             <button style={{
//                 marginTop: '50px',
//                 width: '300px',
//                 padding: '10px',
//                 backgroundColor: '#1C1C1C',
//                 color: 'white',
//                 fontWeight: 'bold',
//                 borderRadius: '4px',
//                 cursor: 'pointer'
//             }}>
//                 Filtrar
//             </button>

//         </div>
//     );
// };

// export { ColorList, SizeList };

const ProductSizeBalls: React.FC<{ sizes: string }> = ({ sizes }) => {
    // Dividindo a string de tamanhos em um array
    const sizeArray = sizes.split(',').map((size) => size.trim());

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            {/* Mapeando o array de tamanhos e renderizando uma bola para cada tamanho */}
            {sizeArray.map((size, index) => (
                <div
                    key={index}
                    style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        backgroundColor: '#F6F6F6',
                        border: '1px solid #D1D1D1',
                        textAlign: 'center',
                        lineHeight: '40px',
                        margin: '5px',
                        marginBottom: '10px',
                    }}
                >
                    {size}
                </div>
            ))}
        </div>
    );
};

const ProductCard: React.FC<Props> = ({ products }) => {
    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {products?.map((product, index) => (
                    <div key={index} style={{ borderRadius: '8px', width: '300px', margin: '30px', padding: '16px', backgroundColor: '#F6F6F6' }}>

                        <img src={product.image} alt={product.model} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />

                        <div style={{ padding: '10px 0', textAlign: 'center' }}>

                            <h3 style={{
                                fontFamily: "Inter",
                                fontSize: '23px',
                                fontWeight: '600',
                            }}>{product.model}</h3>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: product.color, margin: '5px', border: '1px solid #D1D1D1' }} />
                            </div>

                            <ProductSizeBalls sizes={product.size} />

                            <p style={{
                                fontFamily: "Inter",
                                fontSize: '16px',
                                fontWeight: '300',
                            }}>{product.composition}</p>

                            <p style={{
                                fontFamily: "Inter",
                                fontSize: '20px',
                                fontWeight: 'bold',
                            }}>
                                {`R$ ${product.price}`}
                            </p>

                            <button onClick={() => window.location.href = '/product'} style={{ backgroundColor: '#1C1C1C', color: 'white', fontWeight: 'bold', borderRadius: '4px', border: 'none', padding: '10px 20px', cursor: 'pointer', marginTop: '10px', width: '100%' }}>Comprar</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductCard;


