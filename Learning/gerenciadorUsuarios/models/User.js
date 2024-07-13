class User {

    constructor(name,gender,birth,country,email,password,photo, admin){
        
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();
    }

    get name(){
        return this._name;
    }
    set name(name){
        return this._name = name;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        return this._gender = gender;
    }

    get birth(){
        return this._birth;
    }
    set birth(birth){
        return this._birth = birth;
    }
    
    get country(){
        return this._country;
    }
    set country(country){
        return this._country = country;
    }

    get email(){
        return this._email;
    }
    set email(email){
        return this._email = email;
    }

    get password(){
        return this._password;
    }
    set password(password){
        return this._password = password;
    }

    get photo(){
        return this._photo;
    }
    set photo(photo){
        return this._photo = photo;
    }

    get admin(){
        return this._admin;
    }
    set admin(admin){
        return this._admin = admin;
    }

    get register(){
        return this._register;
    }
    set register(register){
        return this._register = register;
    }

}