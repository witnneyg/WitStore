import { Card } from "@/components/ui/card";
import { FormEvent, useState } from "react";

type ProductDataType = {
  name: string;
  category: string;
  price: string;
  productImage: File | null;
};

export function Products() {
  const [productData, setProductData] = useState<ProductDataType>({
    name: "",
    category: "",
    price: "",
    productImage: null,
  });
  const [error, setError] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  function handleProductChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;

    if (name === "productImage" && files) {
      const file = files[0];
      setSelectedImage(file);
      setProductData((prev) => ({ ...prev, productImage: file }));

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

  function handleSaveProduct(e: FormEvent) {
    e.preventDefault();

    const { name, category, price, productImage } = productData;
    const numberPrice = Number(price);

    if (!name.trim()) {
      return setError("O nome do produto é obrigatório.");
    }

    if (!category.trim()) {
      return setError("A categoria do produto é obrigatória.");
    }

    if (!price || numberPrice <= 0) {
      return setError("O preço do produto deve ser maior que 0.");
    }

    if (!productImage) {
      return setError("A imagem do produto é obrigatória");
    }
  }

  return (
    <div className=" flex items-center justify-center h-[36rem] border">
      <Card className="flex flex-col gap-2 w-[25rem] px-6 py-4 shadow-lg rounded-lg">
        <form onSubmit={handleSaveProduct}>
          <div className="flex flex-col gap-3 text-center mt-2">
            {preview && (
              <img
                src={`${preview || "https://static.skillshare.com/uploads/project/84630/cover_full_22304c1e904979a9dbc8bd4c3b1b5825.jpg"}`}
                alt="Pré-visualização"
                className="w-full h-28 md:h-44 object-cover rounded-md "
              />
            )}

            <input
              type="file"
              placeholder="test"
              accept="image/*"
              name="productImage"
              onChange={handleProductChange}
              className=" bg-blue-600 text-white px-3 py-2 rounded-md  hover:bg-blue-700 transition "
            />

            <span className="block mt-1 text-gray-400 text-sm">Imagem 4mb</span>
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="name"
              className="text-sm font-medium  text-gray-300"
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

          <div className="flex flex-col gap-2">
            <label
              htmlFor="category"
              className="text-sm font-medium  text-gray-300"
            >
              Nome da Categoria
            </label>
            <input
              type="text"
              name="category"
              placeholder="Digite o nome da categoria"
              value={productData.category}
              onChange={handleProductChange}
              className="border  border-gray-950 rounded-md p-2 text-sm  bg-[#171718] text-gray-100 focus:outline-none focus:ring-2  focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="price"
              className="text-sm font-medium  text-gray-300"
            >
              Preço do Produto
            </label>
            <input
              type="number"
              name="price"
              placeholder="Digite o preço do produto"
              step={0.01}
              min={1}
              value={productData.price}
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
