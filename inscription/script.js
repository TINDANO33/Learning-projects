function soumission(){

    let infos ={}
    /* Les variables des informations personnelles*/
    let nom = document.querySelector("#nom");
    let prenom = document.querySelector("#prenom");
    let mdp = document.querySelector("#password");
    let mdpConfirm = document.querySelector("#passwordConfirm");

    // Vérification de nom et prénom
   if (nom.value == ""){
    nom.style.border = "solid red 2px";
   }else if (prenom.value == ""){
    prenom.style.border = "solid red 2px";
   } else if (mdp.value.length < 6){
   mdp.style.border = "solid red 2px";
   }else if(mdpConfirm.value !== mdp.value){
    mdpConfirm.style.border = "solid red 2px";
   }else{
   document.querySelector(".container").style.display = "none";
   }
}
