import { Badge } from "@/components/ui/badge";
import { PackageSearchIcon } from "lucide-react";
import { OrderItem } from "./components/order-item";
import mouseImg from "../../assets/mouse.png";

export function OrdersPage() {
  const orders = [
    {
      status: "WAITING_FOR_PAYMENT",
      _id: "1",
      createdAt: new Date(),
      updateAd: new Date(),
      userId: "userId",
      orderProducts: [
        {
          _id: "1",
          name: "Logitech MX Master 3s",
          slug: "logitech-mx-master-3s",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
          imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
          categoryId: "",
          basePrice: 500,
          discountPercentage: 10,
          totalPrice: 1100,
          quantity: 1,
        },
      ],
    },
    {
      status: "PAYMENT_CONFIRMED",
      _id: "2",
      createdAt: new Date(),
      updateAd: new Date(),
      userId: "userId",
      orderProducts: [
        {
          _id: "1",
          name: "Logitech G pro",
          slug: "logitech G pro",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
          imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
          categoryId: "",
          basePrice: 650,
          discountPercentage: 8,
          totalPrice: 1200,
          quantity: 1,
        },
      ],
    },
  ];

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
