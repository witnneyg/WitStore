interface OrderStatus {
  PAYMENT_CONFIRMED: "PAYMENT_CONFIRMED";
  WAITING_FOR_PAYMENT: "WAITING_FOR_PAYMENT";
}

const orderStatus: OrderStatus = {
  PAYMENT_CONFIRMED: "PAYMENT_CONFIRMED",
  WAITING_FOR_PAYMENT: "WAITING_FOR_PAYMENT",
};

export function getOrderStatus(status: string) {
  return {
    [orderStatus.PAYMENT_CONFIRMED]: "Pago",
    [orderStatus.WAITING_FOR_PAYMENT]: "Pendente",
  }[status];
}
