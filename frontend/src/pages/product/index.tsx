import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "@/lib/utils";
import { ProductImages } from "./components/product-images";
import { ProductInfo } from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import { ProductList } from "../../components/ui/product-list";
import { SectionTitle } from "@/components/ui/section-title";
import { api } from "@/services/api";

export function ProductDetailsPage() {
  const [product, setProduct] = useState<Product>();
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const productRes = await api.get(`/products/${params.slug}`);
        setProduct(productRes.data);

        const categoryRes = await api.get(
          `/categories/id/${productRes.data.categoryId}`
        );

        setRecommendedProducts(categoryRes.data.products);
      } catch (err) {
        console.error("Failed to fetch data.");
      }
    }

    fetchData();
  }, [params.slug]);

  if (!product) return null;

  return (
    <div className="fex flex-col gap-8 pb-8 container mx-auto">
      <div className="hidden lg:flex lg:gap-4 lg:m-7">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <ProductInfo product={computeProductTotalPrice(product)} />
      </div>
      <div className="lg:hidden">
        <ProductImages imageUrls={product.imageUrls} name={product.name} />
        <ProductInfo product={computeProductTotalPrice(product)} />
      </div>
      <SectionTitle>Products Recomendados</SectionTitle>
      <ProductList products={recommendedProducts} />
    </div>
  );
}
