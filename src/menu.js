import PromptSync from "prompt-sync";
import { apprenants } from "./data.js";
import {
    normaliserNom,
    validerResultat,
    ajouterApprenant,
    enregistrerResultat,
    rechercherApprenant,
    afficherApprenants,

}from"./fonction.js";
const prompt = PromptSync();
let choix
let running=true
do{
console.log("   SAS PROGRESS CONSOLE     ");

console.log("1,afficher le tableau de bord");
console.log("2.la liste des apprenants");
console.log("3. Ajouter un apprennant");
console.log("4.Consulter un apprenant par identifiant ");
console.log("5.Ajouter ou modifier le résultat d'une journée")
console.log("6.Rechercher un apprenant par nom")
console.log("7.Filtrer les apprenants par niveau")
console.log("8. Trier les apprenants par progression décroissante")
console.log("9. Trier les apprenants par ordre alphabétique")
console.log("0. Quitter");



 choix = prompt("votre choix : ");
switch(choix){
    case "1":
    console.log("tableau de bord");
    break;
    case"2":
    afficherApprenants(apprenants)
    break;
    case "3":
    ajouterApprenant()
    break;
    case "4":
    const idRecherche = Number(
    prompt("entrer id  ")
    )
    console.log(rechercherApprenant(apprenants,undefined,idRecherche))
        break;
    case "5":
        
    

    break;
    
        case "0":
            console.log("quitter")
            running=false
            break;
        default:  
        console.log("choix invalide") } 


}while (running);
