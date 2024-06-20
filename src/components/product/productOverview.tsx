import ProductGallery from './productGallery'


interface Color {
    name: string;
    hex: string;
}


interface images {
    src: string;
    alt: string;
}

interface Size {
    name: string;
}

interface Props {
    name: string;
    colors: Color[];
    images: images[];
    description: string;
    price: string;
    highlights: string[];
    composition: string;
    rating: number;
    reviews: number;
    sizes: Size[];
}

export default function ProductOverview({
    name,
    colors,
    images,
    description,
    price,
    highlights,
    composition,
    rating,
    reviews,
    sizes
}: Props) {




    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

            <div className="flex">
                <div className="row">
                    <div className="col-6 ">
                        <ProductGallery images={images} />
                    </div>
                </div>
                <div className="mt-[130px]">
                    <div className=""
                        style={{
                            width: '500px',
                            display: 'flex',
                        }}>

                        <h4 style={{
                            fontSize: '50px',
                            fontWeight: 'SemiBold',
                            textAlign: 'center',
                            marginBottom: '30px',
                            fontFamily: 'Inter'
                        }}>
                            {name}
                        </h4>
                    </div>

                    <hr style={{
                        width: '500px',
                        marginBottom: '40px',
                    }} />

                    <div className="col-12 col-md-6">
                        <label
                            style={{
                                fontSize: '20px',
                                fontWeight: '600',
                                fontFamily: 'Inter'
                            }}>
                            Cor
                        </label>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                marginTop: '10px',
                            }}
                        >
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        margin: '5px',
                                        marginRight: '10px',
                                        marginBottom: '40px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                            backgroundColor: color.hex,
                                            marginRight: '10px',
                                            border: '1px solid black'
                                        }}
                                    ></div>
                                    <span>{color.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <label
                            style={{
                                fontSize: '20px',
                                fontWeight: '600',
                                fontFamily: 'Inter',
                            }}>
                            Tamanhos
                        </label>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                marginTop: '10px',
                            }}
                        >
                            {sizes.map((size, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '25%',
                                        margin: '5px',
                                        width: '40px',
                                        height: '40px',
                                        border: '1px solid gray',
                                        textAlign: 'center',
                                        backgroundColor: '#CFCFCF',

                                    }}
                                >
                                    <span>{size.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr style={{
                        width: '500px',
                        marginBottom: '30px',
                        marginTop: '40px',
                    }} />

                    <p
                        style={{
                            fontSize: '24px',
                            fontWeight: '700',
                            marginBottom: '30px',
                            marginTop: '50px',
                            fontFamily: 'Inter',

                        }}>
                        {price}
                    </p>

                    <div style={{
                        marginTop: '40px',
                        marginBottom: '60px',
                        backgroundColor: '#484D50',
                        height: '50px',
                        width: '230px',
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        color: 'white',
                        textAlign: 'center',
                        borderRadius: '10px',
                    }}>
                        <button style={{
                            marginTop: '10px',
                        }}>
                            Adicionar ao carrinho
                        </button>
                    </div>

                    <hr style={{
                        width: '500px',
                        marginBottom: '40px',
                    }} />

                    <div>
                        <p
                            style={{
                                fontSize: '26px',
                                fontWeight: '700',
                                marginBottom: '20px',
                                marginTop: '50px',
                                fontFamily: 'Inter',
                            }}>
                            Descrição do produto
                        </p>

                        <p style={{
                            fontSize: '16px',
                            fontWeight: 'bolder',
                            fontFamily: 'Inter',
                            marginBottom: '20px',
                            color: '#6A6E70'
                        }}>
                            Composição: {composition}
                        </p>

                        <p style={{
                            fontSize: '18px',
                            fontWeight: '300',
                            fontFamily: 'Inter',
                            marginBottom: '30px'
                        }}>
                            {description}
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
};
