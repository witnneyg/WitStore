import { Categories } from "./components/categories";
import { ProductList } from "../../components/ui/product-list";
import { CategoryType, Product } from "@/lib/utils";
import { useEffect, useState } from "react";
import axios from "axios";

import bannerDesconto from "../../assets/banner-desconto.png";
import bannerMouse from "../../assets/banner-mouses.png";
import bannerFones from "../../assets/banner-fones.png";
import bannerOfertas from "../../assets/banner-ofertas.png";
import fretegratis from "../../assets/banner-fretegrátis.png";

import { SectionTitle } from "../../components/ui/section-title";
import { PromoBanner } from "./components/promo-banner";

export function HomePage() {
  const [categoriesData, setCategoriesData] = useState<CategoryType[]>([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get("http://localhost:8888/categories");
        setCategoriesData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getCategories();
  }, []);

  console.log(categoriesData);
  function getProductsBySlug(slug: string): Product[] {
    const categoryData = categoriesData.find((cat) => cat.slug == slug);

    return categoryData ? categoryData.products : [];
  }

  function getProductsByDiscount(): Product[] {
    return categoriesData.flatMap((category) =>
      category.products.filter((product) => product.discountPercentage > 0)
    );
  }

  const productsDiscount = getProductsByDiscount();
  console.log({ productsDiscount });

  const keyboards = getProductsBySlug("teclados");
  const headphones = getProductsBySlug("headphones");

  getProductsByDiscount();

  return (
    <div className="flex flex-col gap-8 py-8 md:py-0">
      <PromoBanner
        src={bannerDesconto}
        alt="Até 55% de desconto esse mês"
        className="md:hidden"
      />
      <PromoBanner
        src={bannerOfertas}
        alt="Até 55% de desconto esse mês"
        className="hidden md:block"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={productsDiscount} />
      </div>

      <div className="flex  justify-center gap-4">
        <PromoBanner
          src={bannerMouse}
          alt="Até 55% de desconto em mouses"
          className="hidden md:block w-[48%]"
        />
        <PromoBanner
          src={bannerFones}
          alt="Até 20% de desconto em fones"
          className="hidden md:block w-[48%]"
        />
      </div>
      <PromoBanner
        src={bannerMouse}
        alt="Até 55% de desconto em mouses"
        className="md:hidden"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src={bannerFones}
        alt="Até 20% de desconto em fones"
        className="hidden"
      />
      <PromoBanner
        src={fretegratis}
        alt="Até 20% de desconto em fones"
        className="hidden md:block"
      />

      <div>
        <SectionTitle>Fones</SectionTitle>
        <ProductList products={headphones} />
      </div>
    </div>
  );
}
