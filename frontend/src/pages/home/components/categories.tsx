import { useEffect, useState } from "react";
import { CategoryItem } from "./category-item";
import { CategoryType } from "@/lib/utils";
import { api } from "@/services/api";

export function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    async function getCategory() {
      try {
        const res = await api.get("/categories");

        setCategories(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    getCategory();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-y-2 gap-x-4">
      {categories.map((item) => (
        <CategoryItem name={item.name} slug={item.slug} key={item._id} />
      ))}
    </div>
  );
}
