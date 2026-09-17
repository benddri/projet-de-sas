export function normaliserNom(nom){
    return nom.trim().toLowerCase();
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
        return "chalenge doit etre true ou fanse"
    }
    return true;
}
export function ajouterApprenant(list,id,nomComplet,ville){
    //verifier id
    if(typeof id!=="number"||id<=0){
        return"identifiant doit etre un number";
    }
    //verifier nom et ville
    if(typeof nomComplet!=="string"||nomComplet.trim()===""){
        return "nomComplet est invalide"
    }
    if(typeof ville!=="string"||ville.trim()===""){
        return"ville invalide "
    }
    //verifie id s'il deja exest
    for(let i=0;i<list.length;i++){
        if(list[i].id===id){
            return"erreur"
        }
    }
    const novelApprennant={
        id:id,
        nomComplet:nomComplet.trim(),
        ville:ville.trim(),
        resultats:[]
    };
    list.push(novelApprennant)
    return true


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