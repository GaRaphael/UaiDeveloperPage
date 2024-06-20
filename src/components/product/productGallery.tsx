interface Props {
  images: ({
    src: string;
    alt: string;
  })[];
}

export default function ProductGallery({
  images,
}: Props) {

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
          <img className="max-h-[250px] max-w-[350px] mt-[130px]" src={images[0].src} alt={images[0].alt} />
          <img className="max-h-[250px] max-w-[350px] mt-[20px]" src={images[0].src} alt={images[1].alt} />
          <img className="max-h-[250px] max-w-[350px] mt-[20px]" src={images[0].src} alt={images[2].alt} />
        </div>
        <div>
          <img className="max-h-[790px] max-w-[700px] mt-[130px] ml-[70px]" src={images[3].src} alt={images[3].alt} />
        </div>
      </div>
    </>
  );
}