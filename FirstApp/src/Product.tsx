import { Outlet } from "react-router-dom";
import { ProductMenu } from "./ProductMenu";
import { ProductsTable } from "./ProductTable";
import './index.css'
import { useState } from "react";
import { FormAdd } from "./FormAdd";

export function Product(){

    const [barraLateral,setBarraLateral]=useState('menu')

    let componente;

    if(barraLateral==='Add'){
        componente=<FormAdd onButtonClick={cammbiar}/>
    }

    function cammbiar(estado:string):void{
        setBarraLateral(estado)

    }


    if(barraLateral=='menu'){
        componente=<ProductMenu onButtonClick={cammbiar}/>
    }

    


    return(
        <div className="flex">
            {componente}


        <div className="w-4/5 p-8">
        <ProductsTable/>
        </div>
        <Outlet /> 
        </div>
    )
}