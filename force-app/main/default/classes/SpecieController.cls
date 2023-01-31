public with sharing class SpecieController {    

    @AuraEnabled(cacheable=true)
    public static List<Specie__c> getSpecie(){
            return [
                SELECT Id,Name,	Descripcion__c,Imagen__c,Location__c,Ubicacion__c FROM Specie__c
            ];
        }
    
}
