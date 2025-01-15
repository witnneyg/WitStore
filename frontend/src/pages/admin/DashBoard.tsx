import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Product } from "@/lib/utils";
import { api } from "@/services/api";
import { Edit, Trash } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

const token = localStorage.getItem("token");

export function DashBoard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    basePrice: 0,
  });

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

  function handleSelectedProduct(product: Product) {
    setFormData({
      name: product.name,
      basePrice: product.basePrice,
    });
  }

  function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSaveChanges(
    itemId: string,
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!formData.name || !formData.basePrice) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    const newProduct = products.map((productItem) =>
      productItem._id === itemId
        ? { ...productItem, name: formData.name, basePrice: formData.basePrice }
        : productItem
    );

    await api
      .put(`/admin/dashboard/products/${itemId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Erro ao atualizar o produto:", error);
        alert("Houve um erro ao tentar atualizar o produto.");
      });

    setProducts(newProduct);
  }

  function handleDeleteChanges(itemId: string) {
    const newProduct = products.filter((product) => product._id !== itemId);

    setProducts(newProduct);
  }

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
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="p-2 text-white rounded"
                              onClick={() => handleSelectedProduct(item)}
                            >
                              <Edit size={16} />
                            </Button>
                          </DialogTrigger>

                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Editar Produto</DialogTitle>

                              <DialogDescription className="flex flex-col gap-4">
                                <form
                                  onSubmit={(e) =>
                                    handleSaveChanges(item._id, e)
                                  }
                                >
                                  <div className="flex flex-col gap-2 mt-4">
                                    <label
                                      htmlFor="name"
                                      className="font-medium text-white"
                                    >
                                      Nome
                                    </label>
                                    <input
                                      type="text"
                                      id="name"
                                      name="name"
                                      value={formData.name}
                                      className="mt-1 p-2 border text-white border-black rounded w-full bg-[#252424]"
                                      onChange={handleChanges}
                                    />
                                  </div>

                                  <div className="flex flex-col gap-2">
                                    <label
                                      htmlFor="basePrice"
                                      className="block font-medium text-white"
                                    >
                                      Preço
                                    </label>
                                    <input
                                      type="number"
                                      id="basePrice"
                                      name="basePrice"
                                      value={formData.basePrice}
                                      className="mt-1 p-2 border text-white border-black rounded w-full bg-[#252424]"
                                      onChange={handleChanges}
                                    />
                                  </div>

                                  <DialogFooter>
                                    <DialogClose
                                      className="flex justify-end gap-2"
                                      asChild
                                    >
                                      <Button
                                        type="button"
                                        className="p-2 rounded"
                                        variant="destructive"
                                      >
                                        Cancelar
                                      </Button>
                                    </DialogClose>
                                    <DialogClose>
                                      <Button type="submit">Salvar</Button>
                                    </DialogClose>
                                  </DialogFooter>
                                </form>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="destructive"
                          className="p-2 rounded"
                          onClick={() => handleDeleteChanges(item._id)}
                        >
                          <Trash size={16} />
                        </Button>
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
