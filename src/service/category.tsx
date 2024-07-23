import instance from "../config/axios"
// import { ICategory } from "../interface/category"
export const GetAllCategory = async ()=>{
    try{
        const {data} = await instance.get('category')
        return data
    }catch(err){
        console.log(err)
    }
}