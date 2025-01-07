import { Card } from "@/components/ui/card";
import { Product } from "@/lib/utils";
import { api } from "@/services/api";
import { Edit, Trash } from "lucide-react";
import { useEffect, useState } from "react";

export function DashBoard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="flex h-full">
      <main className="flex flex-col flex-1 ">
        <Card className="flex-1 overflow-x-hidden overflow-y-auto custom-scroll">
          <div className="mt-3 mx-5">
            <span className=" text-lg">Todos os produtos</span>
          </div>
          <div className="flex flex-col ">
            <table className="table-auto border-collapse border w-[98%] m-4 text-sm">
              <thead>
                <tr className="">
                  <th className="border px-4 py-2 text-left">SR No.</th>
                  <th className="border px-4 py-2 text-left">Nome</th>
                  <th className="border px-4 py-2 text-left">Preço</th>
                  <th className="border px-4 py-2 text-left">Imagem</th>
                  <th className="border px-4 py-2 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item._id} className="">
                    <td className="border  pl-2">{item._id.slice(0, 8)}</td>
                    <td className="border  p-2 truncate max-w-20  md:max-w-40">
                      {item.name}
                    </td>
                    <td className="border  p-2">R$ {item.basePrice}</td>
                    <td className="border  p-2 pl-5 w-2 text-center ">
                      <img
                        src={item.imageUrls[0]}
                        alt={item.name}
                        className="h-10 w-10 object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://static-00.iconduck.com/assets.00/image-x-generic-icon-256x256-vemtnuvp.png";
                        }}
                      />
                    </td>
                    <td className="border">
                      <div className="flex gap-2 ml-4">
                        <button className="p-2 bg-blue-500 text-white rounded">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 bg-red-500 text-white rounded">
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  );
}
