import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { OrderProductItem } from "./order-product-item";
import { Separator } from "@/components/ui/separator";
import { useMemo } from "react";
import { computeProductTotalPrice } from "@/helpers/product";
import { getOrderStatus } from "../helpers/status";
import { Order } from "..";

interface OrderItemProps {
  order: Order;
}

export function OrderItem({ order }: OrderItemProps) {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return acc + orderProduct.basePrice * orderProduct.quantity;
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productWithTotalPrice = computeProductTotalPrice(product);
      return acc + productWithTotalPrice.totalPrice * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscounts = subtotal - total;

  return (
    <Card className="px-5">
      <Accordion type="single" className="w-fill" collapsible>
        <AccordionItem value={order._id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <p className="uppercase font-bold">
                Pedido com {order.orderProducts.length} produtos(s)
              </p>
              <span className="text-sm opacity-60">
                Feito em {format(order.createdAt, "dd/MM/y 'às' HH:mm")}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="font-bold ">
                  <p>Status</p>
                  <p className="text-[#8162FF]">
                    {getOrderStatus(order.status)}
                  </p>
                </div>

                <div className="">
                  <p className="font-bold">Data</p>
                  <p className="opacity-60">
                    {format(order.createdAt, "dd/MM/yyyy")}
                  </p>
                </div>

                <div className="">
                  <p className="font-bold">Pagamento</p>
                  <p className="opacity-60">Cartão</p>
                </div>
              </div>

              {order.orderProducts.map((orderProduct) => (
                <OrderProductItem
                  key={orderProduct._id}
                  orderProduct={orderProduct}
                />
              ))}

              <div className="flex flex-col gap-1 w-full text-xs">
                <Separator />

                <div className="flex justify-between w-full py-3">
                  <p>Subtotal</p>
                  <p>R$ {subtotal.toFixed(2)}</p>
                </div>

                <Separator />

                <div className="flex justify-between w-full py-3">
                  <p>Entrega</p>
                  <p>GRÁTIS</p>
                </div>

                <Separator />

                <div className="flex justify-between w-full py-3">
                  <p>Descontos</p>
                  <p>-R$ {totalDiscounts.toFixed(2)}</p>
                </div>

                <Separator />

                <div className="flex justify-between w-full py-3 text-sm font-bold">
                  <p>Total</p>
                  <p>R$ {total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
