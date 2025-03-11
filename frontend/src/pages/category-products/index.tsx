import { Badge } from "@/components/ui/badge";
import { ProductItem } from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "@/lib/utils";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { api } from "@/services/api";
import { Skeleton } from "@/components/ui/skeleton";

export function CategoryProducts() {
  const params = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProductsFromCategories() {
      try {
        const res = await api.get(`/categories/${params.slug}`);

        setProducts(res.data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getProductsFromCategories();
  }, [params.slug]);

  if (!products) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 p-5 ">
      <Badge
        className="w-fit gap-1 text-base uppercase border-2 border-primary px-3 py-[0.375rem]"
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {params.slug}
      </Badge>
      <div className="grid grid-cols-2 gap-8">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-[12rem]  lg:h-[35rem] w-full"
                />
              ))
          : products.map((product) => (
              <ProductItem
                key={product._id}
                product={computeProductTotalPrice(product)}
              />
            ))}
      </div>
    </div>
  );
}
