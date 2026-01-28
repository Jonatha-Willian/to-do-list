import { Request, Response } from 'express';
import { ToDo } from '../models/to-do.model';
import { error } from 'console';

export const all = async (req: Request, res: Response) => {
    //Usand o o model ToDo para buscar todas as tarefas no banco de dados
    const list = await ToDo.findAll();
    res.json({ list });
}
export const add = async (req: Request, res: Response) => {
    if(req.body.title) {
        let newTask = await ToDo.create({
            title: req.body.title,
            //se o valor enviado for "true", atribui true, senão atribui false a done
            done: req.body.done === "true" ? true : false
        });
        res.status(201).json({ message: "Tarefa adicionada!", item: newTask });
    }else{
        res.json({ error: 'dados não enviados' });
    }
}
export const update = async (req: Request, res: Response) => {
    //Lógica para atualizar uma tarefa existente
}
export const remove = async (req: Request, res: Response) => {
    //Lógica para deletar uma tarefa existente
}