import { CategoryType, Product } from "./utils";

export function getProductsBySlug(
  categories: CategoryType[],
  slug: string
): Product[] {
  const categoryData = categories.find((cat) => cat.slug == slug);

  return categoryData ? categoryData.products : [];
}

export function getProductsByDiscount(categories: CategoryType[]): Product[] {
  return categories.flatMap((category) =>
    category.products.filter((product) => product.discountPercentage > 0)
  );
}
