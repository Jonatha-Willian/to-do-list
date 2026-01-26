import { Router } from 'express';
//Importandoo o controller to-do para usar nas rotas
import * as ToDoController from '../controllers/to-do.controller';


const router = Router();

//Pegar todas as tarefas
router.get('/to-do', ToDoController.all);
//Adicionar nova tarefa
router.post('/to-do', ToDoController.add);
//Atualizar tarefa
router.put('/to-do/:id', ToDoController.update);
//deletar tarefa
router.delete('/to-do/:id', ToDoController.remove);

export default router;