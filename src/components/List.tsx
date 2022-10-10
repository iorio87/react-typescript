import React from 'react'
import {Sub} from '../types'

interface Props {
    subs: Array<Sub>

}

function List({ subs }: Props) {
    return (
        <div className="container m-auto w-80">
            <h1 className="text-2xl font-bold">Luciano subs</h1>
            <ul>
                {subs.map((sub) => {
                    return (
                        <li key={sub.nick} className='border border-gray-500 rounded-md m-4 flex flex-col items-center shadow-md p-2'>
                            <img src={sub.avatar} alt={sub.nick} className='rounded-full w-20' />
                            <h4 className="font-bold">{sub.nick} <small className="text-red-500">({sub.subMonths})</small></h4>
                            <p className="italic">{sub.description?.substring(0, 100)}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default List