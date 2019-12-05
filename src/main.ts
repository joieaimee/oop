import * as $ from 'jquery';
import { ReceipeFormModule } from './modules/receipe-form-module';
/**
 * @name Main
 * @author Aélion - Déc.2019 - amaiys@hotmail.com
 * @package
 * @version 1.0.0
 */
export class Main {
    public constructor() {
        new ReceipeFormModule();
    }
}

// App bootstraping with jQuery
// Create a new instance of the main class
// After the document was completely loaded

// App initializer (new instance of the Main Class)
$(document).ready(() => {
    const app: Main = new Main ();
});

    