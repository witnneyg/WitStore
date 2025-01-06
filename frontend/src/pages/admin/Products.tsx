import { Card } from "@/components/ui/card";

export function Products() {
  return (
    <div className=" flex items-center justify-center h-full border">
      <Card className="flex flex-col gap-2 w-[24rem] px-6 py-4 shadow-lg rounded-lg">
        <img
          src="https://static.skillshare.com/uploads/project/84630/cover_full_22304c1e904979a9dbc8bd4c3b1b5825.jpg"
          alt="Imagem do produto"
          className="w-full h-28 md:h-32 object-cover rounded-md "
        />

        <div className="text-center">
          <button className=" bg-blue-600 text-white px-4 py-2 rounded-md  hover:bg-blue-700 transition ">
            Choose File
          </button>
          <span className="block  text-gray-400 text-sm">Imagem 4mb</span>
        </div>

        <div className="flex flex-col gap-3">
          <label
            htmlFor="productName"
            className="text-sm font-medium  text-gray-300"
          >
            Nome do Produto
          </label>
          <input
            type="text"
            name="productName"
            placeholder="Digite o nome do produto"
            className="border border-gray-950 rounded-md p-2 text-sm  bg-[#171718] text-gray-100 focus:outline-none focus:ring-2  focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="categoryName"
            className="text-sm font-medium  text-gray-300"
          >
            Nome da Categoria
          </label>
          <input
            type="text"
            name="categoryName"
            placeholder="Digite o nome da categoria"
            className="border  border-gray-950 rounded-md p-2 text-sm  bg-[#171718] text-gray-100 focus:outline-none focus:ring-2  focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="priceProduct"
            className="text-sm font-medium  text-gray-300"
          >
            Preço do Produto
          </label>
          <input
            type="text"
            name="priceProduct"
            placeholder="Digite o preço do produto"
            className="border  border-gray-950 rounded-md p-2 text-sm  bg-[#171718] text-gray-100 focus:outline-none focus:ring-2  focus:ring-blue-400"
          />
        </div>

        <button className="w-full  bg-green-600 text-white py-2 rounded-md  hover:bg-green-700 transition">
          Salvar Produto
        </button>
      </Card>
    </div>
  );
}
