import React, { useState } from 'react'
import { Sub } from '../types'

interface FormState {
    inputvalues: Sub
}

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
}


function Forms() {
    const [inputvalues, setInputvalues] = useState<FormState['inputvalues']>(INITIAL_STATE)

    const handleSubmit = () => {

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputvalues({
            ...inputvalues,
            [e.target.name]: e.target.value
        })
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