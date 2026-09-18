import PromptSync from "prompt-sync";
import {
    normaliserNom,
    validerResultat,
    ajouterApprenant,
    enregistrerResultat,
    rechercherApprenant,

}from"./fonction.js";
import { apprenants } from "./data.js";
const prompt = PromptSync();
console.log("   SAS PROGRESS CONSOLE     ");

console.log("1,afficher le tableau de bord");
console.log("2.  la liste des apprenants");
console.log("3. Ajouter un apprennant");
console.log("4.Consulter un apprenant par identifiant ");
console.log("0. Quitter");



const choix = prompt("votre choix : ");
switch(choix){
    case "1":
    console.log("tableau de bord");
        break;
    case"2":
    console.log(apprenants);
    break;
    case "3":
    const id = Number(prompt("ID :  "))
    const nom = prompt("Nom complet :  ")
    const ville = prompt("Ville :  ")
      console.log( ajouterApprenant(apprenants, id, nom, ville) )
       break;
    case "4":
        const idRecherche = Number(
            prompt("entrer id  ")
        )
        console.log(rechercherApprenant(apprenants,undefined,idRecherche))
        break;
        case "0":
            console.log("quitter")
            break;
        default:  
        console.log("choix invalide")  

    
    
    
    
    }





