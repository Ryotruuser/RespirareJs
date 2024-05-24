const chovendo = true;
let pegarGuardaChuva;

pegarGuardaChuva = () => {
    console.log("Pegar guarda chuva");
}

// verdade
if (chovendo){
    pegarGuardaChuva()
}else{
    console.log("nao esta chovendo hoje!");
}

//invertendo valor
if (!chovendo){
    pegarGuardaChuva()
}else{
    console.log("nao esta chovendo hoje!");
}

