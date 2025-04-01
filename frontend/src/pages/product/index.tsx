import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "@/lib/utils";
import { ProductImages } from "./components/product-images";
import { ProductInfo } from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/computeProductTotalPrice";
import { ProductList } from "../../components/ui/product-list";
import { SectionTitle } from "@/components/ui/section-title";
import { api } from "@/services/api";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductDetailsPage() {
  const [product, setProduct] = useState<Product>();
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [params.slug]);

  if (!product) return null;

  return (
    <div className="fex flex-col gap-8 pb-8 container mx-auto">
      <div className="hidden lg:flex lg:gap-4 lg:m-7">
        {loading ? (
          <div className="flex gap-3">
            <Skeleton className="w-[40rem] h-[30rem]" />
            <Skeleton className="w-[36rem] h-[30rem]" />
          </div>
        ) : (
          <>
            <ProductImages imageUrls={product.imageUrls} name={product.name} />
            <ProductInfo product={computeProductTotalPrice(product)} />
          </>
        )}
      </div>
      <div className="lg:hidden mt-5">
        {loading ? (
          <div className="flex flex-col gap-8">
            <Skeleton className="w-full h-[20rem]" />
            <div className="flex gap-4 mx-6">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} className="w-full min-h-[80px]" />
                ))}
            </div>
          </div>
        ) : (
          <>
            <ProductImages imageUrls={product.imageUrls} name={product.name} />
            <ProductInfo product={computeProductTotalPrice(product)} />
          </>
        )}
      </div>
      <SectionTitle>Produtos Recomendados</SectionTitle>

      {loading ? (
        <div className="flex w-full overflow-hidden mx-6 gap-4">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div className="space-y-2">
                <Skeleton key={index} className="w-[170px] h-[170px]" />
                <Skeleton key={index} className="w-[156px] h-[16px]" />
                <Skeleton key={index} className="w-[136px] h-[16px]" />
              </div>
            ))}
        </div>
      ) : (
        <ProductList products={recommendedProducts} />
      )}
    </div>
  );
}
