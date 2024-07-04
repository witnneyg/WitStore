import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { CategoryItemType } from "@/lib/utils";

export function CategoryItem(category: CategoryItemType) {
  return (
    <Badge
      variant="outline"
      className="flex justify-center items-center py-3 gap-2 rounded-lg"
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <span className="font-bold text-xs">{category.name}</span>
    </Badge>
  );
}
