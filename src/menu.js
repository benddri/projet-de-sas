import PromptSync from "prompt-sync";
import { apprenants } from "./data.js";
import {
    normaliserNom,
    validerResultat,
    ajouterApprenant,
    enregistrerResultat,
    consulterParId,
    rechercherParNom,
    afficherApprenants,
    trierParalphabe,
    trierParProgression,


}from"./fonction.js";
const prompt = PromptSync();
let running=true

do{
console.log("\n======== SAS PROGRESS CONSOLE ========  ");

console.log("1.   la liste des apprenants");
console.log("2.   Ajouter un apprennant");
console.log("3.   Consulter un apprenant par identifiant");
console.log("4.   Ajouter ou modifier le résultat d'une journée");
console.log("5.   Rechercher un apprenant par nom")
console.log("6.   Trier les apprenants par progression décroissante")
console.log("7.   Trier les apprenants par ordre alphabétique")
console.log("0.  Quitter");


let  choix = prompt("votre choix : ");
switch(choix){
    case "1":
    afficherApprenants(apprenants)//afficher des apprenant
    break;
    case"2":
     ajouterApprenant()//ajouter apprenant
    break;

    case "3":
        consulterParId()// consolter par id
    break;
    case "4":
       enregistrerResultat()  //ajouter,modefier resultat
    break;
    case "5":
      rechercherParNom()
    break;
    case "6":
        trierParProgression()

    break;
    case "7":
         trierParalphabe()// trier par alphabit
     break;
    
    case "0":
    console.log("quitter")
    running =false
    break;
    default:  
    console.log("choix invalide") } 


}while (running);
