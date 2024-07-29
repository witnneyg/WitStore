import { Categories } from "./components/categories";
import { ProductList } from "../../components/ui/product-list";
import { Product } from "@/lib/utils";
import { useState } from "react";

import bannerDesconto from "../../assets/banner-desconto.png";
import bannerMouse from "../../assets/banner-mouses.png";
import bannerFones from "../../assets/banner-fones.png";

import { SectionTitle } from "../../components/ui/section-title";
import { PromoBanner } from "./components/promo-banner";
import { initialData, test, categoriesArr } from "@/helpers/script";

export function HomePage() {
  const [products] = useState<any>(test);

  const mouses = products.filter((product) => product.categoryId == 1);

  // const [categories] = useState(categoriesArr);

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner src={bannerDesconto} alt="Até 55% de desconto esse mês" />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={mouses} />
      </div>

      <PromoBanner src={bannerMouse} alt="Até 55% de desconto em mouses" />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={products} />
      </div>

      <PromoBanner src={bannerFones} alt="Até 20% de desconto em fones" />

      <div>
        <SectionTitle>Fones</SectionTitle>
        <ProductList products={products} />
      </div>
    </div>
  );
}
