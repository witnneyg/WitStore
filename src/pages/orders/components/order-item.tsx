import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { CartProduct } from "@/providers/cart";

interface Order {
  status: string;
  id: string;
  createdAt: Date;
  updateAd: Date;
  userId: string;
  orderProducts: CartProduct[];
}

interface OrderItemProps {
  order: Order;
}

export function OrderItem({ order }: OrderItemProps) {
  return (
    <Card className="px-5">
      <Accordion type="single" className="w-fill" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              Pedido com {order.orderProducts.length} produtos(s)
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-bold ">
                  <p>Status</p>
                  <p className="text-[#8162FF]">{order.status}</p>
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
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
