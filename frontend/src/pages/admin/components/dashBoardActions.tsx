import { Button } from "@/components/ui/button";
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
import { FormEvent } from "react";

const token = localStorage.getItem("token");

interface DashBoardActionsProps {
  products: Product[];
  formData: { name: string; basePrice: number };
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setFormData: React.Dispatch<
    React.SetStateAction<{ name: string; basePrice: number }>
  >;
  item: Product;
}

export function DashBoardActions({
  products,
  setProducts,
  formData,
  setFormData,
  item,
}: DashBoardActionsProps) {
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
              <form onSubmit={(e) => handleSaveChanges(item._id, e)}>
                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="name" className="font-medium text-white">
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
                  <DialogClose className="flex justify-end gap-2" asChild>
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
  );
}
