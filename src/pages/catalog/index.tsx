import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import { useState } from "react";
import { CategoryItemType } from "@/lib/utils";
import { CategoryItem } from "./components/category-item";

import mouse from "../../assets/mouse.png";

export function CatalogPage() {
  const [categories] = useState<CategoryItemType[]>([
    {
      name: "Mouses",
      slug: "mouses",
      id: "1",
      imageUrl: mouse,
    },
    {
      name: "Mouse2",
      slug: "mouses",
      id: "2",
      imageUrl: mouse,
    },
    {
      name: "Mouses3",
      slug: "mouses",
      id: "3",
      imageUrl: mouse,
    },
    {
      name: "Mouses4",
      slug: "mouses",
      id: "4",
      imageUrl: mouse,
    },
    {
      name: "Mouses5",
      slug: "mouses",
      id: "5",
      imageUrl: mouse,
    },
    {
      name: "Mouses6",
      slug: "mouses",
      id: "6",
      imageUrl: mouse,
    },
  ]);

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
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
