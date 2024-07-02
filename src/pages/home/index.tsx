import img from "../../assets/banner-desconto.png";
import { Categories } from "./components/categories";
import { ProductList } from "./components/product-list";

export function HomePage() {
  return (
    <div>
      <img
        src={img}
        alt="Até 55% de desconto esse mês"
        className="h-auto w-full px-5"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductList />
      </div>
    </div>
  );
}
