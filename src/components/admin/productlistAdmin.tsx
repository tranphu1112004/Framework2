import React, { useEffect, useState } from "react";
import { IProduct } from "../../interface/Product";
import { GetAllProduct } from "../../service/product";
import ListAdmin from "./ListAdmin";

const ListProductAdmin = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const productData = await GetAllProduct();
      setProducts(productData);
    })();
  }, []);

  return (
    <>
      <ListAdmin products={products} />
    </>
  );
};

export default ListProductAdmin;
