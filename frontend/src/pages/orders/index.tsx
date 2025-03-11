import { Badge } from "@/components/ui/badge";
import { PackageSearchIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { api } from "@/services/api";
import { UserContext } from "@/context/user-context";
import { Product } from "@/lib/utils";
import { OrderItem } from "./components/order-item";
import { Skeleton } from "@/components/ui/skeleton";

export interface OrderProducts {
  _id: string;
  basePrice: number;
  createdAt: Date;
  updatedAt: Date;
  discountPercentage: number;
  quantity: number;
  productId: Pick<Product, "_id" | "name" | "imageUrls" | "description">;
}

export interface Order {
  status: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  orderProducts: OrderProducts[];
}

export function OrdersPage() {
  const { user } = useContext(UserContext);
  const [orders, setOrder] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getOrder() {
      if (!user?._id) return;
      try {
        const res = await api.get("/order/getOrder", {
          params: {
            userId: user?._id,
          },
        });

        setOrder(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getOrder();
  }, [user?._id]);

  return (
    <div className="p-5">
      <Badge
        className="w-fit gap-1 text-base uppercase border-2 border-primary px-3 py-[0.375rem]"
        variant="outline"
      >
        <PackageSearchIcon size={16} />
        Meus Pedidos
      </Badge>
      <div className="flex flex-col gap-5 mt-5">
        {loading ? (
          Array(6)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} className="h-[80px] w-full" />
            ))
        ) : orders.length === 0 ? (
          <p>Não possui nenhum pedido</p>
        ) : (
          orders.map((order) => <OrderItem key={order._id} order={order} />)
        )}
      </div>
    </div>
  );
}
