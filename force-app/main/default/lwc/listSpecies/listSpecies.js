import { LightningElement,wire } from 'lwc';
import getSpecies from '@salesforce/apex/SpecieController.getSpecie'
export default class ListSpecies extends LightningElement {

    @wire(getSpecies)
    species;

    // species =[
    //     {
    //     Name: "Jazmin",
    //    Description: "Planta muy valorada en el mundo",
    //    Imagen__URL__c:"https://www.lifeder.com/wp-content/uploads/2020/07/crecimiento-de-una-planta-lifeder-1-633x420.jpg",
    //    Location__c : "Europa,Africa"
    //     },
    //     {
    //     Name: "Florencia",
    //     Description: "Muy escaza en las selvas",
    //     Imagen__URL__c:"https://www.fotonostra.com/albums/plantas/fotos/plantas.jpg",
    //     Location__c : "Oceania"
    //     },
    //     {
    //     Name: "Carmencia",
    //     Description: "Tiene muy bonitos frutos",
    //     Imagen__URL__c:"https://www.thecolvinco.com/es/c/wp-content/uploads/2020/11/Monstera-L_02-copia-1-768x768.jpg",
    //     Location__c : "Latam"
    //     },
    // ]
}