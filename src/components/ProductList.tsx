import { useEffect, useState } from "react";
import DowMenu from "./dowMenu";
import Inputbot from "./input";
import List from "./List";
import { ICategory } from "../interface/Category";
import { GetAllCategory } from "../service/category";
import { IProduct } from "../interface/Product";
import { GetAllProduct } from "../service/product";

const ListProduct = () => {
  const [collection, setCollection] = useState<ICategory[]>([]);
  const [product, setProduct] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const data = await GetAllCategory();
      const productData = await GetAllProduct();
      setCollection(data);
      setProduct(productData);
      
    })();
  }, []);
  return (
    <>
      <DowMenu category={collection} />
      <List product={product} />
      <Inputbot />
    </>
  );
};

export default ListProduct;
