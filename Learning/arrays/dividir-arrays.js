const listaEstudantes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara',
'Marjorie','Guilherme', 'Aline', 'Fabiana','Andre', 'Carlos',
'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renanta',
'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length / 2);
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

console.log(sala1);
console.log(sala2);