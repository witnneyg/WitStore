import { computeProductTotalPrice } from "../computeProductTotalPrice";

describe("ComputeProductTotalPrice helper", () => {
  test("should calculate total price for Product with discount", () => {
    const mockProduct = {
      _id: "101",
      name: "Mouse Gamer Pro",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      basePrice: 650,
      discountPercentage: 10,
      imageUrls: ["https://example.com/mouse-product.jpg"],
      slug: "mouse-gamer-pro",
      categoryId: "2",
    };

    const result = computeProductTotalPrice(mockProduct);

    expect(result.totalPrice).toBe(585);
    expect(result).toEqual({
      ...mockProduct,
      totalPrice: 585,
    });
  });

  test("should returns basePrice when no discount", () => {
    const mockProduct = {
      _id: "101",
      name: "Mouse Gamer Pro",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      basePrice: 500,
      discountPercentage: 0,
      imageUrls: ["https://example.com/mouse-product.jpg"],
      slug: "mouse-gamer-pro",
      categoryId: "2",
    };

    const result = computeProductTotalPrice(mockProduct);

    expect(result.totalPrice).toBe(500);
  });
});
