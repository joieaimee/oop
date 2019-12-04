import { threadId } from "worker_threads";

/**
 * @name ProductModel
 * @author Aélion - Déc. 2019 - amaiys@hotmail.com
 * @version 1.0.0
 * @package models
 *
 */
export abstract class ProductModel {
    /**
     * Name of the product ( i.e : Lait, Farine, oeuf, ...)
     */
    protected name: string;

    /**
     * @var string
     * 
     * Base unit for the quantities of product (i.e : l, kg, unity, ...)
     */

    protected baseUnit: string;

   
    public setName(name: string) : void {
        if (this.name == null) {
            this.name = name;
        }
    }

    public getName(): string {
        return this.name = this.name;
    }

    public setBaseUnit(baseUnit: string) : void {
        this.baseUnit = baseUnit;
    }

    public getBaseUnit(): string{
        return this.baseUnit;
    }

    protected price: number;

    public setPrice(price: number) : void {
        this.price = price;
    }

    public getPrice():number{
        return this.price;
    }

    protected targetQuantity: number;

    public setTargetQuantity(targetQuantity: number){
        this.targetQuantity = targetQuantity;
    }

    public getTargetQuantity(): number{
        return this.targetQuantity
    }

    protected strategy : number
    public setStrategy(strategy : number) : void{
        if (strategy > 0 && strategy <=3) {
            this.strategy = strategy;
        } else {
            this.strategy =1;
        }
    }

    public toString(): string {
        if (this.strategy == 1) {
            return this.name + ' [' + this.baseUnit + ']';
        }
           
        if (this.strategy == 2) {
            return this.name + ' [' + this.baseUnit + ']' + ' [' + this.price +']';
        }

        if (this.strategy ==3) {
            return this.name;
        }
       
    }

} 