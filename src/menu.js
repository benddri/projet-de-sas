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

console.log("1,afficher les apprenants");
console.log("3. Consulter un apprenant");
console.log("4. Ajouter un résultat");
console.log("0. Quitter");



const choix = prompt("votre choix : ");
switch(choix){
    case "1":

}





