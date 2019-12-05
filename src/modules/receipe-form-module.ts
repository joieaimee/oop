import * as $ from 'jquery';
export class ReceipeFormModule {
    public constructor() {
        this.setcreateButtonHandler();
    }

    private setcreateButtonHandler(): void {
        $('#create-receipe').on(
            'click',
            (event : any): void => this.toggleIngredientForm(event)
        );
    }
    private toggleIngredientForm(event: any): void {
       if ($('#ingredient-form').hasClass('hidden-form')) {
           //Have to remove the hidden-form class
           $('#ingredient-form').removeClass('hidden-form');
       } 
    }
}