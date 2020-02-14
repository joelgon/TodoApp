import React from 'react'
import Iftest from './if'

export default props =>(
    <Iftest test={!props.hide}>
        <button className={'btn btn-'+ props.style} onClick={props.onClick}>
            <i className={'fa fa-'+ props.icon}></i>
        </button>
    </Iftest>
)