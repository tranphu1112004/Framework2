// service/product.ts

import instance from "../config/axios";
import { formType } from "../interface/Product";

export const GetAllProduct = async () => {
    try {
        const { data } = await instance.get('products'); // Cập nhật đường dẫn
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const GetProduct = async (id:  string) => {
    try {
        const { data } = await instance.get(`products/${id}`); // Cập nhật đường dẫn
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const AddProduct = async (formdata: formType) => {
    try {
        const { data } = await instance.post('products', formdata); // Cập nhật đường dẫn
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const EditProduct = async (formdata: formType, id:  string) => {
    try {
        const { data } = await instance.put(`products/${id}`, formdata); // Cập nhật đường dẫn
        return data;
    } catch (err) {
        console.log(err);
    }
}

export const DeleteProduct = async (id:  string) => {
    try {
        await instance.delete(`products/${id}`); // Cập nhật đường dẫn
    } catch (err) {
        console.log(err);
    }
}
