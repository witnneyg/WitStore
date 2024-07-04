import { useParams } from "react-router-dom";
import mouseImg from "../../assets/mouse.png";
import { useState } from "react";
import { Product } from "@/lib/utils";

export function ProductDetailsPage() {
  const [product] = useState<Product[]>([
    {
      id: "1",
      name: "Logitech MX Master 3s",
      slug: "logitech-mx-master-3s",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
      imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
      categoryId: "",
      basePrice: 650,
      discountPercentage: 10,
    },
  ]);
  const params = useParams();

  if (!product) return null;

  return (
    <div className="">
      {product.map((item) => (
        <div className="">{item.name}</div>
      ))}
    </div>
  );
}
