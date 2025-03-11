import { ProductItem } from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { useEffect, useState } from "react";
import { CategoryType, Product } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { PercentIcon } from "lucide-react";
import { api } from "@/services/api";
import { Skeleton } from "@/components/ui/skeleton";

export function DealsPage() {
  const [deals, setDeals] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await api.get("/categories");
        setDeals(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  function getProductsByDiscount(): Product[] {
    return deals.flatMap((category) =>
      category.products.filter((product) => product.discountPercentage > 0)
    );
  }

  const productsDiscount = getProductsByDiscount();
  return (
    <div className="p-5 flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 text-base uppercase border-2 border-primary px-3 py-[0.375rem]"
        variant="outline"
      >
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 gap-8  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {loading
          ? Array(10)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} className="w-full min-h-[170px]" />
              ))
          : productsDiscount.map((product) => (
              <ProductItem
                key={product._id}
                product={computeProductTotalPrice(product as Product)}
              />
            ))}
      </div>
    </div>
  );
}
