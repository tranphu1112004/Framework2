import React, { useContext, useEffect, useState } from 'react'
import { formType, IProduct } from '../../interface/Product'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { GetProduct } from '../../service/product'
import { productCT } from '../../context/productContext'
import { ICategory } from '../../interface/Category'
import { GetAllCategory } from '../../service/category'

const EditProduct: React.FC = () => {
  const { onSubmitUpdate } = useContext(productCT)
  const [categories, setCategories] = useState<ICategory[]>([])
  const [product] = useState<IProduct[]>([])
  const { register, handleSubmit, reset, formState: { errors } } = useForm<formType>()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const prodoctcllllll = async () => {
      if (id) {
        try {
          const product = await GetProduct(id)
          reset({
            name: product.name,
            image: product.image,
            image2: product.image2 ,
            image3: product.image3 ,
            price: product.price,
            salePrice: product.salePrice,
            category: product.category,
            sale: product.sale,
            about: product.about,
            discription: product.discription,
          })

         
          const categoryData = await GetAllCategory()
          setCategories(categoryData)
        } catch (error) {
          console.error('Error fetching product or categories:', error)
        }
      }
    }

    prodoctcllllll()
  }, [id, reset])

  const onSubmit = async (data: formType) => {
    if (id) {
      try {
        await onSubmitUpdate(data, id)
        navigate('/admin')
      } catch (error) {
        console.error('Error updating product:', error)
      }
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Chỉnh sửa sản phẩm</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">Tên sản phẩm</label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Tên sản phẩm không được để trống", minLength: { value: 6, message: "Tên sản phẩm phải có ít nhất 6 ký tự" } })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${errors.name ? "border-red-500" : ""}`}
            placeholder="Tên sản phẩm"
          />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 ">Ảnh sản phẩm 1</label>
          <input
            id="image"
            type="text"
            {...register("image")}
            className="mt-1 p-2 border border-gray-300 w-[40%] rounded"
            placeholder="Ảnh sản phẩm 1"
          />
        </div>

        <div>
          <label htmlFor="image2" className="block text-sm font-medium text-gray-700 ">Ảnh sản phẩm 2</label>
          <input
            id="image2"
            type="text"
            {...register("image2")}
            className="mt-1 p-2 border border-gray-300 w-[40%] rounded"
            placeholder="Ảnh sản phẩm 2"
          />
        </div>

        <div>
          <label htmlFor="image3" className="block text-sm font-medium text-gray-700 ">Ảnh sản phẩm 3</label>
          <input
            id="image3"
            type="text"
            {...register("image3")}
            className="mt-1 p-2 border border-gray-300 w-[40%] rounded"
            placeholder="Ảnh sản phẩm 3"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 ">Giá sản phẩm</label>
          <input
            id="price"
            type="number"
            {...register("price", { required: "Giá sản phẩm không được để trống", valueAsNumber: true })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${errors.price ? "border-red-500" : ""}`}
            placeholder="Giá sản phẩm"
          />
          {errors.price && <p className="text-red-600 text-xs mt-1">{errors.price.message}</p>}
        </div>

        <div>
          <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700 ">Giá Sale</label>
          <input
            id="salePrice"
            type="number"
            {...register("salePrice", { required: "Giá Sale không được để trống", valueAsNumber: true })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${errors.salePrice ? "border-red-500" : ""}`}
            placeholder="Giá Sale"
          />
          {errors.salePrice && <p className="text-red-600 text-xs mt-1">{errors.salePrice.message}</p>}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 ">Danh mục</label>
          <select
            id="category"
            {...register("category", { required: "Danh mục không được để trống" })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${errors.category ? "border-red-500" : ""}`}
          >
            {product.map((product)=>(
                <option value={product.category}>{product.category}</option>
            ))}
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.name}
              >
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-600 text-xs mt-1">{errors.category.message}</p>}
        </div>

        <div className="space-x-2 m-0">
          <label htmlFor="sale" className="text-sm font-medium text-gray-700 ">Sale:</label>
          <input
            id="sale"
            type="checkbox"
            {...register("sale")}
            className="h-4 w-4 text-indigo-600 border-gray-300 w-[40%] rounded"
          />
        </div>

        <div>
          <label htmlFor="about" className="block text-sm font-medium text-gray-700 ">Giới thiệu sản phẩm</label>
          <textarea
            id="about"
            {...register("about", { required: "Giới thiệu sản phẩm không được để trống" })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${errors.about ? "border-red-500" : ""}`}
            placeholder="Giới thiệu sản phẩm"
          />
          {errors.about && <p className="text-red-600 text-xs mt-1">{errors.about.message}</p>}
        </div>

        <div>
          <label htmlFor="discription" className="block text-sm font-medium text-gray-700 ">Mô tả sản phẩm</label>
          <textarea
            id="discription"
            {...register("discription", { required: "Mô tả sản phẩm không được để trống" })}
            className={`mt-1 p-2 border border-gray-300 w-[40%] rounded ${errors.discription ? "border-red-500" : ""}`}
            placeholder="Mô tả sản phẩm"
          />
          {errors.discription && <p className="text-red-600 text-xs mt-1">{errors.discription.message}</p>}
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Cập nhật
        </button>
      </form>
    </div>
  )
}

export default EditProduct
