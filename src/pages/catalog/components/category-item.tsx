import { CategoryItemType } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CategoryItemProps {
  category: CategoryItemType;
}

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Link to={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="w-full h-[150px] flex rounded-tl-lg rounded-tr-lg items-center justify-center bg-category-item-gradient">
          <img
            src={category.imageUrl}
            alt={category.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
}
