import { Sub } from '../types'
import UseNewSubForm from './hooks/UseNewSubForm'


interface FormProps {
    onNewSub: (newSub: Sub) => void
}

function Forms({ onNewSub }: FormProps) {
    //const [inputvalues, setInputvalues] = useState<FormState['inputvalues']>(INITIAL_STATE)

    const [inputvalues, dispatch] = UseNewSubForm()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputvalues)
        handleClear()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        dispatch({
            type: 'change_value',
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({type: 'clear'})
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='p-1'>
                    <input onChange={handleChange} value={inputvalues.nick} type="text" name='nick' placeholder='nick' className='border border-gray-300 px-3 m-1' />
                    <input onChange={handleChange} value={inputvalues.subMonths} type="number" name='subMonths' placeholder='subMonths' className='border border-gray-300 px-3 m-1' />
                    <input onChange={handleChange} value={inputvalues.avatar} type="text" name='avatar' placeholder='avatar' className='border border-gray-300 px-3 m-1' />
                    <input onChange={handleChange} value={inputvalues.description} type="text" name='description' placeholder='description' className='border border-gray-300 px-3 m-1' />
                </div>
                <button className='bg-green-500 mt-2 border border-black rounded-md hover:bg-green-700'>Add New Sub!</button>
            </form>
        </div>
    )
}

export default Forms