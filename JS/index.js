const form = document.querySelector("#add_retraite")
const lastname = document.querySelector("#lastname")
const firstname = document.querySelector("#firstname")
const age = document.querySelector("#age")
const firstname_error = document.querySelector("#firstname_error")
const lastname_error = document.querySelector("#lastname_error")
const age_error = document.querySelector("#age_error")
const tbody = document.querySelector("#tbody");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    console.log("name : ", lastname.value);
    console.log("prénom : ", firstname.value);
    console.log("Age : ", age.value);

    let check_value = check();

    if(check_value == true){
        console.log("let's go sa marche !");

        const tr = document.createElement("tr");
        
        const td1 = document.createElement("td");
        let TotalRowCount = tbody.rows.length;
        TotalRowCount++;
        td1.innerText = TotalRowCount;

        const td2 = document.createElement("td");
        td2.innerText = lastname.value;

        const td3 = document.createElement("td");
        td3.innerText = firstname.value;
        
        const td4 = document.createElement("td");
        td4.innerText = age.value;

        const td5 = document.createElement("td");
        const delete_button = document.createElement("button");
        delete_button.classList.add("delete");
        delete_button.innerText = "Supprimer";
        delete_button.addEventListener("click", function(event){
            event.preventDefault();
            delete_button.parentNode.parentNode.remove();
        })
        td5.append(delete_button)

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tbody.append(tr);
    }
})

function check(){
    let result = true;

    //premier check sur le NOM
    let a = check_name(lastname, lastname_error);
    if (a == false){
        result = false
    }

    //second check sur le PRENOM
    let b = check_name(firstname, firstname_error);
    if (b == false){
        result = false
    }

    //troisième check pour l'age
    let c = check_age(age, age_error);
    if (c == false){
        result = false
    }

    return result;
}

function check_name (form_field, form_field_error){
    if (form_field.value.length >=3 && form_field.value.length <= 30){
        form_field_error.innerText = "";
        return true;
    }
    else{
        form_field_error.innerText = "Champ incorrect, doit être compris entre 3 et 30 caractère";
        return false;
    }
}

function check_age (age, age_error){
    if (age.value >= 18 && age.value <= 99){
        age_error.innerText = "";
        return true;
    }
    else{
        age_error.innerText = "Champ incorrect, doit être compris entre 3 et 30 caractère";
        return false;
    }
}

//profil flemmard

const prefill = document.querySelector("#prefill")
prefill.addEventListener("click", function(event){
    event.preventDefault();

    lastname.value = "Michel";
    firstname.value = "Jacquie";
    age.value = "24"
})