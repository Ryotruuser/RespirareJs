import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User("Mariana", "M@m.com", "2020-01-01");
// console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin("Rodrigo", "r@r,com", "2020-01-01");
// console.log(novoAdmin.role)
// // novoAdmin.nome = "";
// // console.log(novoAdmin.nome)

const novoDocente = new Docente("Renan", "r@r.com", "1997-15-08");
console.log(novoDocente.exibirInfos())

console.log(novoDocente.role);