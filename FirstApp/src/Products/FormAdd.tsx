import { useState, type ChangeEvent, type FormEvent } from "react"
import { Productsrvice } from "../services/Productsrvice";

export function FormAdd(){

  const services= new Productsrvice()

  const [formData,setFormData]=useState({name:'',supplier:'',price:0,quantity:0})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formData)
    try {
      console.log(await services.save(formData))
    } catch (error) {
      console.log('error',error)
      
    }
   }


    return(
        <div className="p-4 mx-auto max-w-xl bg-white ">
        <h2 className="text-3xl text-slate-900 font-bold">Crear Producto</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Name</label>
            <input type='text' placeholder='Enter Name'
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              name="name"
              value={formData.name}
              onChange={handleChange}
               />
          </div>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Supplier</label>
            <input type='text' placeholder='Enter Supplier'
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange} />
          </div>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Price</label>
            <input type='number' placeholder='Enter Price'
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              name="price"
              value={formData.price}
              onChange={handleChange} />
          </div>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Quantity</label>
            <input type="number" placeholder='Enter Quantity' 
              className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-1 outline-0 transition-all"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}/>
          </div>
          <button type='submit'
            className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer">Send message</button>
        </form>
      </div>
    )
}