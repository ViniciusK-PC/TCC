"use client";
import { DashboardSidebar } from "@/components";
import { isValidEmailAddressFormat, isValidNameOrLastname } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface OrderProduct {
  id: string;
  customerOrderId: string;
  productId: string;
  quantity: number;
  product: {
    id: string;
    slug: string;
    title: string;
    mainImage: string;
    price: number;
    rating: number;
    description: string;
    manufacturer: string;
    inStock: number;
    categoryId: string;
  };
}

const AdminSingleOrder = () => {
  const [orderProducts, setOrderProducts] = useState<OrderProduct[]>();
  const [order, setOrder] = useState<Order>({
    id: "",
    adress: "",
    apartment: "",
    company: "",
    dateTime: "",
    email: "",
    lastname: "",
    name: "",
    phone: "",
    postalCode: "",
    city: "",
    country: "",
    orderNotice: "",
    status: "processing",
    total: 0,
  });
  const params = useParams<{ id: string }>();

  const router = useRouter();

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await fetch(
        `http://localhost:3001/api/orders/${params?.id}`
      );
      const data: Order = await response.json();
      setOrder(data);
    };

    const fetchOrderProducts = async () => {
      const response = await fetch(
        `http://localhost:3001/api/order-product/${params?.id}`
      );
      const data: OrderProduct[] = await response.json();
      setOrderProducts(data);
    };

    fetchOrderData();
    fetchOrderProducts();
  }, [params?.id]);

  const updateOrder = async () => {
    if (
      order?.name.length > 0 &&
      order?.lastname.length > 0 &&
      order?.phone.length > 0 &&
      order?.email.length > 0 &&
      order?.company.length > 0 &&
      order?.adress.length > 0 &&
      order?.apartment.length > 0 &&
      order?.city.length > 0 &&
      order?.country.length > 0 &&
      order?.postalCode.length > 0
    ) {
      if (!isValidNameOrLastname(order?.name)) {
        toast.error("You entered invalid name format");
        return;
      }

      if (!isValidNameOrLastname(order?.lastname)) {
        toast.error("You entered invalid lastname format");
        return;
      }

      if (!isValidEmailAddressFormat(order?.email)) {
        toast.error("You entered invalid email format");
        return;
      }

      fetch(`http://localhost:3001/api/orders/${order?.id}`, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((response) => {
          if (response.status === 200) {
            toast.success("Order updated successfuly");
          } else {
            throw Error("There was an error while updating a order");
          }
        })
        .catch((error) =>
          toast.error("There was an error while updating a order")
        );
    } else {
      toast.error("Please fill all fields");
    }
  };

  const deleteOrder = async () => {
    const requestOptions = {
      method: "DELETE",
    };

    fetch(
      `http://localhost:3001/api/order-product/${order?.id}`,
      requestOptions
    ).then((response) => {
      fetch(
        `http://localhost:3001/api/orders/${order?.id}`,
        requestOptions
      ).then((response) => {
        toast.success("Order deleted successfully");
        router.push("/admin/orders");
      });
    });
  };

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto xl:h-full max-xl:flex-col max-xl:gap-y-5">
      <DashboardSidebar />
      <div className="flex flex-col gap-y-7 xl:ml-5 w-full max-xl:px-5">
        <h1 className="text-3xl font-semibold">Detalhes do pedido</h1>
        <div className="mt-5">
          <label className="w-full">
            <div>
              <span className="text-xl font-bold">ID do pedido:</span>
              <span className="text-base"> {order?.id}</span>
            </div>
          </label>
        </div>
        <div className="flex gap-x-2 max-sm:flex-col">
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Nome:</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={order?.name}
                onChange={(e) => setOrder({ ...order, name: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Sobrenome:</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={order?.lastname}
                onChange={(e) =>
                  setOrder({ ...order, lastname: e.target.value })
                }
              />
            </label>
          </div>
        </div>

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Numero De Telefone:</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={order?.phone}
              onChange={(e) => setOrder({ ...order, phone: e.target.value })}
            />
          </label>
        </div>

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Endereço de email:</span>
            </div>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              value={order?.email}
              onChange={(e) => setOrder({ ...order, email: e.target.value })}
            />
          </label>
        </div>

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Empresa (optional):</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={order?.company}
              onChange={(e) => setOrder({ ...order, company: e.target.value })}
            />
          </label>
        </div>

        <div className="flex gap-x-2 max-sm:flex-col">
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Endereço:</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={order?.adress}
                onChange={(e) => setOrder({ ...order, adress: e.target.value })}
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Apartmento, suite, etc. :</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={order?.apartment}
                onChange={(e) =>
                  setOrder({ ...order, apartment: e.target.value })
                }
              />
            </label>
          </div>
        </div>

        <div className="flex gap-x-2 max-sm:flex-col">
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Cidade:</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={order?.city}
                onChange={(e) => setOrder({ ...order, city: e.target.value })}
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">País:</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={order?.country}
                onChange={(e) =>
                  setOrder({ ...order, country: e.target.value })
                }
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Codigo Postal:</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={order?.postalCode}
                onChange={(e) =>
                  setOrder({ ...order, postalCode: e.target.value })
                }
              />
            </label>
          </div>
        </div>

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Status do pedido</span>
            </div>
            <select
              className="select select-bordered"
              value={order?.status}
              onChange={(e) =>
                setOrder({
                  ...order,
                  status: e.target.value as
                    | "processing"
                    | "delivered"
                    | "canceled",
                })
              }
            >
              <option value="processing">Prossessando</option>
              <option value="delivered">Entregue</option>
              <option value="canceled">Cancelado</option>
            </select>
          </label>
        </div>
        <div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Aviso do Pedido:</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              value={order?.orderNotice || ""}
              onChange={(e) =>
                setOrder({ ...order, orderNotice: e.target.value })
              }
            ></textarea>
          </label>
        </div>
        <div>
          {orderProducts?.map((product) => (
            <div className="flex items-center gap-x-4" key={product?.id}>
              <Image
                src={product?.product?.mainImage ? `/${product?.product?.mainImage}` : "/product_placeholder.jpg"}
                alt={product?.product?.title}
                width={50}
                height={50}
                className="w-auto h-auto"
              />
              <div>
                <Link href={`/product/${product?.product?.slug}`}>
                  {product?.product?.title}
                </Link>
                <p>
                  R${product?.product?.price} X {product?.quantity} items
                </p>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-y-2 mt-10">
            <p className="text-2xl">Subtotal: R${order?.total}</p>
            <p className="text-2xl">Taxa 20%: R${order?.total / 5}</p>
            <p className="text-2xl">Envio: R$5</p>
            <p className="text-3xl font-semibold">
              Total: R${order?.total + order?.total / 5 + 5}
            </p>
          </div>
          <div className="flex gap-x-2 max-sm:flex-col mt-5">
            <button
              type="button"
              className="uppercase bg-blue-500 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2"
              onClick={updateOrder}
            >
              Atualizar pedido
            </button>
            <button
              type="button"
              className="uppercase bg-red-600 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2"
              onClick={deleteOrder}
            >
              Delete Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSingleOrder;
