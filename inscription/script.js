const nombres = ['0','1','2','3','4','5','6','7','8','9'];

const countrySelect = document.getElementById('country-select');
const phoneInput = document.getElementById('phone-input');
const submitBtn = document.getElementById('submit-btn');

function nameVerify(){
    var name = document.querySelector("#nom");
    var letters = name.value.split("");
    for (const i of letters){
        if (nombres.includes(i)){
            name.style.backgroundColor = "#ffc1c1";
            break
        }else {name.style.backgroundColor = "#d4fbef";}
    }
    
}
function prenomVerify(){
    var prenm = document.querySelector("#prenom");
    var letters = prenm.value.split("");
    for (const i of letters){
        if (nombres.includes(i)){
            prenm.style.backgroundColor = "#ffc1c1";
            break
        }else {prenm.style.backgroundColor = "#d4fbef";}
    }
    
}
function numberVerify(){
    var phone = document.querySelector("#phone");
    var letters = phone.value.split("");
    for (const i of letters){
        if (!nombres.includes(i)){
            phone.style.backgroundColor = "#ffc1c1";
            break
        }else {phone.style.backgroundColor = "#d4fbef";}
    }
    
}

function soumission(){
    var nom = document.querySelector("#nom");
    if (nom.value == ""){
        nom.style.backgroundColor = "#ffc1c1";
        return false
    }else {prenmVerify()}
}
function prenmVerify(){
    var prenm = document.querySelector("#prenom");
    if (prenm.value == ""){
        prenm.style.backgroundColor = "#ffc1c1";
        return false
    }else {pwdVerify()}
}
function pwdVerify(){
    var pwd = document.querySelector("#password");
    if (pwd.value == ""){
        pwd.style.backgroundColor = "#ffc1c1";
        return false
    }else {pwdConfirmVerify()}
}
function pwdConfirmVerify(){
    var pwd = document.querySelector("#password");
    var pwdcfm = document.querySelector("#passwordConfirm");
    if (pwd.value !== pwdcfm.value){
        pwdcfm.style.backgroundColor = "#ffc1c1";
        return false
    }else {valider()}
}


function valider(){
    document.querySelector(".container").style.display = "none";
    document.querySelector(".success").style.display = "flex";
}

// Fonction pour nettoyer le numéro de téléphone en supprimant les espaces et les tirets
function cleanPhoneNumber(phoneNumber) {
    return phoneNumber.replace(/[\s-]/g, '');
}

// Quand un pays est sélectionné, mettre à jour l'input avec le code du pays
countrySelect.addEventListener('change', function() {
    const code = this.value;
    phoneInput.value = code + ' ' + cleanPhoneNumber(phoneInput.value.replace(/^\+\d+/, ''));
});

// Quand l'utilisateur tape un code de pays, sélectionner automatiquement le pays correspondant
phoneInput.addEventListener('input', function() {
    const cleanedValue = cleanPhoneNumber(this.value);
    const matchingOption = Array.from(countrySelect.options).find(option => cleanedValue.startsWith(option.value));
    if (matchingOption) {
        countrySelect.value = matchingOption.value;
    }
});

// Gestion du clic sur le bouton de validation
submitBtn.addEventListener('click', function() {
    const cleanedPhoneValue = cleanPhoneNumber(phoneInput.value);
    if (/^\+\d{1,3}\d{4,14}$/.test(cleanedPhoneValue)) {
        soumission();
    } else {
        alert('Veuillez entrer un numéro de téléphone valide.');
    }
});

