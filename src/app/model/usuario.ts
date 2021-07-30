import { postagem } from "./postagem"

export class usuario{
    public idUsuario: Number
    public nome: string
    public email: string
    public senha: string
    public foto: string
    public tipo: string
    public postagem: postagem[]
}