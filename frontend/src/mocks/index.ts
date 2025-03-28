import { vi } from "vitest";

export const api = {
  get: vi.fn(),
};

export const mockCategories = [
  {
    _id: "1",
    imageUrl: "https://example.com/mouse-category.jpg",
    name: "Mouses",
    products: [
      {
        _id: "101",
        categoryId: "1",
        basePrice: 650,
        description: "Mouse gamer com 6 botões programáveis",
        discountPercentage: 10,
        imageUrls: [
          "https://example.com/mouse1.jpg",
          "https://example.com/mouse2.jpg",
        ],
        name: "Mouse Gamer Pro X",
        slug: "mouse-gamer-pro-x",
      },
      {
        _id: "102",
        categoryId: "1",
        basePrice: 350,
        description: "Mouse sem fio ergonômico",
        discountPercentage: 0,
        imageUrls: ["https://example.com/mouse-wireless.jpg"],
        name: "Mouse Wireless Elite",
        slug: "mouse-wireless-elite",
      },
    ],
    slug: "mouses",
  },
  {
    _id: "2",
    imageUrl: "https://example.com/teclado-category.jpg",
    name: "Teclados",
    products: [
      {
        _id: "201",
        categoryId: "2",
        basePrice: 800,
        description: "Teclado mecânico RGB switches azuis",
        discountPercentage: 15,
        imageUrls: ["https://example.com/teclado-rgb.jpg"],
        name: "Teclado Mecânico RGB",
        slug: "teclado-mecanico-rgb",
      },
    ],
    slug: "teclados",
  },
];

export const mockProduct = {
  _id: "101",
  name: "Mouse Gamer Pro",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  basePrice: 650,
  discountPercentage: 10,
  imageUrls: ["https://example.com/mouse-product.jpg"],
  slug: "mouse-gamer-pro",
  categoryId: 2,
};
