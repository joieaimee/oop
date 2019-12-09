import { ProductModel } from "./product-model";
import { ConvertHelper } from "./../helpers/convert-helpers";

/**
 * @name QuantityProduct
 * @author Aélion - Déc. 2019 - amaiys@hotmail.com
 * @package models
 * @version 1.0.0
 * 
 * Specify quantities and unit of a product for a recipe
 */
export class QuantityProduct extends ProductModel {
    /**
     * @var number
     * 
     * Required quantity of the product for the receipe
     */

     /**
      * @var string
      * 
      * Unit for the quantity
      */

     private quantity : number;

     private unit: string;

     /**
      * @var Pricing of the product for a receipe
      */

     private unitPrice: number

     public getUnitPrice() : number {
         return this.unitPrice
     }

     public setQuantity(quantity:number): void {
         this.quantity = quantity;
     }

     public getQuantity(): number{
         return this.quantity
     }

     public setUnit(unit: string): void {
         this.unit = unit;
     } 

     public getUnit(): string {
         return this.unit;
     }


     public setUnitPrice(): void {
         const convertedQuantity : number = ConvertHelper.weight(this.baseUnit, this.unit, this.quantity);

         if (this.targetQuantity != null) {
             this.unitPrice = (this.price / this.targetQuantity) * convertedQuantity;
         } else {
             this.unitPrice = (this.price * convertedQuantity);
         }
         

     }

     

     
}