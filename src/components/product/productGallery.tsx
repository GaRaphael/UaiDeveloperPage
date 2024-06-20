interface Props {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ProductGallery({ images = [] }: Props) {
  // Verificação se a matriz `images` possui os elementos necessários
  const hasImages = images.length > 0;

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0 100px 0 250px',
        }}
      >
        <div>
          {hasImages ? (
            <>
              {images[0] && (
                <img
                  className="max-h-[250px] max-w-[350px] mt-[130px]"
                  src={images[0].src}
                  alt={images[0].alt}
                />
              )}
              {images[1] && (
                <img
                  className="max-h-[250px] max-w-[350px] mt-[20px]"
                  src={images[1].src}
                  alt={images[1].alt}
                />
              )}
              {images[2] && (
                <img
                  className="max-h-[250px] max-w-[350px] mt-[20px]"
                  src={images[2].src}
                  alt={images[2].alt}
                />
              )}
            </>
          ) : (
            <p>Imagens não disponíveis</p>
          )}
        </div>
        <div>
          {hasImages && images[3] && (
            <img
              className="max-h-[790px] max-w-[700px] mt-[130px] ml-[70px]"
              src={images[3].src}
              alt={images[3].alt}
            />
          )}
        </div>
      </div>
    </>
  );
}
