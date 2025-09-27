import axios from "axios";
import type { dtoProduct, dtoProductu, responseP } from "../helpers/Type";

interface response{
    ok:boolean
    message:string
    status:number
}

export class Productsrvice{
    constructor(){

    }

    async getAll(page:number):Promise<responseP>{

        try {
            const result = await axios.get(`https://crispy-yodel-6q647445xw73549-3000.app.github.dev/api/products?page=${page}&pageSize=5`)
            return result.data
        } catch (error) {
            throw error;
        
        }
    }

    async save(data:dtoProduct):Promise<response>{

        try {
            const result = await axios.post(`https://crispy-yodel-6q647445xw73549-3000.app.github.dev/api/products`,data)
            return result.data
        } catch (error) {
            throw error;
        
        }
    }

     async update(data:dtoProductu):Promise<response>{
        const update  = {
            name:data.name,
            supplier:data.supplier,
            price:parseFloat(data.price),
            quantity:data.quantity
        }

        try {
            const result = await axios.patch(`https://crispy-yodel-6q647445xw73549-3000.app.github.dev/api/products/${data.id}`,update)
            return result.data
        } catch (error) {
            throw error;
        
        }
    }

    async delet(id:number):Promise<response>{
      

        try {
            const result = await axios.delete(`https://crispy-yodel-6q647445xw73549-3000.app.github.dev/api/products/${id}`)
            return result.data
        } catch (error) {
            throw error;
        
        }
    }

    
}