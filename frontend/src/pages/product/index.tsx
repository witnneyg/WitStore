import { useParams } from "react-router-dom";
import mouseImg from "../../assets/mouse.png";
import { useEffect, useState } from "react";
import { Product } from "@/lib/utils";
import { ProductImages } from "./components/product-images";
import { ProductInfo } from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import { ProductList } from "../../components/ui/product-list";
import { SectionTitle } from "@/components/ui/section-title";
import axios from "axios";
import { api } from "@/services/api";

export function ProductDetailsPage() {
  const [product, setProduct] = useState<Product>();
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  console.log(recommendedProducts);

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const productRes = await api.get(`/products/${params.slug}`);
        console.log({ productRes });
        setProduct(productRes.data);

        const categoryRes = await api.get(
          `/categories/${productRes.data.categoryId}`
        );
        console.log({ categoryRes });

        setRecommendedProducts(categoryRes.data.products);
      } catch (err) {
        console.error("Failed to fetch data.");
      }
    }

    fetchData();
  }, [params.slug]);

  if (!product) return null;

  return (
    <div className="fex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <SectionTitle>Products Recomendados</SectionTitle>
      <ProductList products={recommendedProducts} />
    </div>
  );
}
