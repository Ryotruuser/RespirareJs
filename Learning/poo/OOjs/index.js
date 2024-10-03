import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";


const novoUser = new User("Renan", "r@r.com", "2024-01-01");
const novoAdmin = new Admin("Admin", "admin@admin.com", "2024-04-01");
const novoDocente = new Docente("Giulia", "G@g.com", "2024-05-01");

console.log(novoUser.exibirInfo());

novoUser.nome = ""
console.log(novoUser.exibirInfo());

// novoUser.nome = "Jose";
// console.log(novoUser.exibirInfo());