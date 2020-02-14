import React, { Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../Template/grid'
import Iconbtn from '../Template/iconbtn'
import {clear, add, changeDescription, search} from './todoactions'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){

        const {clear, add, search, description} = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description) 
        }else if (e.key === 'Escape') {
            clear()
        }
    }

    render(){

        const {clear, add, search, description} = this.props

        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' onKeyUp={this.keyHandler} placeholder='Adicione uma tarefa' value={this.props.description} onChange={this.props.changeDescription}>
        
                    </input>
                </Grid>
                <Grid cols='12 3 2'>
                    <Iconbtn style='primary' icon='plus' onClick={() => add(description)}/>
                    <Iconbtn style='info' icon='search' onClick={search()} />
                    <Iconbtn style='default' icon='close' onClick={() => clear()} />
                </Grid>
            </div>
        )
    }

}



const mapStateToProps =  state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators ({clear, add, changeDescription, search}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)