import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { Productsrvice } from "../services/Productsrvice";
import { DtaContext } from "../context/DtaContext";

export function FormEdit(){

  const services= new Productsrvice()


   const [isVisible, setIsVisible] = useState(false);
   const [response,setResponse]=useState({ok:true,message:''})

   const context  =useContext(DtaContext)
   const {update,setUpdate } = context;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  };

  let mensaje =
  <div className="space-y-6 p-4 max-w-screen-xl mx-auto">
   <div className="bg-red-100 text-red-800 p-4 rounded-lg" role="alert">
        <span className="font-semibold text-[15px] inline-block mr-4">Error!</span>
        <span className="block text-sm font-medium sm:inline max-sm:mt-2">{response.message}</span>
      </div>
      </div>;

   const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(update)

    try {
      const response = await services.save(update)
      console.log(response)
      setResponse({ok:response.ok,message:response.message});
      setIsVisible(true)
      setUpdate(0);
    } catch (error) {
      console.log(error)
      
    }

   }

   useEffect(() => {
    // Si el mensaje es visible, inicia un temporizador
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false); // Oculta el mensaje después de 1000 ms (1 segundo)
      }, 1000);

      // Limpia el temporizador si el componente se desmonta antes de que pase el segundo
      return () => clearTimeout(timer);
    }
  }, [isVisible]); // El efecto se ejecuta cada vez que 'visible' cambia

  if(response.ok){
    mensaje=<div className="space-y-6 p-4 max-w-screen-xl mx-auto">
          <div className="bg-green-100 text-green-800 p-4 rounded-lg" role="alert">
            <span className="font-semibold text-[15px] inline-block mr-4">Success!</span>
            <span className="block text-sm font-medium sm:inline max-sm:mt-2">{response.message}</span>
        </div>

      </div>
  }


    return(
        <div className="p-4 mx-auto max-w-xl bg-white ">

          
          
        <h2 className="text-3xl text-slate-900 font-bold">Actualisar Producto</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Name</label>
            <input type='text' placeholder='Enter Name'
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              name="name"
              value={update.name}
              onChange={handleChange}
               />
          </div>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Supplier</label>
            <input type='text' placeholder='Enter Supplier'
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              name="supplier"
              value={update.supplier}
              onChange={handleChange} />
          </div>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Price</label>
            <input type='number' placeholder='Enter Price'
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
              name="price"
              value={update.price}
              onChange={handleChange} />
          </div>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Quantity</label>
            <input type="number" placeholder='Enter Quantity' 
              className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-1 outline-0 transition-all"
              name="quantity"
              value={update.quantity}
              onChange={handleChange}/>
          </div>
          <button type='submit'
            className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer">actualizar</button>
        </form>

       {isVisible &&  mensaje}
        
      </div>
    )
}