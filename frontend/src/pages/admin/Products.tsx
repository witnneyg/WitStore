import { Card } from "@/components/ui/card";
import { api } from "@/services/api";
import { FormEvent, useRef, useState } from "react";

type ProductDataType = {
  name: string;
  categoryName: string;
  basePrice: string;
  description: string;
  imageUrls: File | null;
};

const token = localStorage.getItem("token");

export function Products() {
  const [productData, setProductData] = useState<ProductDataType>({
    name: "",
    categoryName: "",
    basePrice: "",
    description: "",
    imageUrls: null,
  });
  const [error, setError] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleProductChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;

    if (name === "imageUrls" && files) {
      const file = files[0];
      setProductData((prev) => ({ ...prev, imageUrls: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setProductData((prev) => ({ ...prev, [name]: value }));
    }

    setError("");
  }

  async function handleSaveProduct(e: FormEvent) {
    e.preventDefault();

    const { name, categoryName, basePrice, imageUrls, description } =
      productData;
    const numberPrice = Number(basePrice);

    if (!name.trim()) {
      return setError("O nome do produto é obrigatório.");
    }

    if (!categoryName.trim()) {
      return setError("A categoria do produto é obrigatória.");
    }

    if (!description.trim()) {
      return setError("A descrição do produto é obrigatória.");
    }

    if (!basePrice || numberPrice <= 0) {
      return setError("O preço do produto deve ser maior que 0.");
    }

    if (!imageUrls) {
      return setError("A imagem do produto é obrigatória");
    }

    const data = new FormData();
    data.append("name", productData.name);
    data.append("description", productData.description);
    data.append("basePrice", productData.basePrice);
    data.append("categoryName", productData.categoryName);
    if (productData.imageUrls) data.append("image", productData.imageUrls);

    try {
      const response = await api.post("/admin/dashboard/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setProductData({
      name: "",
      basePrice: "",
      categoryName: "",
      description: "",
      imageUrls: null,
    });
    setPreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  return (
    <div className=" flex items-center justify-center h-[42rem] border">
      <Card className="flex flex-col gap-2 w-[25rem] px-6 py-4 shadow-lg rounded-lg">
        <form onSubmit={handleSaveProduct}>
          <div className="flex flex-col gap-3 text-center mt-2">
            <img
              src={
                preview ||
                "https://static.skillshare.com/uploads/project/84630/cover_full_22304c1e904979a9dbc8bd4c3b1b5825.jpg"
              }
              alt="Pré-visualização"
              className="w-full h-28 md:h-44 object-cover rounded-md"
            />

            <input
              type="file"
              placeholder="test"
              accept="image/*"
              name="imageUrls"
              onChange={handleProductChange}
              ref={fileInputRef}
              className=" bg-blue-600 text-white px-3 py-2 rounded-md  hover:bg-blue-700 transition "
            />
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <label
              htmlFor="name"
              className="text-sm font-medium  text-gray-300 mt-2"
            >
              Nome do Produto
            </label>
            <input
              type="text"
              name="name"
              placeholder="Digite o nome do produto"
              value={productData.name}
              onChange={handleProductChange}
              className="border border-gray-950 rounded-md p-2 text-sm  bg-[#171718] text-gray-100 focus:outline-none focus:ring-2  focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="categoryName"
              className="text-sm font-medium  text-gray-300 mt-2"
            >
              Nome da Categoria
            </label>
            <input
              type="text"
              name="categoryName"
              placeholder="Digite o nome da categoria"
              value={productData.categoryName}
              onChange={handleProductChange}
              className="border  border-gray-950 rounded-md p-2 text-sm  bg-[#171718] text-gray-100 focus:outline-none focus:ring-2  focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="basePrice"
              className="text-sm font-medium  text-gray-300 mt-2"
            >
              Preço do Produto
            </label>
            <input
              type="number"
              name="basePrice"
              placeholder="Digite o preço do produto"
              step={0.01}
              min={1}
              value={productData.basePrice}
              onChange={handleProductChange}
              className="border  border-gray-950 rounded-md p-2 text-sm  bg-[#171718] text-gray-100 focus:outline-none focus:ring-2  focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="category"
              className="text-sm font-medium  text-gray-300 mt-2"
            >
              Descrição do produto
            </label>
            <input
              type="text"
              name="description"
              placeholder="Digite a descrição do produto"
              value={productData.description}
              onChange={handleProductChange}
              className="border  border-gray-950 rounded-md p-2 text-sm  bg-[#171718] text-gray-100 focus:outline-none focus:ring-2  focus:ring-blue-400"
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            className="w-full mt-3  bg-green-600 text-white py-2 rounded-md  hover:bg-green-700 transition"
          >
            Salvar Produto
          </button>
        </form>
      </Card>
    </div>
  );
}
