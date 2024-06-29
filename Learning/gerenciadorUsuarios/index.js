let fields = document.querySelectorAll("#form-user-create [name]");

let user = {};

fields.forEach( field => {

    if(field.name == "gender"){
        
        if(field.checked){
            user[field.name] = field.value;
        }

    }else{

        user[field.name] = field.value;

    }
})
