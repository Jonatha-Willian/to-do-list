import { Request, Response } from 'express';
import { Todo } from '../models/to-do.model';

export const all = async (req: Request, res: Response) => {
    //Usand o o model Todo para buscar todas as tarefas no banco de dados
    const list = await Todo.findAll();
    res.json({ list });
}
export const add = async (req: Request, res: Response) => {
    if(req.body.title) {
        let newTask = await Todo.create({
            title: req.body.title,
            description: req.body.description,
            //se o valor enviado for "true", atribui true, senão atribui false a done
            done: req.body.done === "true" ? true : false
        });
        res.status(201).json({ message: "Tarefa adicionada!", item: newTask });
    }else{
        res.json({ error: 'dados não enviados' });
    }
}
export const update = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    let task = await Todo.findByPk(id);

    if(task) {
        if(req.body.title) {
            task.title = req.body.title;
        }
        if(req.body.description) {
            task.description = req.body.description;
        }
        if(req.body.done !== undefined) {
            switch(req.body.done.toLowerCase()) {
                case "true":
                case "1":
                    task.done = true;
                    break;
                case "false":
                case "0":
                    task.done = false;
                    break;
            }
        }
        await task.save();
        res.json({ message: "Tarefa atualizada!", item: task });
    }else{
        res.json({ error: 'Tarefa não encontrada' });
    }
}

export const remove = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    let task = await Todo.findByPk(id);
    if(task) {
        await task.destroy();
        res.json({ message: 'Tarefa deletada com sucesso!' });
    }else{
        res.json({ error: 'Tarefa não encontrada' });
    }
}