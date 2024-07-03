import bannerDesconto from "../../assets/banner-desconto.png";
import bannerMouse from "../../assets/banner-mouses.png";
import { Categories } from "./components/categories";
import { ProductList } from "./components/product-list";

export function HomePage() {
  return (
    <div>
      <img
        src={bannerDesconto}
        alt="Até 55% de desconto esse mês"
        className="h-auto w-full px-5"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <p className="font-bold upparcase pl-5 mb-3 ">Ofertas</p>
        <ProductList />
      </div>

      <img
        src={bannerMouse}
        alt="Até 55% de desconto em mouses!"
        className="h-auto w-full px-5"
      />
    </div>
  );
}
