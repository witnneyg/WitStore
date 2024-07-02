import { useState } from "react";
import { CategoryItem } from "./category-item";
import { categoriesItemArr } from "@/lib/seed";

export function Categories() {
  const [category] = useState(categoriesItemArr);

  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
      {category.map((item) => (
        <CategoryItem name={item.name} slug={item.slug} key={item.id} />
      ))}
    </div>
  );
}
