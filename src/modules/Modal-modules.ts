import*as $ from 'jQuery';
import { IngredientFormModule } from './ingredients-form-modules';
export class ModalModule {
    private myModal: JQuery = $('.outer-modal');
    private form: IngredientFormModule;
    public constructor(form: IngredientFormModule) {
        this.form = form;

        $('.outer-modal strong').html(this.form.getReceipeTitle());
        this.setEventhandlers();
    }

    public show(): void {
        this.myModal.removeClass('hidden');
    }

    public hide(): void {
        this.myModal.addClass('hidden')
    }

    private setEventhandlers(): void {
        $('div.footer button.btn-primary').on(
            'click',
            (event: any): void => this.yesButton(event)
        );

        $('div.footer button.btn-danger').on(
            'click',
            (event: any): void => this.noButton(event)
        )
    }
    private noButton(event: any): void {
        // clear tr in the table
        $('#receipe-results table tbody tr').remove();
        this.hide();
    }
    private yesButton(event: any): void {
        const receipes: string = localStorage.getItem('receipes');
        if(receipes !=null) {
            // receipes key in localStorage exixts
            const existingReceipes: Array<any> = JSON.parse(receipes);
            existingReceipes.push(this.form.getReceipe());
            localStorage.setItem('receipes', JSON.stringify(existingReceipes));
        } else{
            const updatedReceipe: Array<any> = [
                this.form.getReceipe()
            ];
            localStorage.setItem('receipes', JSON.stringify(updatedReceipe));
            console.log('No receipes key in localStorage')
        }
        // clear tr in the table
        $('#receipe-results table tbody tr').remove();
        this.hide();
    }
}