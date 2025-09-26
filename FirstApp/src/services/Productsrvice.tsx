import axios from "axios";
import type { responseP } from "../helpers/Type";

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
}