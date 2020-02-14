import React from 'react'
import PageHeader from '../Template/pageHeader'
import TodoForm from './TodoForm'
import Todolist from './Todolist'

export default props =>(
    <div>
        <PageHeader name='Tarefas' small='Cadastro'/>
        <TodoForm />
        <Todolist />
    </div>
)