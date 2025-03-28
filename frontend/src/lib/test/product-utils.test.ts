import { getProductsByDiscount, getProductsBySlug } from "@/lib/product-utils";
import { mockCategories } from "@/mocks";

describe("Product-utils", () => {
  test("should return products by slug", () => {
    const resultMouses = getProductsBySlug(mockCategories, "mouses");
    const resultKeyboard = getProductsBySlug(mockCategories, "teclados");

    expect(resultMouses).toHaveLength(2);
    expect(resultKeyboard).toHaveLength(1);
  });

  test("should return empty array for non-existent slug", () => {
    const resultWithoutSlug = getProductsBySlug(mockCategories, "non-existent");

    expect(resultWithoutSlug).toEqual([]);
  });

  test("should return only products with discount", () => {
    const productsWithDiscount = getProductsByDiscount(mockCategories);

    expect(productsWithDiscount.length).toBeGreaterThan(0);
    productsWithDiscount.forEach((product) => {
      expect(product.discountPercentage).toBeGreaterThan(0);
    });
  });

  test("should return empty array when no discounts exist", () => {
    const noDiscountCategories = mockCategories.map((cat) => ({
      ...cat,
      products: cat.products.map((p) => ({ ...p, discountPercentage: 0 })),
    }));

    const productsWithoutDiscount = getProductsByDiscount(noDiscountCategories);

    expect(productsWithoutDiscount).toEqual([]);
  });
});
