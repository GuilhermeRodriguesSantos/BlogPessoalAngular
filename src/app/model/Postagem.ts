import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public idPostagem: number
    public nome: String
    public descricao: String
    public usuario: Usuario
    public tema: Tema
}