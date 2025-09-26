export function FormAdd(){
    return(
        <div className="p-4 mx-auto max-w-xl bg-white">
        <h2 className="text-3xl text-slate-900 font-bold">Crear Producto</h2>
        <form className="mt-8 space-y-5">
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Name</label>
            <input type='text' placeholder='Enter Name'
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Supplier</label>
            <input type='email' placeholder='Enter Supplier'
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Price</label>
            <input type='text' placeholder='Enter Price'
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
          </div>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Quantity</label>
            <textarea placeholder='Enter Quantity' 
              className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all"></textarea>
          </div>
          <button type='button'
            className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer">Send message</button>
        </form>
      </div>
    )
}