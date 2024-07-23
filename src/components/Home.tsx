import Slider from "./slider";
import Inputbot from "./input";
import Category from "./category";
import { useEffect, useState } from "react";
import { IProduct } from "../interface/Product";
import { GetAllProduct } from "../service/product";
import BestSellers from "./bestSellers";
import Collection from "./collection";

const Home = () => {
  useEffect(() => {
    (async () => {
      const data = await GetAllProduct();
      setProducts(data);
    })();
  }, []);
  const [products, setProducts] = useState<IProduct[]>([]);
  return (
    <>
      <Slider />
      <BestSellers products={products} />
      <Category />
      <Collection />
      <Inputbot />
    </>
  );
};

export default Home;
