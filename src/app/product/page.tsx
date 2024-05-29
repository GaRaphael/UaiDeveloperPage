// components
import { Footer, Navbar } from "../../components";

// sections
import ProductOverview from "../../components/product/productOverview";
import data from '../../../public/data.json';

const colors = [
  { name: 'Preto', hex: '#000000' },
  { name: 'Branco', hex: '#FFFFFF' },
  { name: 'Azul', hex: '#0000FF' },
  { name: 'Verde', hex: '#008000' },
];

const sizes = [
  { name: 'P' },
  { name: 'M' },
  { name: 'G' },
  { name: 'GG' },
  { name: 'GGG' },
  { name: 'XGG' },
  { name: 'XXG' },
];

const price = 'R$ 99.99'

export default function ProductPage() {
  return (
    <>
      <main>
        <Navbar />
        <div className="container mt-5">
          <ProductOverview
            colors={colors}
            images={data.products[0].images || []}
            name={data.products[0].title}
            description={data.products[0].full_description || ""}
            price={price}
            highlights={data.products[0].highlights || []}
            composition={"100% algodão"}
            rating={data.products[0].rating || 0}
            reviews={data.products[0].reviews || 0}
            sizes={sizes}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}