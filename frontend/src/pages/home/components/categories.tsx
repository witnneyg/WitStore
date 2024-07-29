import { useState } from "react";
import { CategoryItem } from "./category-item";
import { v4 as uuidv4 } from "uuid";

export function Categories() {
  const [category] = useState([
    {
      id: uuidv4(),
      name: "Teclados",
      slug: "keyboards",
      imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/keyboards.png",
    },
    {
      id: uuidv4(),
      name: "Mouses",
      slug: "mouses",
      imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mouses.png",
    },
    {
      id: uuidv4(),
      name: "Fones",
      slug: "headphones",
      imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/headphones.png",
    },
    {
      id: uuidv4(),
      name: "Mousepads",
      slug: "mousepads",
      imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/mousepads.png",
    },
    {
      id: uuidv4(),
      name: "Monitors",
      slug: "monitors",
      imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/monitors.png",
    },
    {
      id: uuidv4(),
      name: "Speakers",
      slug: "speakers",
      imageUrl: "https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png",
    },
  ]);

  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
      {category.map((item) => (
        <CategoryItem name={item.name} slug={item.slug} key={item.id} />
      ))}
    </div>
  );
}
