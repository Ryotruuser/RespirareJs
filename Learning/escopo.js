const student = "Gabriel"; //escopo global
if(1 > 0){
    let estudantee = 'Caroline'; // escopo do bloco
    var estudante = 'Ana'; // var rs
    console.log(estudante);
    console.log(student)
}

console.log(estudante);
console.log(student);
console.log(estudantee); // nao pode chamar variavel de bloco fora dele ne :c