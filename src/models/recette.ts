
import { QuantityProduct } from "./quantity-product";

export class Recette {
    private ingredients: Array <QuantityProduct> = new Array <QuantityProduct> ();

    private price: number = 0;

    private quantityProduced : number = 1;
    private title: string;
    private unitPrice: number;

    public setQuantityProduced(quantity :number) : void {
        this.quantityProduced = quantity;
    }
    public getQuantityProduced() : number{
        return this.quantityProduced
    }
    public constructor (title: string) {
        this.title = title;
    }
    public getTitle(): string {
        return this.title;
    }

    public getUnitPrice() : number {
        return this.unitPrice
    }

    public addProduct(product: QuantityProduct): void {
        product.setUnitPrice();
        this.ingredients.push(product);
        this.price += product.getUnitPrice();
        this.unitPrice = this.price/ this.quantityProduced;
    }

    public getPriceRecette(): number {
        return this.price
    }

    public toString() : string {
        let theRecette: string = '';

        //loop over ingredients array
        this.ingredients.forEach((value: QuantityProduct) => {
            theRecette += value.toString() + '\n';
            //ASA theRecette = theRecette + value.toString()
        });
        return theRecette;
    }


    
}