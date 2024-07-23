export interface IProduct {
  id: string;
  name: string;
  image: string;
  image2: string;
  image3: string;
  price: number;
  salePrice: number;
  category: string;
  sales: number;
  discription: string;
  about: string;
  reviews: {
    rating: number;
    comment: string;
    user: string;
  }[];
  sale: boolean | string;
  quantity: number;
}

export type formType = Pick<IProduct,'name'|'price'|'image'|'image2'|'image3'|'category'|'salePrice'|'discription'|'about'|'sale'>
export type cartType = Pick<IProduct,'name'|'price'|'image'|'sale'|'category'|'salePrice'>