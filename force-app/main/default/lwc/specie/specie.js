import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Specie  extends NavigationMixin(LightningElement) {
    @api specie

    get isInterior() {
        return this.specie.Ubicacion__c.includes("Interiores");
    }

    get isExterior() {
        return this.specie.Ubicacion__c.includes("Exteriores");
    }

    navigateToRecordViewPage() {
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.specie.Id,
                objectApiName: 'Specie__c', // objectApiName is optional
                actionName: 'view'
            }
        });
    }
}