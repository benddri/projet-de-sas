import {apprenants} from "./data.js";
export function normaliserNom(nom){
    return nom.trim().toLowerCase().replace(/\s+/g, " ");
    
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

export function afficherApprenants() {

    apprenants.forEach((apprenant) => {

    console.log("ID :", apprenant.id);
    console.log("nom complet :", apprenant.nomComplet);
    console.log("nom ville :", apprenant.ville);
    console.log("--------------------");

    });
}

export function ajouterApprenant(apprenant) {

if (!apprenant || typeof apprenant !== "object") {
        return "Apprenant invalide";
    }

if (typeof apprenant.id !== "number" || apprenant.id <= 0) {
        return "ID invalide";
    }

if (typeof apprenant.nomComplet !== "string" || apprenant.nomComplet.trim() === "") {
        return "Nom invalide";
    }

if (typeof apprenant.ville !== "string" || apprenant.ville.trim() === "") {
        return "Ville invalide";
    }

    apprenant.nomComplet = apprenant.nomComplet.trim();
    apprenant.ville = apprenant.ville.trim();

    return true;
}


export function enregistrerResultat(list,idApprennant,resultats){
    let apprenantstrouve=null;
    for(let i=0;i < list.length;i++){
        if(list[i].id===idApprennant){
            apprenantstrouve = list[i]
            break
        }
    }
    if(apprenantstrouve === null )
        return"apprenant introuvable";

    const validation = validerResultat(resultats)
    if(validation !== true){
        return validation
    }

    apprenantstrouve.resultats.push(resultats)
    return true;

}
export function rechercherApprenant(list,nom,id,ville){
    for(let i = 0; i < list.length; i++){
        if(id !== undefined && list[i].id === id)
            { return list[i];
        }
        if(nom !== undefined && list[i].nomComplet === nom){
            return list[i];
        }
        if(ville !== undefined && list[i].ville === ville){
            return list[i];
        }
    }
    return null;
}