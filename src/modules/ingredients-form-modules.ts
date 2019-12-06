import * as $ from 'jquery';

export class IngredientFormModule {
    private form: JQuery = $('#ingredient-form');

    private fields: Array<JQuery> = new Array();

    private addAndContinue: JQuery = $('#add-and-next');
    private addAndStop: JQuery = $('#add-and-close');

    public constructor() {
        this.getFormFields();

        // Sets the event handlers
        this.setEventHandlers();
    
    }
    private setEventHandlers () {
        this.form.on(
            'keyup change',
            (event: any): void => this. checkFormFill(event)
        );

        this.addAndStop.on(
            'click',
            (event: any): void =>this.addAndStop1()
        );

        this.addAndContinue.on(
            'click',
            (event: any) : void =>this.addAndContinue()
        );
    }

     addAndStop1() {
        for(let field of this.fields) {
            if field.is ('input')) {
                field.val('');
            } else {
                field.children('option').removeAttr('selected')
                field.children('option').attr('selected','selected')
            }
        }
        this.addAndStop.attr('disabled', 'disabled');
        this.addAndContinue.attr('disabled', 'disabled');
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
                console.warn(`On a un problème sur ${field.attr('id')}`);
                numberOfError = numberOfError +1;
            } 
        }
        //At the end...
        if(numberOfError === 0) {
            //Yeppp ...let's goooo
            this.addAndContinue.removeAttr('disabled');
            this.addAndStop.removeAttr('disabled');

        } else {
            this.addAndContinue.attr('disabled', 'disabled');
            this.addAndStop.attr('disabled', 'disabled');
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
