import { useEffect, useState } from "react";
import { CategoryItem } from "./category-item";
import axios from "axios";
import { CategoryType } from "@/lib/utils";

export function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    async function getCategory() {
      try {
        const res = await axios.get("http://localhost:8888/categories");

        setCategories(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    getCategory();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
      {categories.map((item) => (
        <CategoryItem name={item.name} slug={item.slug} key={item._id} />
      ))}
    </div>
  );
}
