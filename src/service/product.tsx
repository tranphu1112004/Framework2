import instance from "../config/axios"
import { formType } from "../interface/Product"
export const GetAllProduct = async ()=>{
    try{
        const {data} = await instance.get('products')
        return data
    }catch(err){
        console.log(err)
    }
}
export const GetProduct = async (id:string)=>{
    try{
        const {data} = await instance.get(`product/${id}`)
        return data
    }catch(err){
        console.log(err)
    }
}
export const AddProduct = async (formdata:formType )=>{
    try{
        const {data} = await instance.post(`product`,formdata)
        return data
    }catch(err){
        console.log(err)
    }
}
export const EditProduct = async (formdata:formType,id:string )=>{
    try{
        const {data} = await instance.put(`product/${id}`,formdata)
        return data
    }catch(err){
        console.log(err)
    }
}
export const DeleteProduct = async (id:string )=>{
    try{
        await instance.delete(`product/${id}`)
    }catch(err){
        console.log(err)
    }
}