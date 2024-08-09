import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { CategoryItem } from "./components/category-item";
import { CategoryType } from "@/lib/utils";

import mouse from "../../assets/mouse.png";
import axios from "axios";

export function CatalogPage() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await axios.get("http://localhost:8888/categories");
        setCategories(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    getCategories();
  }, []);

  console.log(categories);
  return (
    <div className="flex flex-col p-5 gap-8">
      <Badge
        className="w-fit gap-1 text-base uppercase border-2 border-primary px-3 py-[0.375rem]"
        variant="outline"
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
}
