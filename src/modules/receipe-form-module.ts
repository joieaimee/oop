import * as $ from 'jquery';
import { Recette } from './../models/recette';
export class ReceipeFormModule {
    private recette: Recette;

    public constructor() {
        this.setcreateButtonHandler();
        this.setFormKeyUpHandler();
        
    }
    public getRecette(): Recette{
        return this.recette;
    }

    private setcreateButtonHandler(): void {
        $('#create-receipe').on(
            'click',
            (event : any): void => this.toggleIngredientForm(event)
        );
    }

    private setFormKeyUpHandler (): void {
        $('#receipe-form').on(
            'keyup change',
            (event: any): void => this.checkFormFill(event)
        );
    }
    private checkFormFill(event:any): void {
       if ($('#receipe-title').val().toString().trim() != '' && $('#receipe-quantity').val().toString().trim() != '') {
         $('#create-receipe').removeAttr('disabled');
       } else {
           $('#create-receipe').attr('disabled', 'disabled');
       }
    }


    private toggleIngredientForm(event: any): void {
       if ($('#ingredient-form').hasClass('hidden-form')) {
           // Set the span for the user
           $('#ingredient-form fieldset legend span').html($('#receipe-title').val().toString());
           //Have to remove the hidden-form class
           $('#ingredient-form').removeClass('hidden-form');

          this.recette = new Recette($('#receipe-title').val().toString());
          this.recette.setQuantityProduced(parseInt($('#receipe-quantity').val().toString()));

           // "Disable" the form components : fields and button
           $('#create-receipe').attr('disabled', 'disabled');
           $('#receipe-title').attr('disabled', 'disabled');
           $('#receipe-quantity').attr('disabled', 'disabled');
       }
    }
}