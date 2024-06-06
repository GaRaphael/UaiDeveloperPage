"use client";
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import api from '../../../../api/api';
import { Footer, Navbar } from "../../../components";
import ProductGallery from '../../../components/product/productGallery'


const ProductSizeBalls: React.FC<{ sizes: any }> = ({ sizes }) => {
  const sizeArray = sizes?.split(',').map((size: any) => size.trim());

  return (
    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'start', marginTop: '10px' }}>
      {sizeArray?.map((size: any, index: any) => (
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

export default function ProductWomenView() {

  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        try {
          const response = await api.get(`/women/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getProduct();
  }, [id]);


  const model = product?.model;
  const image = product?.image;
  const price = product?.price;
  const color = product?.color;
  const size = product?.size;
  const composition = product?.composition;
  const description = product?.description;

  return (
    <>
      <Navbar />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />

      <div className="flex">
        <div className="row">
          <div className="col-6 ">
            <ProductGallery images={image} />
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
              {model}
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
              <div

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
                    backgroundColor: color?.toString(),
                    marginRight: '10px',
                    border: '1px solid black'
                  }}
                >

                </div>

              </div>
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

            <ProductSizeBalls sizes={size} />
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
            {'R$' + price}
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


