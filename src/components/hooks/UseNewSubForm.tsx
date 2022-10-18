import { useReducer } from "react"
import { Sub } from '../../types'

interface FormState {
    inputvalues: Sub
}

type formReducerAction = {
    type: 'change_value',
    payload: {
        inputName: string,
        inputValue: string
    }
} |
{
    type: 'clear'
}

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
}


const formReducer = (state: FormState['inputvalues'], action: formReducerAction) => {
    switch (action.type) {
        case 'change_value':
            const { inputName, inputValue } = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
        case 'clear':
            return INITIAL_STATE
    }
}

function UseNewSubForm () {
    return useReducer(formReducer, INITIAL_STATE)
}

export default UseNewSubForm