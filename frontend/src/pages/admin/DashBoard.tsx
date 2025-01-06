import { Card } from "@/components/ui/card";
import { Edit, Trash } from "lucide-react";

export function DashBoard() {
  const data = [
    {
      id: 1,
      name: "CPU Fan",
      price: "57",
      picture: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "GPU",
      price: "399",
      picture: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "GPU",
      price: "399",
      picture: "https://via.placeholder.com/50",
    },
    {
      id: 1,
      name: "CPU Fan",
      price: "57",
      picture: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "GPU",
      price: "399",
      picture: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="flex h-full">
      <main className="flex flex-col flex-1 p-3">
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
                {data.map((item, index) => (
                  <tr key={item.id} className="">
                    <td className="border  p-2">{index + 1}</td>
                    <td className="border  p-2">{item.name}</td>
                    <td className="border  p-2">R$ {item.price}</td>
                    <td className="border  p-2">
                      <img
                        src={item.picture}
                        alt={item.name}
                        className="h-10 w-10 object-cover"
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
