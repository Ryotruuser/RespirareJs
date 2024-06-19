import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User("Mariana", "M@m.com", "2020-01-01");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Rodrigo", "r@r,com", "2020-01-01");
console.log(novoAdmin.exibirInfos());

