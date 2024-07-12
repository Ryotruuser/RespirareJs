class User {
    #name
    #gender
    #birth
    #country
    #email
    #password
    #photo
    #admin
    #register
    constructor(name,gender,birth,country,email,password,photo, admin){
        
        this.#name = name;
        this.#gender = gender;
        this.#birth = birth;
        this.#country = country;
        this.#email = email;
        this.#password = password;
        this.#photo = photo;
        this.#admin = admin;
        this.#register = new Date();
    }

    get name(){
        return this.#name;
    }
    set name(name){
        return this.#name = name;
    }

    get gender(){
        return this.#gender;
    }
    set gender(gender){
        return this.#gender = gender;
    }

    get birth(){
        return this.#birth;
    }
    set birth(birth){
        return this.#birth = birth;
    }
    
    get country(){
        return this.#country;
    }
    set country(country){
        return this.#country = country;
    }

    get email(){
        return this.#email;
    }
    set email(email){
        return this.#email = email;
    }

    get password(){
        return this.#password;
    }
    set password(password){
        return this.#password = password;
    }

    get photo(){
        return this.#photo;
    }
    set photo(photo){
        return this.#photo = photo;
    }

    get admin(){
        return this.#admin;
    }
    set admin(admin){
        return this.#admin = admin;
    }

    get register(){
        return this.#register;
    }
    set register(register){
        return this.#register = register;
    }

}