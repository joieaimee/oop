import { ProductModel } from "./models/product-model";
import { Recette } from "./models/recette";

/**
 * @name Main
 * @author Aélion - Déc. 2019 - amaiys@hotmail.com
 * @package /
 * @version 1.0.0
 * Entry point of the application
 */


const strategy : number=2;

const lesCrepes: Recette = new Recette('crèpes');

let produit1: ProductModel = new ProductModel();
produit1.setName('Farine');
produit1.setBaseUnit('kg');
produit1.setPrice(2);
produit1.setTargetQuantity(300);
produit1.setStrategy(strategy);

let produit2: ProductModel = new ProductModel();
produit2.setName('Lait');
produit2.setBaseUnit('l');
produit2.setPrice(5);
produit2.setTargetQuantity(1);
produit2.setStrategy(strategy);

lesCrepes.addProduct(produit1);
lesCrepes.addProduct(produit2);

const lesGauffre: Recette = new Recette ('Gauffres');
lesGauffre.addProduct(produit1);
lesGauffre.addProduct(produit2);
produit1.setStrategy(strategy);


console.log(lesCrepes.toString());
console.log(lesGauffre.toString());


