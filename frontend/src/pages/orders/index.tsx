import { Badge } from "@/components/ui/badge";
import { PackageSearchIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { api } from "@/services/api";
import { UserContext } from "@/context/user-context";
import { Product } from "@/lib/utils";
import { OrderItem } from "./components/order-item";

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
        console.log(res.data);
      } catch (error) {
        console.log(error);
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
        {orders.map((order) => (
          <OrderItem key={order._id} order={order} />
        ))}
      </div>
      Em desenvolvimento...
    </div>
  );
}

// const orders = [
//   {
//     status: "WAITING_FOR_PAYMENT",
//     _id: "1",
//     createdAt: new Date(),
//     updateAd: new Date(),
//     userId: "userId",
//     orderProducts: [
//       {
//         _id: "1",
//         name: "Logitech MX Master 3s",
//         slug: "logitech-mx-master-3s",
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
//         imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
//         categoryId: "",
//         basePrice: 500,
//         discountPercentage: 10,
//         totalPrice: 1100,
//         quantity: 1,
//       },
//     ],
//   },
