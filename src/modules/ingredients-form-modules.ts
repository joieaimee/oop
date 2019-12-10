import * as $ from 'jquery';
import { QuantityProduct } from './../models/quantity-product';
import { Recette } from './../models/recette';
import { ReceipeFormModule } from './receipe-form-module';

export class IngredientFormModule {
    private form: JQuery = $('#ingredient-form');
    private fields: Array<JQuery> = new Array();
    private createaddAndContinue: JQuery = $('#add-and-next');
    private createaddAndStop: JQuery = $('#add-and-close');
    private checkAll: JQuery =$('#select-all');
    private receipe: ReceipeFormModule;

    public constructor(receipe: ReceipeFormModule) {
        this.form = $ ('#ingredient-form');
        this.receipe = receipe;

        this.getFormFields();
        // Populate from field
        // Sets the event handlers
        this.setEventHandlers();
    
    }
    private setEventHandlers () {
        this.form.on(
            'keyup change',
            (event: any): void => this. checkFormFill(event)
        );

        this.createaddAndStop.on(
            'click',
            (event: any): void =>this.addAndStop( event)
        );

        this.createaddAndContinue.on(
            'click',
            (event: any) : void =>this.addAndContinue(event)
        );

        this.checkAll.on(
            'click',
            (event: any) : void =>this.checkAllCheckboxes(event)
        );

        $('tbody').on(
            'click',
            '.ingredient-selection' ,
            (event: any): void  => this.manageSelectAllCheckbox (event)
        );
    }
    private manageSelectAllCheckbox(event: any): void {
      if ($('tbody tr').length == $('tbody .ingredient-selection:checked').length)  {
         this.checkAll.prop('checked', true);
         
      } else {
          this.checkAll.prop('checked', false);
      }
    }

    
    private checkAllCheckboxes(event:any): void {
    
        if (this.checkAll.is(':checked')) {
            $('tbody .ingredient-selection').prop('checked', true);
        } else {
            $('tbody .ingredient-selection').prop('checked',false);

        }
    }

    private addAndStop(event: any): void {
        this.addRow(event);

        //Call the ModalModule to open up the modal
        $('.outer-modal .content strong').html(this.receipe.getRecette().getTitle());
        $('.outer-modal').removeClass('hidden');

        for(let field of this.fields) {
            if (field.is ('input')) {
                field.val('');
            } else {
                field.children('option').removeAttr('selected')
                field.children('option:first').attr('selected','selected')
            }
        }
            this.createaddAndContinue.attr('disabled', 'disabled');
            this.createaddAndStop.attr('disabled', 'disabled');
    }

    private addAndContinue(event: any): void {
        this.addRow(event);
            for(let field of this.fields) {
                if (field.is ('input')) {
                    field.val('');
                } else {
                    field.children('option').removeAttr('selected')
                    field.children('option:first').attr('selected','selected')
                }
            }
    }

    private addRow(event: any): void {
        const ingredient: QuantityProduct= this.createObject();

        const tableRow: JQuery = $('<tr>'); // Add an HTML Element in DOM

        const checkboxCell:JQuery = $('<td>');
        //Create a checkbox and add it to the cell
        const checkbox: JQuery= $('<input>');
        checkbox.attr('type', 'checkbox');
        checkbox.addClass('ingredient-selection');
        let tableLenght: number =$('aside#receipe-results table tbody tr').length +1;
        console.log(`Next checkbox id: ${tableLenght}`);
        checkbox.attr('id', 'ingredient-' + tableLenght);
        checkboxCell.append(checkbox);

        const ingredientTitleCell: JQuery = $('<td>');
        ingredientTitleCell.html(ingredient.getName());

        const ingredientQuantityCell: JQuery = $('<td>');
        if (ingredient.getUnit()== 'unite') {
            ingredientQuantityCell.html(ingredient.getQuantity().toString());
        } else {
        ingredientQuantityCell.html(ingredient.getQuantity() + '' +ingredient.getUnit());
        }

        const unitPriceCell: JQuery =$('<td>');
        unitPriceCell.html(ingredient.getUnitPrice().toString());

        //Add cells to rows
        tableRow
        .append(checkboxCell)
        .append(ingredientTitleCell)
        .append(ingredientQuantityCell)
        .append(unitPriceCell);

        // Add row to tbody
        $('aside#receipe-results table tbody').append(tableRow);

        // Update totals
        $('aside#receipe-results table tbody').append(tableRow);
        $('#total-receipe').html(this.receipe.getRecette().getPriceRecette().toString());
        $('#total-piece').html(this.receipe.getRecette().getUnitPrice().toString());
    }

    private createObject(): QuantityProduct {
        const ingredient: QuantityProduct = new QuantityProduct();

        ingredient.setName($('#ingredient-title').val().toString());
        ingredient.setBaseUnit($('#base-unit').children('option:selected').val().toString());
        ingredient.setPrice(parseFloat($('#ingredient-price').val().toString()));
        ingredient.setQuantity(parseInt($('#ingredient-quantity').val().toString()));
        ingredient.setUnit($('#target-unit').children('option:selected').val().toString());
        ingredient.setTargetQuantity(parseInt($('#unit-quantity').val().toString()));

        // DI using: from ReceipeFormModule, gets Recette object and push ingredient
        this.receipe.getRecette().addProduct(ingredient);

        //Compute the unit price

        ingredient.setUnitPrice();
        return ingredient;
    }


    private checkFormFill(event: any): void {
        let fieldValue: string;
        let numberOfError: number =0;

        for (let field of this.fields) {
            if (field.is('input')) {
                fieldValue = field.val().toString().trim();
            } else {
                fieldValue = field.children('option:selected').val().toString();
            }
            if (fieldValue =='') {
                numberOfError = numberOfError +1;
            } 
        }

        //At the end...
        if(numberOfError === 0) {
            //Yeppp ...let's goooo
            this.createaddAndContinue.removeAttr('disabled');
            this.createaddAndStop.removeAttr('disabled');

        } else {
            this.createaddAndContinue.attr('disabled', 'disabled');
            this.createaddAndStop.attr('disabled', 'disabled');
        }
    }

    private getFormFields(): void {
        const fieldTypes: any = {
            field:'input',
            list:'select'
        };

        for (const key in fieldTypes) {
            this.form.find(fieldTypes[key]).each((index: number, element: HTMLElement) =>{
                this.fields.push($(element));
            });
        }
    }
}
