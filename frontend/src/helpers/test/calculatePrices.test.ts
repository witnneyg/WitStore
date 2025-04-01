/* eslint-disable @typescript-eslint/no-explicit-any */
import { calculatePrices } from "../calculatePrices";

describe("CalculatePrices", () => {
  const productsMockWithoutDiscount = [
    {
      basePrice: 300,
      quantity: 2,
      totalPrice: 300,
    },
  ];

  const productsMockWithDiscount = [
    {
      basePrice: 300,
      quantity: 2,
      totalPrice: 250,
    },
  ];

  it("should calculate correctly subtotal, total, totalDiscount when there is no discount", () => {
    const result = calculatePrices(productsMockWithoutDiscount as any);

    expect(result.subtotal).toBe(600);
    expect(result.total).toBe(600);
    expect(result.totalDiscount).toBe(0);
  });

  it("should calculate correctly subtotal, total, totalDiscount when there is a discount", () => {
    const result = calculatePrices(productsMockWithDiscount as any);

    expect(result.subtotal).toBe(600);
    expect(result.total).toBe(500);
    expect(result.totalDiscount).toBe(100);
  });
});
