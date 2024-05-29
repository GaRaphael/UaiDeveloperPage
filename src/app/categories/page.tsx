// components
import { Navbar, Footer } from "../../components";

// sections
import AllProductCategories from "../../components/product/allProductCategories";


export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <AllProductCategories />
      </div>
      <Footer />
    </>
  );
}
