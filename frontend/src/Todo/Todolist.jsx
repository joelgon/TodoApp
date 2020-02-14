import React from 'react'
import { connect } from 'react-redux' 
import {bindActionCreators} from 'redux'

import {remove, markAsDone, markAdPending} from './todoactions'
import Iconbtn from '../Template/iconbtn'

const Todolist = props =>{

    const RenderRows = () =>{
        
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <Iconbtn style='success' icon='check' hide={todo.done} onClick={() => props.markAsDone(todo)} />
                    <Iconbtn style='warning' icon='undo' hide={!todo.done} onClick={() => props.markAdPending(todo)} />
                    <Iconbtn style='danger' icon='trash-o' hide={!todo.done} onClick={() => props.remove(todo)}/>
                </td>
            </tr>
        ))
    }

    return(
        <table className='table table-striped' >
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {RenderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = (dispatch) => bindActionCreators({remove, markAsDone, markAdPending}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)