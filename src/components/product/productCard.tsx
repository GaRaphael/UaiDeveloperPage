import React from 'react';

interface Product {
    name: string;
    image: any;
    price: string;
    sizes: string[];
    colors: { name: string; hex: string }[];
}

interface Props {
    products: Product[];
    colors: Color[];
    sizes: string[];
}


interface Color {
    name: string;
    hex: string;
}

const ColorList: React.FC<any> = ({ colors }) => {
    return (
        <div>
            <hr style={{
                border: '1px solid #454545',
                width: '350px',
                marginTop: '70px',
            }} />

            <h2 style={{
                marginTop: '10px',
                fontSize: '23px',
                fontWeight: '400',
                textAlign: 'start',
                fontFamily: 'Inter',
                marginBottom: '30px',
            }}>
                Cor
            </h2>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
            }}>
                {colors.map((color: any, index: any) => (
                    <div key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px',
                            marginRight: '10px',
                        }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: color.hex,
                            border: '1px solid #D1D1D1'
                        }}>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SizeList: React.FC<any> = ({ sizes }) => {
    return (
        <div>
            <hr style={{
                border: '1px solid #454545',
                width: '350px',
                marginTop: '50px',
                marginBottom: '10px'
            }} />

            <h2 style={{
                marginTop: '10px',
                fontSize: '23px',
                fontWeight: '400',
                textAlign: 'start',
                fontFamily: 'Inter',
                marginBottom: '30px'
            }}>
                Tamanho
            </h2>

            <div style={{
                display: 'flex'
            }}>
                {sizes.map((size: any, index: any) => (
                    <div key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '25%',
                            margin: '5px',
                            width: '50px',
                            height: '50px',
                            border: '1px solid gray',
                            textAlign: 'center',
                        }}>
                        {size}
                    </div>
                ))}
            </div>

            <hr style={{
                border: '1px solid #454545',
                width: '350px',
                marginTop: '50px',
                marginBottom: '10px'
            }} />

            <button style={{
                marginTop: '50px',
                width: '300px',
                padding: '10px',
                backgroundColor: '#1C1C1C',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: '4px',
                cursor: 'pointer'
            }}>
                Filtrar
            </button>

        </div>
    );
};

export { ColorList, SizeList };

const ProductCard: React.FC<any> = ({ products, colors, sizes }) => {

    return (

        <div style={{
            display: 'flex',
            width: '100%',
        }}>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

            <div style={{
                width: '350px',
            }}>
                <ColorList colors={colors} />
                <SizeList sizes={sizes} />
            </div>

            <div style={{
                display: 'flex',
                marginLeft: '50px',
                overflowX: 'hidden',
                flexWrap: 'wrap',
                width: '1100px',
                flex: 1
            }}>
                {products.map((product: any, index: any) => (
                    <div key={index}
                        style={{
                            borderRadius: '8px',
                            width: '300px',
                            height: '540px',
                            padding: '16px',
                            boxSizing: 'border-box',
                            backgroundColor: '#F6F6F6',
                            marginLeft: '60px',
                            marginTop: '60px',
                        }}>

                        <img src={product.image} alt={product.name}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px 8px 8px 8px'
                            }}
                        />

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginTop: '10px',
                            justifyContent: 'center'
                        }}>
                            {product.colors.map((color: any, colorIndex: any) => (
                                <div key={colorIndex}
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        backgroundColor: color.hex,
                                        margin: '5px',
                                        border: '1px solid #D1D1D1'
                                    }}
                                />
                            ))}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                marginTop: '10px',
                                justifyContent: 'center'
                            }}>
                            {product.sizes.map((size: any, sizeIndex: any) => (
                                <div key={sizeIndex}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '25%',
                                        margin: '5px',
                                        width: '40px',
                                        height: '40px',
                                        border: '1px solid #D1D1D1',
                                        textAlign: 'center',
                                    }}>
                                    <span>{size}</span>
                                </div>
                            ))}
                        </div>

                        <div
                            style={{
                                marginTop: '10px',
                                fontWeight: '400',
                                textAlign: 'center',
                                fontFamily: 'Inter'
                            }}>
                            {product.name}
                        </div>

                        <div
                            style={{
                                marginTop: '10px',
                                fontWeight: '700',
                                textAlign: 'center',
                                fontFamily: 'Inter'
                            }}>
                            {product.price}
                        </div>

                        <button style={{
                            marginTop: '10px',
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#1C1C1C',
                            color: 'white',
                            fontWeight: 'bold',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}>
                            Comprar
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
