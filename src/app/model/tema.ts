import { postagem } from "./postagem"

export class tema{
    public id: number
    public nome: string
    public descricao: string
    public postagem: postagem[]
}