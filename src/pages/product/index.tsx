import { useParams } from "react-router-dom";
import mouseImg from "../../assets/mouse.png";
import { useState } from "react";
import { Product } from "@/lib/utils";
import { ProductImages } from "./components/product-images";
import { ProductInfo } from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";
import { ProductList } from "../../components/ui/product-list";
import { SectionTitle } from "@/components/ui/section-title";

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
  const [productCategories] = useState<Product[]>([
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
    {
      id: "2",
      name: "Logitech Pro X Superlight",
      slug: "logitech-pro-x-superlight",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
      imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
      categoryId: "",
      basePrice: 750,
      discountPercentage: 5,
    },
    {
      id: "3",
      name: "Logitech G305 Lightspeed",
      slug: "logitech-g305-lightspeed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
      imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
      categoryId: "",
      basePrice: 300,
      discountPercentage: 15,
    },
    {
      id: "4",
      name: "Hyperx Pulsefire Dart",
      slug: "hyperx-pulsefire-dart",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
      imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
      categoryId: "",
      basePrice: 600,
      discountPercentage: 10,
    },
    {
      id: "5",
      name: "Razer Deathadder V2 Pro",
      slug: "razer-deathadder-v2-pro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
      imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
      categoryId: "",
      basePrice: 350,
      discountPercentage: 0,
    },
    {
      id: "6",
      name: "Logitech MX Master 3s",
      slug: "logitech-mx-master-3s",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
      imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
      categoryId: "",
      basePrice: 650,
      discountPercentage: 10,
    },
    {
      id: "7",
      name: "Logitech Pro X Superlight",
      slug: "logitech-pro-x-superlight",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
      imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
      categoryId: "",
      basePrice: 750,
      discountPercentage: 5,
    },
    {
      id: "8",
      name: "Logitech G305 Lightspeed",
      slug: "logitech-g305-lightspeed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
      imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
      categoryId: "",
      basePrice: 300,
      discountPercentage: 15,
    },
    {
      id: "9",
      name: "Hyperx Pulsefire Dart",
      slug: "hyperx-pulsefire-dart",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
      imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
      categoryId: "",
      basePrice: 600,
      discountPercentage: 10,
    },
    {
      id: "10",
      name: "Razer Deathadder V2 Pro",
      slug: "razer-deathadder-v2-pro",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
      imageUrls: [mouseImg, mouseImg, mouseImg, mouseImg],
      categoryId: "",
      basePrice: 350,
      discountPercentage: 0,
    },
  ]);

  const params = useParams();

  if (!product) return null;

  return (
    <div className="fex flex-col gap-8 pb-8">
      {product.map(({ imageUrls, name, id }) => (
        <ProductImages imageUrls={imageUrls} name={name} key={id} />
      ))}
      {product.map((item) => (
        <ProductInfo product={computeProductTotalPrice(item)} />
      ))}
      {/* include categories include product true , incluir productos semelhantes*/}
      <SectionTitle>Products Recomendados</SectionTitle>
      <ProductList products={productCategories} />
    </div>
  );
}
