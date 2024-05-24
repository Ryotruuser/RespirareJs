const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "nosso lema e 'estudar bastante!'";
const citacao = `Ju diz: "nosso lema e 'estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

//template string
console.log('a estudante chama' + estudante); //isso e uma de concatenar
console.log(`a estudante chama ${estudante}`); // isso e mais moderno.

//metodos js para strings tem diversos por ai split, tolower, toupper

const senha = 'senhaSegura123' + estudante.toUpperCase();
console.log(senha);


