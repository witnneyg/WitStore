import { Categories } from "./components/categories";
import { ProductList } from "../../components/ui/product-list";
import { CategoryType, Product } from "@/lib/utils";
import { useEffect, useState } from "react";

import bannerDesconto from "../../assets/banner-desconto.png";
import bannerMouse from "../../assets/banner-mouses.png";
import bannerFones from "../../assets/banner-fones.png";
import bannerOfertas from "../../assets/banner-ofertas.png";
import fretegratis from "../../assets/banner-fretegrátis.png";

import { SectionTitle } from "../../components/ui/section-title";
import { PromoBanner } from "./components/promo-banner";
import { api } from "@/services/api";

export function HomePage() {
  const [categoriesData, setCategoriesData] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await api.get("/categories");
        setCategoriesData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getCategories();
  }, []);

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
  const keyboards = getProductsBySlug("teclados");
  const headphones = getProductsBySlug("headphones");

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
      <div className="md:container md:mx-auto flex flex-col gap-8 py-8 md:py-0">
        <div className="mt-8 px-5">
          <Categories />
        </div>

        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={productsDiscount} loading={loading} />
        </div>

        <div className="flex justify-center md:gap-6 lg:gap-8 w-full md:px-4 lg:px-3 ">
          <PromoBanner
            src={bannerMouse}
            alt="Até 55% de desconto em mouses"
            className="hidden md:block md:w-[48%] lg:w-[48%] w-full"
          />
          <PromoBanner
            src={bannerFones}
            alt="Até 20% de desconto em fones"
            className="hidden md:block md:w-[48%] lg:w-[48%] w-full"
          />
        </div>
        <PromoBanner
          src={bannerMouse}
          alt="Até 55% de desconto em mouses"
          className="md:hidden"
        />

        <div>
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} loading={loading} />
        </div>

        <PromoBanner
          src={bannerFones}
          alt="Até 20% de desconto em fones"
          className="hidden"
        />
        <PromoBanner
          src={fretegratis}
          alt="Até 20% de desconto em fones"
          className="hidden md:block md:px-5"
        />

        <div>
          <SectionTitle>Fones</SectionTitle>
          <ProductList products={headphones} loading={loading} />
        </div>
      </div>
    </div>
  );
}
