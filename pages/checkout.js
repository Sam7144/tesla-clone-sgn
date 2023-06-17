import Image from "next/image";
import react, { useContext } from "react";
import { Store } from "../store2/Store";
import dynamic from "next/dynamic";
import CartEmpty from "./cartProps/cartEmpty";
import { useRouter } from "next/navigation";
import Link from "next/link";
function CheckoutPage() {
  const { state, dispatch } = useContext(Store);
  console.log(state.cart.cartItems);
  const router = useRouter();
  const orderPage = () => {
    router.push("/order");
  };
  return (
    <>
      {state.cart.cartItems.length === 0 ? (
        <div className="mt-[80px] text-center">
          <h2>cart is empty go back to shooping</h2>
          <CartEmpty />
        </div>
      ) : (
        <main className="lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse">
          <h1 className="sr-only mt-[80px]">Checkout</h1>

          {/* Order summary */}
          <section className="hidden bg-gray-50 w-full max-w-md flex-col lg:flex mt-16">
            <h2 className="sr-only">Order summary</h2>

            <ul className="flex-auto overflow-y-auto divide-y divide-gray-200 px-6">
              {state.cart.cartItems.map((product) => (
                <li key={product.slug} className="flex py-6 space-x-6">
                  <Image
                    src={product.img}
                    alt=""
                    width={400}
                    height={400}
                    className="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md"
                  />
                  <div className="flex flex-col justify-between space-y-4">
                    <div className="text-sm font-medium space-y-1">
                      <h3 className="text-gray-900">{product.name}</h3>
                      <p className="text-gray-900"> price -$ {product.price}</p>
                      <p className="text-gray-500">
                        {product.description.substring(0, 50).concat("...")}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="sticky bottom-0 flex-none bg-gray-50 border-t border-gray-200 p-6">
              <dl className="text-sm font-medium text-gray-500 mt-1">
                <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-2">
                  <dt>Total</dt>
                  <dd className="text-base">
                    {" "}
                    ({state.cart.cartItems.reduce((a, c) => a + c.quantity, 0)})
                    : $
                    {state.cart.cartItems.reduce(
                      (a, c) => a + c.quantity * c.price,
                      0
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Checkout form */}
          <section className="flex-auto overflow-y-auto px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24">
            <h2 id="payment-heading" className="sr-only">
              Payment and shipping details
            </h2>

            <div className="max-w-lg mx-auto lg:pt-16">
              <form className="mt-6" onSubmit={orderPage}>
                <div className="grid grid-cols-12 gap-y-6 gap-x-4">
                  <div className="col-span-full">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email-address"
                        autoComplete="email"
                        className="appearance-none block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="name-on-card"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name on card
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name-on-card"
                        autoComplete="cc-name"
                        className="appearance-none block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Card number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="card-number"
                        autoComplete="cc-number"
                        className="appearance-none block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-8 sm:col-span-9">
                    <label
                      htmlFor="expiration-date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Expiration date (MM/YY)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="expiration-date"
                        autoComplete="cc-exp"
                        className="appearance-none block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-4 sm:col-span-3">
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="cvc"
                        autoComplete="csc"
                        className="appearance-none block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="address"
                        autoComplete="street-address"
                        className="appearance-none block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full sm:col-span-4">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="city"
                        autoComplete="address-level2"
                        className="appearance-none block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full sm:col-span-4">
                    <label
                      htmlFor="regino"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="regino"
                        autoComplete="address-level1"
                        className="appearance-none block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full sm:col-span-4">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="appearance-none block w-full px-3 py-2  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex space-x-2">
                  <div className="flex items-center h-5">
                    <input
                      id="same-as-shipping"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 border-gray-100 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                  <label
                    htmlFor="same-as-shipping"
                    className="text-sm font-medium text-gray-900"
                  >
                    Billing address is the same as shipping address
                  </label>
                </div>
                <div className="h-[80px] w-full  pt-[40px]">
                  <Link href="/order" legacyBehavior>
                    <a
                      className="w-[100%] py-3 bg-indigo-600 border border-transparent rounded-md 
              shadow-sm  px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none
               focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
                    >
                      pay(
                      {state.cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      ) : $
                      {state.cart.cartItems.reduce(
                        (a, c) => a + c.quantity * c.price,
                        0
                      )}
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
export default dynamic(() => Promise.resolve(CheckoutPage), { ssr: false });
