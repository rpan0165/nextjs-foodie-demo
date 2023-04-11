import React from 'react'

function page() {
    return (
        <div>
            <div className='mx-auto mt-5 mb-5 py-5 border-5 border-gray-400 border-spacing-4 max-w-5xl'>
                <h1 className='text-5xl text-center mb-4'>Sysco Product Item</h1>
                <ul role="list" className="marker:text-sky-600 list-disc pl-5 space-y-3 text-slate-500  text-center">
                    <li>Title: 1 Sysco Imperial Granny Smith Apple, Finely Diced</li>
                    <li>SUPC: 2795896</li>
                    <li>Brand Description: IMPERIAL FRESH</li>
                </ul>
            </div>
        </div>
    )
}

export default page
