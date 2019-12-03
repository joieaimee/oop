import { ProductModel } from "./product-model";

export class Recette {
    private ingredients: Array <ProductModel> = new Array <ProductModel> ();

    private title: string;

    public constructor(title: string) {
        this.title = title;
    }

    public addProduct(product: ProductModel): void {
        this.ingredients.push(product);
    }
    public toString(): string {
        let theRecette: string = ' La recette des ' + this.title + '\n';

        //loop over ingredients array
        this.ingredients.forEach((value: ProductModel) => {
            theRecette += value.toString() + '\n';
            //ASA theRecette = theRecette + value.toString()
        });
        return theRecette;
    }
}