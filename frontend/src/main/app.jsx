import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../Template/custom.css'

import React from 'react'
import  Menu from '../Template/Menu'
import Routes from './routes'

export default props =>(
    <div className='container'>
        <Menu/>
        <Routes/>
    </div>
)