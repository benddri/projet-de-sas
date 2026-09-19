export function normaliserNom(nom) {
  if (typeof nom !== "string") {
    return "";
  }

  return nom
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

export function validerResultat(resultat){
    //verifier objet
    if(!resultat || typeof resultat !== "object"){
        return "resultat invalide :il doit etre objet"
    }
    //verifier le jour
     if(typeof resultat.jour !== "number"|| resultat.jour < 1 || resultat.jour > 7){
        return "il doit etre compre entre 1 et 7"
    }
    //verifier exercice terminer
     if(typeof resultat.exercicesTermines !== "number" ||resultat.exercicesTermines < 0){
        return "exercicetermine doit etre >= 0 "
    }
    //verifier totalexercice
    if(typeof resultat.totalExercices !== "number" ||resultat.totalExercices <= 0){
        return "exercicetermine doit etre > 0 "
    }
    //totalexercice il faut depasser exercicetermine
     if(resultat.exercicesTermines > resultat.totalExercices ){
        return "exercicetermine ne fait pas depasser totalexercice "
    }
    //verifier challange
    if(typeof resultat.challengeTermine!=="boolean"){
        return "chalenge doit etre true ou false"
    }
    return true;

}
import PromptSync from "prompt-sync";
import { apprenants } from "./data.js";

const prompt = PromptSync();
export function ajouterApprenant() {2
    let nomComplet = prompt("Veuillez saisir votre nom complet : ");

    while (!nomComplet || nomComplet.trim() === "") {
        console.log("Veuillez saisir un nom validé");
        nomComplet = prompt("Veuillez saisir votre nom complet : ");
    }

    let ville = prompt("entrer ta ville: ");

    while (!ville || ville.trim() === "") {
        console.log("Veuillez saisir une ville validé");
        ville = prompt("Veuillez saisir votre ville : ");
    }


    // Chercher le plus grand ID
    let nouvelId = 0;

    for (let apprenant of apprenants) {
        if (apprenant.id > nouvelId) {
            nouvelId = apprenant.id;
        }
    }

    // Ajouter 1 au plus grand ID
    nouvelId++;

    let apprenant = {
        id: nouvelId,
        nomComplet: normaliserNom(nomComplet),
        ville: ville.charAt(0).toUpperCase() + ville.slice(1),
        resultats: []
    };

    apprenants.push(apprenant);

    console.log(`le nouveau apprenants est crié avec l'Id : ${apprenant.id}`)
} 
export function enregistrerResultat() {
    let id = Number(prompt("Veuillez saisir l'ID de l'apprenant : "));
    let apprenant = null;
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id === id) {
            apprenant = apprenants[i];
            break;
        }
    }
    if (!apprenant) {
        console.log("Apprenant n'existe pas");
        return;
    }
    let jour = Number(prompt("Veuillez saisir le jour (1-7) : "));
    let exercicesTermines = Number(prompt("Nombre d'exercices terminés : "));
    let totalExercices = Number(prompt("Nombre total d'exercices : "));
    let challengeTermine = prompt("Challenge terminé ? (true/false) : ") === "true";
    const resultat = {
        jour: jour,
        exercicesTermines: exercicesTermines,
        totalExercices: totalExercices,
        challengeTermine: challengeTermine
    };
    const validation = validerResultat(resultat);
    if (validation !== true) {
        console.log(validation);
        return;
    }
    let trouve = false;

    for (let i = 0; i < apprenant.resultats.length; i++) {
        if (apprenant.resultats[i].jour === resultat.jour) {
            apprenant.resultats[i] = resultat;
            trouve = true;
            break;
        }
    }
    if (!trouve) {
        apprenant.resultats.push(resultat);
    }
    console.log("Resultat enregistre ");
}
export function consulterParId(){
    let id=Number(prompt("entrer voutre ID :"))
    for(let apprenant of apprenants){
        if(apprenant.id===id){
            console.log(apprenant)
            return apprenant
        }
    }
    console.log("apprenant introuvable")
    return null
}
export function  rechercherParNom() {
    let nom=prompt("entrer voutre nom :")
    const nomRecherche =normaliserNom(nom)
    for(let apprenant of apprenants){
        const nomApprenant=normaliserNom(apprenant.nomComplet)
        if(nomApprenant.includes(nomRecherche)){
            console.log(apprenant)
            return apprenant
        }
    }
    console.log("Apprenant introvable")
    return null
}

export function afficherApprenants(apprenants) {
 for (let i = 0; i < apprenants.length; i++) {
     console.log(apprenants[i]);
    }
}


























