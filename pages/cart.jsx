import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";
import CartEmpty from "./cartProps/cartEmpty";
import dynamic from "next/dynamic";
import {useRouter}  from "next/navigation";
import { Store } from "../store2/Store";
function Cart() {
  const router=useRouter()
  const { state, dispatch } = useContext(Store);
  const removeCartIem = (item) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: item });
  };
  const updateCart = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity } });
  };
  console.log(state);
  return (
    <div className="wrapper mt-[80px] w-[90%] mx-auto">
      <div className="border mb-4" />
      <h1 className="text-xl mb-[30px]">Cart</h1>
      <div className={` w-full`}>
        <div className={`w-full`}>
          {state.cart.cartItems.length === 0 ? (
            <div className="mt-[80px] text-center">
              <h2>cart is empty go back to shooping</h2>
              <CartEmpty />
            </div>
          ) : (
            <div className="lg:flex">
              <div className="lg:w-[70%] flex-1 border">
              {state.cart.cartItems.map((item) => (
                <div
                  className=""
                  key={item.slug}
                >
                  <div>
                    <div className="border mb-4" />
                    <div className="flex items-top gap-10 ">
                      <Image
                        src={item.img}
                        alt={item.slug}
                        width={300}
                        height={300}
                        className="w-[100px] h-[100px]  md:w-[300px] md:h-[300px]"
                      />
                      <div className="w-full md:w-1/2 flex">
                        <div>
                          <div className="flex">
                          <h2 className="pb-2 flex-1">{item.name}</h2>
                          <div>
                          <select
                            value={item.quantity}
                            onChange={(e) => updateCart(item, e.target.value)}
                          >
                            {[...Array(item.stock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>

                          </div>
                          <button onClick={() => removeCartIem(item)}>
                          <XCircleIcon
                            className="h-6 w-6"
                            size={32}
                          ></XCircleIcon>
                        </button>
                          </div>
                          <p className="text-sm w-[80%]">{item.description}</p>
                          <p className="py-2">${item.price}</p>
                          <Image src="/images/check.png" alt="" width={20} height={20} className="mt-10"/>
                        </div>
                       
                        
                      </div>
                     
                    </div>
                    
                  </div>
                </div>
                
              ))}
              </div>
              <div className="card p-5 lg:w-[24%] bg-gray-100 h-[200px] rounded-md lg:ml-2">
                <ul>
                  <li>
                    
                    <div className="pb-3 text-xl">
                      Subtotal (
                      {state.cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      ) : $
                      {state.cart.cartItems.reduce(
                        (a, c) => a + c.quantity * c.price,
                        0
                      )}
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push("/checkout")}
                      className="primary-button w-full"
                    >
                      Check Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
