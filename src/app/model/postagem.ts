import { tema } from "./tema"
import { usuario } from "./usuario"

export class postagem{
    public idPostagem: number
    public nome: string
    public descricao: string
    public usuario: usuario
    public tema: tema
}