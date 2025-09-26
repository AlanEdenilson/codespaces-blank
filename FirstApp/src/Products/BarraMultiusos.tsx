import { useContext, useState } from "react";
import { ProductMenu } from "../ProductMenu";
import { BarraContext } from "../context/BaraContext";
import { FormAdd } from "./FormAdd";


const FlechaAtras = ({ size = 20 }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M19 12H5M5 12L12 19M5 12L12 5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );


export function BarraMultiusos(){
    const context  =useContext(BarraContext)
    const {barra, setBarra } = context;




    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    function rerender(){
        
        setBarra('menu')
        setIsMenuExpanded(false)

    }

    const extendBtn = <button 
            onClick={() => setIsMenuExpanded(!isMenuExpanded)}
            className="fixed bottom-4 left-4 bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors duration-200 z-10"
            >
            {isMenuExpanded ? (
                // Ícono de cerrar (X)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            ) : (
                // Ícono de expandir
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                </svg>
            )}
            </button>

            const btnReverse=<button
                onClick={rerender}
                className="fixed  w-15 h-10 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200 bottom-20 left-5 "
                >
                <FlechaAtras size={20} />
                </button>

          

    let componente = <ProductMenu></ProductMenu>;

        if(barra=='add'){
            componente = <FormAdd></FormAdd>
        }



    return(
        <div className={`
        bg-gray-100 transition-all duration-300 ease-in-out
        ${isMenuExpanded 
            ? 'top-16  fixed inset-0 z-50 w-full' 
            : 'w-1/5'
        }
        `}>

        {componente}


        {(barra) < 'menu'? extendBtn  : "Apple"}
        {(barra) < 'menu'? btnReverse  : "Apple"}

        
            
        </div>
    )
}