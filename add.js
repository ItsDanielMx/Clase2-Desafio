import { Usuario } from "./class/Usuario.js";
const mascotas = ["Gato", "Perro"]
const user = new Usuario("Daniel", "Ivan", [{ nombre: "La vida de Lazarillo de Tormes", autor: "Diego Hurtado de Mendoza" }], mascotas)

const main = ()=>{
    console.log(user.getFullName())
    user.addMascota("Capibara")
    console.log(user.countMascotas())
    user.addBook("El diablo de la botella", "Robert Louis Stevenson")
    console.log(user.getBookNames())
}
main()