import React from 'react';
import { receiveStep } from '../../actions/step_actions';
import StepListItemContainer from './step_list_item_container'
import StepForm from './step_form'

const StepList = ({steps, todo_id, receiveStep}) => {
    return (
        <div>
            <ul>
                {steps.map((step) => {
                    return <StepListItemContainer key={step.id} step={step} />
                })}
            </ul>
            <StepForm todo_id={todo_id} receiveStep={receiveStep}/>
        </div>
    )
}

export default StepList;