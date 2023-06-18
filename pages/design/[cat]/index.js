import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { Store } from "../../../store2/Store";
import Link from "next/link"
const CarsComponets = ({ datta }) => {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const product = datta;
  const addToCart = () => {
    const existitem = state.cart.cartItems.find((x) => x.name === product.name);
    const quantity = existitem ? existitem.quantity + 1 : 1;
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
    router.push("/cart");
  };
  return (
    <div className="bg-white wrapper mt-[80px] grid grid-cols-1 w-full md:grid-cols-2 gap-10 px-3">
      <Image
        src={datta.img}
        width={600}
        height={800}
        alt={datta.slug}
        className="w-full md:w-[600px] border rounded-[20 px]"
      />
      <div className="mt-4">
        <h1 className="font-bold text-2xl ">{datta.name}</h1>
        <div className="flex py-2 text-center md:text-left">
          <Image src="/images/star.svg" width={20} height={20} alt="" />
          <Image src="/images/star.svg" width={20} height={20} alt="" />
          <Image src="/images/star.svg" width={20} height={20} alt="" />
          <Image src="/images/star.svg" width={20} height={20} alt="" />
        </div>
        <p className=" text-gray-400 py-3 ">{datta.description}</p>
        <h1 className="font-medium pb-2">Price-${datta.price}</h1>
        <div className="flex space-x-2">
          <Image src="/images/check.png" width={20} height={20} alt="" />
          <p className="text-gray-400">{datta.stcok}</p>
        </div>
        <button
          className="my-5 py-4 bg-blue-700 text-white font-medium text-sm 
      rounded-md hover:bg-blue-400 w-[250px]"
          onClick={addToCart}
        >
          ADD TO CART
        </button>
        <div className="border mt-3 mb-10" />
        <div className="">
          <h1 className="text-xl font-medium">HighLights</h1>
          <ul className="list-decimal text-gray-300 ">
            <li className="list-decimal my-2 ">25 yrs Tile Warranty</li>
            <li className="list-decimal mb-2">24/7 Outage Protection</li>
            <li className="list-decimal mb-2">Summon</li>
            <li className="list-decimal mb-2">power your home</li>
            
          </ul>
        </div>
        <div className="border my-5" />
        <h2 className="py-4 opacity-70">share</h2>
        <div className="flex space-x-3 items-center mb-6">
          <Link href="#" legacyBehavior>
            <a className="rounded-full">
              <Image
                src="/images/icon-facebook.svg"
                width={20}
                height={20}
                alt="fb"
              />
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a>
              <Image
                src="/images/icon-youtube.svg"
                width={20}
                height={20}
                alt="fb"
              />
            </a>
          </Link>
          <Link href="#" legacyBehavior>
            <a>
              <Image
                src="/images/icon-twitter.svg"
                width={20}
                height={20}
                alt="fb"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CarsComponets;
export async function getStaticPaths() {
  const { models } = await import("../../components/data/cars.json");
  const allpaths = models.map((path) => {
    return {
      params: {
        cat: path.slug.toString(),
        // id:path.name
      },
    };
  });
  return {
    paths: allpaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.cat;
  const { models } = await import("../../components/data/cars.json");
  const Data = models.find((ev) => id === ev.slug);
  return {
    props: { datta: Data, id },
  };
}
