
import { Recette } from "./models/recette";
import { QuantityProduct } from "./models/quantity-product";

/**
 * @name Main
 * @author Aélion - Déc. 2019 - amaiys@hotmail.com
 * @package /
 * @version 1.0.0
 * Entry point of the application
 */


const strategy : number=2;

const lesCrepes: Recette = new Recette();
lesCrepes.setQuantityProduced(15);

let produit1: QuantityProduct = new QuantityProduct();
produit1.setName('Farine');
produit1.setBaseUnit('kg');
produit1.setPrice(1.80);
produit1.setQuantity(300);
produit1.setUnit('g')
produit1.setStrategy(strategy);

let produit2: QuantityProduct = new QuantityProduct();
produit2.setName('Lait');
produit2.setBaseUnit('l');
produit2.setPrice(0.94);
produit2.setQuantity(60);
produit2.setUnit('cl')
produit2.setStrategy(strategy);

let produit3: QuantityProduct = new QuantityProduct();
produit3.setName('Oeufs');
produit3.setBaseUnit('unité');
produit3.setPrice(0.22);
produit3.setQuantity(3);
produit3.setUnit('unité');
produit3.setStrategy(strategy);

let produit4: QuantityProduct = new QuantityProduct();
produit4.setName('Sucre');
produit4.setBaseUnit('kg');
produit4.setPrice(0.62);
produit4.setQuantity(5);
produit4.setUnit('g');
produit4.setStrategy(strategy);

let produit5: QuantityProduct = new QuantityProduct();
produit5.setName('Rhum');
produit5.setBaseUnit('cl');
produit5.setPrice(9.75);
produit5.setQuantity(5)
produit5.setTargetQuantity(70);
produit5.setUnit('cl');
produit5.setStrategy(strategy);

let produit6: QuantityProduct = new QuantityProduct();
produit6.setName('Beurre');
produit6.setBaseUnit('kg');
produit6.setPrice(19.60);
produit6.setQuantity(50);
produit6.setUnit('g');
produit6.setStrategy(strategy);

lesCrepes.addProduct(produit1);
lesCrepes.addProduct(produit2);
lesCrepes.addProduct(produit3);
lesCrepes.addProduct(produit4);
lesCrepes.addProduct(produit5);
lesCrepes.addProduct(produit6);


console.log(lesCrepes.toString());


console.log(' prix de la recette ' + lesCrepes.getPriceRecette());
console.log(' prix unitaire ' + lesCrepes.getPriceRecette()/lesCrepes.getQuantityProduced());


