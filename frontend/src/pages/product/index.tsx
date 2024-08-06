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

export function ProductDetailsPage() {
  const [product, setProduct] = useState<Product>();
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  console.log(recommendedProducts);

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const productRes = await axios.get(
          `http://localhost:8888/products/${params.slug}`
        );
        setProduct(productRes.data);

        const categoryRes = await axios.get(
          `http://localhost:8888/categories/${productRes.data.categoryId}`
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
    <div className="fex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <SectionTitle>Products Recomendados</SectionTitle>
      <ProductList products={recommendedProducts} />
    </div>
  );
}
